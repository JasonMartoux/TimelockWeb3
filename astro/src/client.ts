import { createThirdwebClient } from "thirdweb";

const CLIENT_ID = process.env.THIRDWEB_CLIENT_API_KEY as string;

export const client = createThirdwebClient({
  clientId: CLIENT_ID,
})