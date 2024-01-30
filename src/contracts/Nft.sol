// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.3;


import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";


// Uncomment this line to use console.log
import "hardhat/console.sol";



import "hardhat/console.sol";

contract Nft is ERC721URIStorage {
    uint256 private _tokenIds;
    address contractAddress;

    constructor(address marketplaceAddress) ERC721("Metaverse", "METT") {
        contractAddress = marketplaceAddress;
    }

    function createToken(string memory tokenURI) public returns (uint) {
        
        uint256 newItemId =   _tokenIds++;

        _mint(msg.sender, newItemId);
        _setTokenURI(newItemId, tokenURI);
        setApprovalForAll(contractAddress, true);
        return newItemId;
    }
}
