const { ethers } = require("hardhat")

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account: ", deployer.address);

  const weiAmount = (await deployer.getBalance()).toString();

  console.log("Account Balance: ", (await ethers.utils.formatEther(weiAmount)))

  // Get the contract factory  
  const BTC415Token = await ethers.getContractFactory("BTC415Token");
  const token = await BTC415Token.deploy();

  // Wait for the deployment to be confirmed  
  await token.deployed();

  console.log("Token Address: ", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })