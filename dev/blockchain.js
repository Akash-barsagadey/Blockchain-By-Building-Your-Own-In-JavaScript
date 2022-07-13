function Blockchain (){
    this.chain = [];
    this.newTransaction = [];
}


Blockchain.prototype.createNewBlock  = function(nonce,previousBlockhash,hash){
    const newBlock = {
        index:this.chain.length + 1,
        timeStamp : Date.now(),
        transaction: this.newTransaction,
        nonce:nonce,
        hash:hash,
        previousBlockhash:previousBlockhash
    }

    this.newTransaction = [];
    this.chain.push(newBlock);

    return newBlock;

}

module.exports = Blockchain;