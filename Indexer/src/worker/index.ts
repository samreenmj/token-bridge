import dotenv from "dotenv";
dotenv.config();

import { JsonRpcProvider, Contract } from "ethers";
import { ABI } from "../contract/ABI.js";

const providerBNB = new JsonRpcProvider(process.env.BNB_RPC);
const providerAVA = new JsonRpcProvider(process.env.AVA_RPC);

const BRIDGE_CONTRACT_ADDRESS_BNB = process.env.BRIDGE_CONTRACT_ADDRESS_BNB;
if (!BRIDGE_CONTRACT_ADDRESS_BNB) {
    throw new Error("BRIDGE_CONTRACT_ADDRESS_BNB must be defined in the environment");
}

const BRIDGE_CONTRACT_ADDRESS_AVA = process.env.BRIDGE_CONTRACT_ADDRESS_AVA;
if (!BRIDGE_CONTRACT_ADDRESS_AVA) {
    throw new Error("BRIDGE_CONTRACT_ADDRESS_AVA must be defined in the environment");
}

const contractBNB = new Contract(
    BRIDGE_CONTRACT_ADDRESS_BNB,
    ABI,
    providerBNB
);

const contractAVA = new Contract(
    BRIDGE_CONTRACT_ADDRESS_AVA,
    ABI,
    providerAVA
);


// event listeners