//SPDX-License-Identifier: unlicense
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol"

contract BTC415Token is ERC20 {
  uint constant _initial_supply = 100 * (10 ** 18);

  /*ERC 20 constructor takes 2 strings, token name and symbol */
  constructor() ERC20("BTC415Token", "B4T") public {
    _mint(msg.sender, _initial_supply);
  }
}