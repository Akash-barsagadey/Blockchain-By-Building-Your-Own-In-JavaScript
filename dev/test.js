const Blockchain = require("../dev/blockchain");

const bitcoin = new Blockchain();

// const previousBlockhash = "xjasjxaxjaxa";
// const currentBlockData = [
//     {
//         amount: 10,
//         sender: "pune",
//         recipient: "Mumbai",
//     },
//     {
//         amount: 100,
//         sender: "pune",
//         recipient: "Goa",
//     },
// ];

// console.log(bitcoin.proofOfWork(previousBlockhash, currentBlockData));

// console.log(bitcoin.hashBlock(previousBlockhash, currentBlockData, 142188));

const bc1 = {
    chain: [
        {
            index: 1,
            timeStamp: 1657898241234,
            transactions: [],
            nonce: 100,
            hash: "0",
            previousBlockHash: "0",
        },
        {
            index: 2,
            timeStamp: 1657898875296,
            transactions: [],
            nonce: 18140,
            hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            previousBlockHash: "0",
        },
        {
            index: 3,
            timeStamp: 1657898929875,
            transactions: [
                {
                    amount: 12.5,
                    sender: "00",
                    recipient: "38ee0b20045111ed9d076308c82f33fe",
                    transactionId: "b2deab00045211ed9d076308c82f33fe",
                },
                {
                    amount: 1,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "c485b600045211ed9d076308c82f33fe",
                },
                {
                    amount: 20,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "cdc65530045211ed9d076308c82f33fe",
                },
                {
                    amount: 30,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "d023f440045211ed9d076308c82f33fe",
                },
            ],
            nonce: 60077,
            hash: "00007f75fc5273e1950550752ab9a6f20d3b299d3d256c52f6447bc4b46506ee",
            previousBlockHash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
        },
        {
            index: 4,
            timeStamp: 1657898972845,
            transactions: [
                {
                    amount: 12.5,
                    sender: "00",
                    recipient: "38ee0b20045111ed9d076308c82f33fe",
                    transactionId: "d364a050045211ed9d076308c82f33fe",
                },
                {
                    amount: 40,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "e3caedf0045211ed9d076308c82f33fe",
                },
                {
                    amount: 50,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "e5f9b4d0045211ed9d076308c82f33fe",
                },
                {
                    amount: 60,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "e7fa3fc0045211ed9d076308c82f33fe",
                },
                {
                    amount: 70,
                    sender: "nvchgvcsgahscjbaja",
                    recipient: "casghavhvhgagca",
                    transactionId: "eaae3c30045211ed9d076308c82f33fe",
                },
            ],
            nonce: 31531,
            hash: "00001d7e4bdcf4a34d6f3250b3953c31bd0c13765fb2dd5b32ec1d58bd760dbb",
            previousBlockHash: "00007f75fc5273e1950550752ab9a6f20d3b299d3d256c52f6447bc4b46506ee",
        },
        {
            index: 5,
            timeStamp: 1657898990457,
            transactions: [
                {
                    amount: 12.5,
                    sender: "00",
                    recipient: "38ee0b20045111ed9d076308c82f33fe",
                    transactionId: "ed0153f0045211ed9d076308c82f33fe",
                },
            ],
            nonce: 40584,
            hash: "0000ccf9ee87594a1b518adf2abdaced4b8a5d61c2acc867d07f2942c4d6c6a9",
            previousBlockHash: "00001d7e4bdcf4a34d6f3250b3953c31bd0c13765fb2dd5b32ec1d58bd760dbb",
        },
        {
            index: 6,
            timeStamp: 1657898996034,
            transactions: [
                {
                    amount: 12.5,
                    sender: "00",
                    recipient: "38ee0b20045111ed9d076308c82f33fe",
                    transactionId: "f780b4b0045211ed9d076308c82f33fe",
                },
            ],
            nonce: 90034,
            hash: "0000546f73e9e7df799dbff56f394a8aac0b88da4d8bba5672dd71cdbb49c34c",
            previousBlockHash: "0000ccf9ee87594a1b518adf2abdaced4b8a5d61c2acc867d07f2942c4d6c6a9",
        },
    ],
    pendingTransactions: [
        {
            amount: 12.5,
            sender: "00",
            recipient: "38ee0b20045111ed9d076308c82f33fe",
            transactionId: "fad38930045211ed9d076308c82f33fe",
        },
    ],
    currentNodeUrl: "http://localhost:3001",
    networkNodes: [],
};

console.log("VALID:", bitcoin.chainIsValid(bc1.chain));
