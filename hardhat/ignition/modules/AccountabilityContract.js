const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Account", (m) => {
  const baseContract = m.contract("AccountabilityContract");

  return { baseContract };
});
