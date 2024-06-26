import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "hardhat-deploy-ethers";

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    nebula: {
      url: "https://rpc-nebulas-testnet.uniultra.xyz", // Replace with the actual RPC URL for Nebula testnet
      accounts: [
        "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
      ],
      chainId: 2484,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // Here 0 means the first account will be used as deployer
    },
  },
};

export default config;
