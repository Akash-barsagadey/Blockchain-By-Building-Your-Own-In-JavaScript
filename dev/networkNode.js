const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Blockchain = require("./blockchain");
const uuid = require("uuid");
const port = process.argv[2];

const nodeAddress = uuid.v1().split("-").join("");

const bitcoin = new Blockchain();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// get entire Blockchain
app.get("/blockchain", function (req, res) {
    res.send(bitcoin);
});

//create new transaction
app.post("/transaction", function (req, res) {
    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({ notes: `Transaction will be added in block ${blockIndex}.` });
});

// mine a block
app.get("/mine", function (req, res) {
    const lastBlock = bitcoin.getLastBlock();
    const previousBlockhash = lastBlock["hash"];
    const currentBlockData = {
        transaction: bitcoin.pendingTransactions,
        index: lastBlock["index"] + 1,
    };
    const nonce = bitcoin.proofOfWork(previousBlockhash, currentBlockData);
    const bloskHash = bitcoin.hashBlock(previousBlockhash, currentBlockData, nonce);

    bitcoin.createNewTransaction(12.5, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockhash, bloskHash);

    res.json({ note: "New block mined successfully", block: newBlock });
});

app.listen(port, function () {
    console.log(`Listening on port ${port}...`);
});
