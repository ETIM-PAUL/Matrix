import { ethers } from "hardhat";

async function main() {

  const matrix = await ethers.deployContract("RandomMatrix");

  await matrix.waitForDeployment();

  console.log("matrix deployed at", matrix.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
