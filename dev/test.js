const Blockchain = require("../dev/blockchain");

const bitcoin = new Blockchain();

const previousBlockhash = "xjasjxaxjaxa";
const currentBlockData = [
    {
        amount: 10,
        sender: "pune",
        recipient: "Mumbai",
    },
    {
        amount: 100,
        sender: "pune",
        recipient: "Goa",
    },
];

console.log(bitcoin.proofOfWork(previousBlockhash, currentBlockData));

console.log(bitcoin.hashBlock(previousBlockhash, currentBlockData, 142188));
