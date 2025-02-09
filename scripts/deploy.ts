import { ethers } from "hardhat";
const hre = require("hardhat");
// import { handleStorage } from "../metadata/handleStorage"
const color = require("cli-color")

async function main() {

  ///// Edit this part to config your NFT. /////
  const mediaFileName = "thistle-black-pixel.jpg" // replace with your own media file name
  const licenseFileName = "thistle-test-IP-license.pdf" // replace with your own license file name
  const author = "Julien"
  const name = "Jungle fever #1"
  const symbol = "JUNGLE"
  const description = "I've got jungle fever, she's got jungle fever // We've got jungle fever, we're in love"
  const mint = 42 // number of editions
  const royalties = 8 * 100 // 8%

  // nft metadata storage
  // const uri = await handleStorage(name, author, description, mediaFileName, licenseFileName)

  // deploy NFT contract
  const Ato = await ethers.getContractFactory("Ato")
  const ato = await Ato.deploy(name, symbol, mint, "yo", royalties)
  await ato.deployed();
  var msg = color.xterm(39).bgXterm(128);
  console.log("NFT contract deployed. ✅", msg(ato.address))

  // Etherscan verification
  //await ato.deployTransaction.wait(6)
  //await hre.run("verify:verify", { network: "goerli", address: ato.address, constructorArguments: [name, symbol, mint, uri, royalties], });
  console.log("Etherscan verification done. ✅")
  console.log("Source code: https://goerli.etherscan.io/address/" + ato.address + "#code")
  console.log("https://ato.network/Goerli/" + ato.address + "/1")
  //console.log("OpenSea URL: " + "https://testnets.opensea.io/asset/goerli/" + ato.address + "/1")
  console.log("Thanks for using Āto!")
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
});