require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain equip hockey clip surge giggle'; 
let testAccounts = [
"0x926f2df67f7e6ff8a3322333347d15ddc349a0d13d32065ea08609e731e9a6cf",
"0xa4271094c6910d258bc1f46c718686aa07f2754480d643e94e0628bd9ef353e8",
"0x307ca2a40928aa5d12494668b400d8201229d4dabc4675982bb4b718c82b8163",
"0x6e2b880d21f738c8adf9462f4a7ce956122eea5b4e8d7a74c0cf68365bc17205",
"0xa97761affae5329bf9a498054d6a2f3804f271596aac1bead9c2cdd3898ece40",
"0x370a801409f5d9991135d397de7db4c93070767c2058f395c562d97b4ea76606",
"0xb5eff6db8c0f8dcd8b594148efc0fc4afa390ad3cd72f18f3dc9479d8a1eff42",
"0x37e74b070394a143c17537c8f59e28b48189294c28a060300999302c2d7056eb",
"0x8887f6f8453a09b36dd158774a064e6282c2fb834e4526b549c28218b35375d4",
"0x4bbe0e8f67b4eb0dae4870a997a171f8b031cbf9a82e8325665f90abf9bf5519"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

