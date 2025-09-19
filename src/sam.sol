// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.13;

import {ERC20} from "openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
import {Ownable} from "openzeppelin-contracts/contracts/access/Ownable.sol";

contract sam is ERC20 ,Ownable {
    constructor() ERC20("Samreen","sam") Ownable(msg.sender){
 
    }
      function mint (address _to,uint amount) public onlyOwner{
    //    _balance[_to] +=amount; 
    //increase the total supply if not using the _mint function from the ERC contract
    _mint(_to, amount);
   }

}