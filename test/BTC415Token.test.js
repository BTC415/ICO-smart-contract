const { expect } = require('chai')
const { ethers } = require("hardhat");

describe("BTC415Token", function () {
  let BTC415Token;
  let token;
  let owner;
  let addr1;
  let addr2;

  beforeEach(async function () {
    // Get the ContractFactory and Signers here.
    BTC415Token = await ethers.getContractFactory("BTC415Token");
    [owner, addr1, addr2] = await ethers.getSigners();

    //Deploy the contract before each test
    token = await BTC415Token.deploy();
    await token.deployed();
  })

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await token.balanceOf(owner.address)).to.equal(100 * (10 ** 18));
    });

    it("Should have the correct name and symbol", async function () {
      expect(await token.name()).to.equal("BTC415Token");
      expect(await token.symbol()).to.equal("B4T");
    });
  })
  describe("Transactions", function () {
    it("Should allow users to buy tokens", async function () {
      const buyAmount = ethers.utils.parseEther("0.1"); //0.1ether
      await addr1.sendTransaction({ to: token.address, value: buyAmount });

      const tokensMinted = buyAmount.mul(10 ** 18).div(ethers.utils.parseEther("0.01"));
      expect(await token.balanceOf(addr1.address)).to.equal(tokensMinted);
    })

    it("Should fail if the value sent is 0", async function () {
      await expect(token.connect(addr1).buy()).to.be.revertedWith("You must send some ether");
    });

    it("Should allow users to burn tokens", async function () {
      const initialBalance = await token.balanceOf(owner.address);
      await token.burn(initialBalance);
      expect(await token.balanceOf(owner.address)).to.equal(0)
    })
  })
  
  afterEach(async function () {
    // Clean up the environment if needed  
  });
})