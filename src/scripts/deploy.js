const hre = require("hardhat");
const fs = require('fs');

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NftMarketplace");
  const nftMarket = await NFTMarketplace.deploy();
  await nftMarket.waitForDeployment();
  console.log("nftMarket deployed to:", nftMarket.target);

  const NFT = await hre.ethers.getContractFactory("Nft");
  const nft = await NFT.deploy(nftMarket.target);
  await nft.waitForDeployment();
  console.log("nft deployed to:", nft.target);

  let config = `
  export const nftmarketaddress = "${nftMarket.target}"
  export const nftaddress = "${nft.target}"
  `

  let data = JSON.stringify(config)
  fs.writeFileSync('config.js', JSON.parse(data))

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });


  // await lock.waitForDeployment();

  // console.log(
  //   `Lock with ${ethers.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  // );

