/* import { Keypair } from "@solana/web3.js";

const keypair = Keypair.generate();

console.log(`The public key is: `, keypair.publicKey.toBase58());
console.log(`The secret key is: `, keypair.secretKey);
console.log(`🆗 Generated keypair!`);  */
 
import * as dotenv from "dotenv"
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

dotenv.config();

const keypair = getKeypairFromEnvironment("SECRET_KEY");

console.log('🆗 Finished! ');


