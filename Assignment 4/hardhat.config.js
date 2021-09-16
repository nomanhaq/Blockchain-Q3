require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

const PRIVATE_KEY = process.env["PRIVATE_KEY"];

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  networks: {
    ropsten: {
        url: "https://ropsten.infura.io/v3/ab599952c37846749319ba96ff872f80",
        accounts: [`0x${PRIVATE_KEY}`]
    }
}
};
