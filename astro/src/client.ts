import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = process.env.THIRDWEB_CLIENT_API_KEY as string;

if(!CLIENT_ID) {
  throw new Error("No Client ID provided")
}

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
})