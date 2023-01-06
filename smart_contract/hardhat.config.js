// https://eth-goerli.g.alchemy.com/v2/ySsY5YCNe5zWNHz2hMo-x2XZbLH01Bgu

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/ySsY5YCNe5zWNHz2hMo-x2XZbLH01Bgu",
      accounts: [ '9d1f0495375ebfbf2f681312b1befb95b981329baacc4148be9b40d4241c09a5' ] // metamask => dots => deatails => export private key
    }
  }
}