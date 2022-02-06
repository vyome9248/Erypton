//https://polygon-mumbai.g.alchemy.com/v2/BNMLqVBLGHMTEkJL2v3prkak-Lv-Fk0x

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0' ,
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/BNMLqVBLGHMTEkJL2v3prkak-Lv-Fk0x',
      accounts: [ 'PRIVATE' ]
    }
  }
}