import { getContract } from "thirdweb";
import { client } from "@/app/client";
import { chain } from "@/app/chain";
import { contractABI } from "./contractABI";

const contractAdress = "0x84949d05CF85d3e3fa6482a91d695408c8AFF0d2";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAdress,
  abi: contractABI,
});
