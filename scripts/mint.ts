import { ethers } from "hardhat";

async function main() {
  const [owner] = await ethers.getSigners();

  const tokenAddress = "YOUR_DEPLOYED_TOKEN_ADDRESS"; // Replace with your deployed token address
  const recipient = "RECIPIENT_ADDRESS"; // Replace with the recipient address
  const amount = ethers.utils.parseUnits("50", 18); // Amount to mint

  const MyToken = await ethers.getContractAt("MyToken", tokenAddress);
  const tx = await MyToken.mint(recipient, amount);

  console.log(
    `Minted ${ethers.utils.formatUnits(amount, 18)} tokens to ${recipient}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
