"use client";

import { chain } from "@/app/chain";
import { client } from "@/app/client";
import {
  ConnectButton,
  useActiveAccount,
  useReadContract,
} from "thirdweb/react";
import { contract } from "../utils/contract";
import { Deposit } from "./Deposit";
import { toEther } from "thirdweb";
import { TasksList } from "./TaskList";
import { AddTask } from "./AddTask";

export const Accountability = () => {
  const account = useActiveAccount();

  const { data: depositAmount } = useReadContract({
    contract: contract,
    method: "getDeposit",
  });

  const { data: taskCount } = useReadContract({
    contract: contract,
    method: "getTasksCount",
  });

  const { data: lockedFundsAmount, isLoading: isLoadingLockedFundsAmount } =
    useReadContract({
      contract: contract,
      method: "getDeposit",
    });

  if (account) {
    return (
      <div style={{ textAlign: "center", minWidth: "500px" }}>
        <ConnectButton client={client} chain={chain} />
        <div>
          {depositAmount?.toString() === "0" && taskCount?.toString() === "0" ? (
            <Deposit />
          ) : depositAmount?.toString() !== "0" && taskCount?.toString() === "0" ? (
          <TasksList />
          ) : (
            <>
              {depositAmount && (
                <div style={{ marginTop: "20px"}}>
                  <h3>Locked Funds : </h3>
                  <p>{toEther(lockedFundsAmount?.toString())} ETH</p>
                </div>
              )}

              <AddTask />
              <TasksList />
            </>
          )}
        </div>
      </div>
    );
  }
};
