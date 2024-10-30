import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { ConnectButton, useActiveAccount } from "thirdweb/react";

export const Accountability = () => {
  const account = useActiveAccount();

  if(account) {
    return (
      <div style={{ textAlign: "center", minWidth: "500px" }}>
        <ConnectButton
            client={client}
            chain={chain}
        />
        dsdqsd
        <Accountability />
      </div>
    )
  }
};