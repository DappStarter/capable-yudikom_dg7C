require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note total prosper harvest fork swap gauge'; 
let testAccounts = [
"0xc7057ebf563b2d7c70528dab16f836c48eaa2b1d1c3ad88b27ab3272a4189454",
"0xa6224a9208d2c78345101e4ddc766deaf7675be537563af3cdd5bad47f67415d",
"0xd352d977264dead6db0426931463128f486b7f7392aeaa054c190948ef5e7627",
"0x0a3f863877930c8694d8f66c80a52c4e47d33da79bbc87c1bd1d943a0cd66c59",
"0x78b9addfc21629f6b8ebc7221db02510205b4603c93bfd2eda9a22bd38b7914b",
"0xf7cbbe5421f43a5a30b093a890226723e0fba42eeeff2a56bb1377ba8fb0efeb",
"0xc9ef0fcf68e0fb6831c720d690e55c20d06392baa385836aa9885c3bf648b9b3",
"0x3e722a0bb467677d3c9a1d22e888417b9971a688512db6023095b1f8a2eab6dd",
"0x074977a63c8702390d9bd0422a8f1e78cde87eb006df1b3278c66836bf0329e5",
"0x2f93114b20b92055ad71b60b83d8da77e5125e26d3d45d680972904593b2a2a9"
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

