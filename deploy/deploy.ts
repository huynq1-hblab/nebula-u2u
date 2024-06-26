import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, ethers } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  const initialSupply = ethers.utils.parseUnits("1000", 18);

  await deploy("MyToken", {
    from: deployer,
    args: [initialSupply],
    log: true,
  });
};

export default func;
func.tags = ["MyToken"];
