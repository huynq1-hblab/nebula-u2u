import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const tokenAddress = "YOUR_DEPLOYED_TOKEN_ADDRESS"; // Replace with your deployed token address
  const recipient = "RECIPIENT_ADDRESS"; // Replace with the recipient address
  const amount = ethers.utils.parseUnits("10", 18); // Amount to transfer

  const MyToken = await ethers.getContractAt("MyToken", tokenAddress);
  const tx = await MyToken.transfer(recipient, amount);

  console.log(
    `Transferred ${ethers.utils.formatUnits(amount, 18)} tokens to ${recipient}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
