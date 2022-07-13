const Blockchain = require('../dev/blockchain')

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'csaaaaa','sdsaaaa')

bitcoin.createNewTransaction(100,'senderrdrrrr','reciepirnsts')

bitcoin.createNewBlock(23333,'addada','sdsadasdaddcde')

console.log(bitcoin.chain[1]);