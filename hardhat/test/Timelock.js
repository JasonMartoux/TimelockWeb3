const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");

describe("TimeLock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployContractFixture() {
    const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
    const ONE_GWEI = 1_000_000_000;

    const lockedAmount = ONE_GWEI;

    const unlockTime = (await time.latest()) + ONE_YEAR_IN_SECS;

    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const TimeLock = await ethers.getContractFactory("Timelock");
    const timeLock = await TimeLock.deploy();
    await timeLock.depositFunds({ value: lockedAmount });
    await timeLock.setTimelock(unlockTime);

    return { timeLock, unlockTime, lockedAmount, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { timeLock, owner } = await loadFixture(deployContractFixture);

      expect(await timeLock.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { timeLock, lockedAmount } = await loadFixture(
        deployContractFixture
      );

      expect(await ethers.provider.getBalance(timeLock.target)).to.equal(
        lockedAmount
      );
    });
  });

  describe("Withdrawals", function () {
    it("Should revert with the right error if called too soon", async function () {
      const { timeLock } = await loadFixture(deployContractFixture);

      await expect(timeLock.releaseFunds()).to.be.revertedWith(
        "Timelock: funds are still locked"
      );
    });
  });
});
