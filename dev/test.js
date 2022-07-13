const Blockchain = require('../dev/blockchain')

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'csaaaaa','sdsaaaa')
bitcoin.createNewBlock(111,'csaaassaa','sdsassaaa')
bitcoin.createNewBlock(23231,'csaasgggaaa','sdsgggaaaa')


console.log(bitcoin);