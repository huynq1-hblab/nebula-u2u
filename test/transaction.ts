import { ethers } from "ethers";
import MyToken from "../deployments/nebula/MyToken.json";
const nebulaTestnetRpcUrl = "https://rpc-nebulas-testnet.uniultra.xyz";

const privateKey =
  "ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

const contractAddress = "0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0";

async function transfer() {
  const provider = new ethers.providers.JsonRpcProvider(nebulaTestnetRpcUrl);
  const wallet = new ethers.Wallet(privateKey, provider);
  const contract = new ethers.Contract(contractAddress, MyToken.abi, wallet);

  // Example: Mint new tokens
  async function mintTokens(to: string, amount: ethers.BigNumber) {
    const mintTx = await contract.mint(to, amount);
    await mintTx.wait();
    console.log(`Minted ${amount.toString()} tokens to ${to}`);
  }

  // Example: Check balance
  async function checkBalance(address: string) {
    const balance = await contract.balanceOf(address);
    console.log(
      `Balance of ${address}:`,
      ethers.utils.formatUnits(balance, 18)
    );
  }

  const recipientAddress = "0x70997970C51812dc3A010C7d01b50e0d17dc79C8";
  const amountToMint = ethers.utils.parseUnits("500", 18);

  await mintTokens(recipientAddress, amountToMint);
  await checkBalance(recipientAddress);
}

transfer().catch(console.error);
