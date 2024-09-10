# ICO-smart-contract

Build ERC20 Token and Launch a Token Sale

The goal of this exercise is to build your own Ethereum-based ERC20 token and start a token sale campaign (ICO).
The code of token will be written in Solidity. Before we get started, MetaMask must be installed. Throughout this project, we will use Ropsten Testnet.

## Requirements
MetaMask

## Network
Sepolia Testnet

##	Understand the Code
Open your favorite code editor or use [Remix](https://remix.ethereum.org) directly and paste the parts of the following code in one file with name for example: TokenCode.sol. The idea is to build a simple ERC20 token. For example, we will name our token BlockchainDevCoin (BDC). 

1.  First, is the contract Token which contains the necessary elements of standard ERC20 token. ERC-20 came about as an attempt to provide a common set of features and interfaces for token contracts in Ethereum, and has proved to be very successful. ERC-20 has many benefits, including allowing wallets to provide token balances for hundreds of different tokens and creating a means for exchanges to list more tokens by providing nothing more than the address of the token’s contract. Most of the major tokens on the Ethereum blockchain are ERC20-compliant. This contract is fundamental and will be inherited by the next contracts. Carefully read the comments and understand the code logic.
2.  Next coming contract StandartToken which inherit contract Token and overriding his functions with main necessary functionality that we want. Read the comments carefully.
3.  The next contract is our token (rename it with proper name). It inherits the StandardToken contract. 
4.  First are the variables which allow as to customize our token contract.
5.  Next is the constructor which contains part of the business logic. 
    
    a.  Variable balances holds the amount of initial tokens which receives the creator of the contract. Here the owner of the contract (one who executes it) gets all the initial tokens. 
    
    b.  Variable totalSupply holds the total supply of tokens and very depends of decimals variable. Here totalSupply is capped at 1000, but people can possess as little as 0.000000000000000001 because of 18 decimal places. 
    
    c.  Next is the very special variable decimals. It refers to how divisible a token can be, from 0 (not at all divisible) to 18 (pretty much continuous) and even higher if required. Value of 18 is standard for Decimals. Technically speaking, the decimals value is the number of digits that come after the decimal place when displaying token values on-screen. 
    
    d.  Name and Symbol are respectively the token`s name and symbol for example BlockchainDevCoin and BDC. It is important to understand that there is no central registry for token contracts so the uniqueness of a particular name or symbol is not guaranteed. 
    
    e.  The unitsOneEthCanBuy is the course of exchange between Token and ETH. In our ICO 1 ETH = 10 BDC. This means, if someone sends 1 ETH to this smart contract, they will get 10 BDC units.
    
    f.  The fundsWallet is address of the sender in which the owner of the contract gets ETH. 

##	Launch the ICO (Initial Coin Offering)
1.  Download MetaMask chrome extension to generate a wallet. This is going to be the owner of the smart contract. Once you download the extension, go ahead and create a new account protected by a password. Then choose "Ropsten TestNet" from the top left corner. It must looks something like this:
2.  Now go to [Remix IDE v0.4.19](https://remix.ethereum.org/#optimize=false&version=soljson-v0.4.19+commit.c4cbbb05.js) and paste the code you just modified. Ignore any warnings you see. Next go to settings and uncheck "Enable Optimizations" if it's checked. Now go to "Run" tab and click on “Create” button under BlockchainDevCoin.
3.  Once you push “Create” button, MetaMask will prompt you to buy some test ether and submit the transaction. Click on Submit.
4.  Now open up MetaMask again and click on the first transaction. It'll take you to Etherscan where you can observe the ongoing transaction. 
5.  It may take up to 30s to confirm the transaction. Once it's confirmed it looks like the following picture. You just deployed your contract. Note the “to” address in the above transaction page. That's your contract address. 
6.  Now you should receive all the initial tokens when you add it to your wallet. So, copy the contract address, go to MetaMask and click “Add Token”. It looks like the following:
7.  And paste the address. This is the contract address of your token, the token symbol you choose in code creation – BDC (BlockchainDevCoin) and decimal precision, we choose standard 18 sign precision so 1 token have the ability to subdivide to 18 decimal places. Press “Add” and refresh MetaMask.
8.  Now, you should see all the initial supply (in our case it was 1000 BDC). 
9.  Now that everything works perfectly we just have to verify our smart contract so that everyone on the blockchain can read and understand it. It's always a good practice to verify since it helps establish trust. Go to your contact address.
10. And click on Contract Code tab.  
11. Now click on [Verify And Publish] link. 
12. Once you are taken to the new page, fill up the details such as compiler version, Enable Optimizations etc and paste the solidity source we compiled in the first step. 
13. Make sure the compiler version you choose matches the one you compiled your code against in the first step. Now hit "verify and publish". If successful, it'll generate bytecode and ABI.
14. Congratulations! Now anyone can visit your contract address and read the source. To deploy your contract to production, you just need to switch TestNet to MainNet on MetaMask (located at top left corner) and repeat step 2 to 4. Please be aware that you will have to spend real Ether over there to deploy your contract. So, don't deploy the contract unless you are fully ready (Contracts are immutable and can't be updated once deployed). We'll keep using TestNet in this tutorial.

##	Buying Tokens with Ether
1.  As a part of the ICO, your users will buy tokens from you by paying ETH. Remember we set the price as 1 ETH = 10 BDC while deploying the contract? So, if a user wants to buy 10 BDCs through your ICO, they have to pay 1 ETH. Let's test this out. 
2.  Go to MetaMask and create a new account.
3.  Load it with some Test Ether. First, click [Buy].
4.  Then on “MetaMask Ether Faucet” click on [request 1 ether from faucet]. Collect at least 2 ETH.
5.  Once the account is loaded, click [Send] and fill up your contract address. In the amount field, enter 2 (ETH)
6.  Let’s send 2 ETH to the contract address and wait for the transaction to be confirmed. 
7.  Now refresh MetaMask and check your tokens after a few seconds. The new test account should have got 20 BDCs and the contract owner (you) should have 980 tokens. Additionally, you should have received 2 ETH. Congratulations! You successfully sell your tokens!

##	Customization
Your task is follow the tutorial described above.

    1.  Customize the code. You can create your own token with your wished name, symbol and elements.
    2.  Launch the ICO in the Ropsten Testnet.
    3.  Buy tokens with ETH in the Ropsten testnet. 
