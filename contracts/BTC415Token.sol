//SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"

contract BTC415Token is ERC20 {
  uint constant _initial_supply = 100 * (10 ** 18);
  uint256 price = 0.01 ether; //price of 1 token in ether

  /*ERC 20 constructor takes 2 strings, token name and symbol */
  constructor() ERC20("BTC415Token", "B4T") public {
    _mint(msg.sender, _initial_supply);
  }

  function burn(uint256 amount) external {
    _burn(msg.sender, amount);
  }

  function buy() external payable {
    require(msg.vale > 0, "You must send some ether);
    _mint(msg.sender, msg.value * 10 ** decimals() / price);
  }
}