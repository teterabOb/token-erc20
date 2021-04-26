// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CLToken is ERC20 {
        constructor() ERC20("CLToken", "CLT") {
        _mint(msg.sender, 1000);
    }
}