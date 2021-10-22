class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock:Block = new Block(0, "20202020", "", "Hello", 1234);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

//블록체인 - 블록의 연결, array of block
//그럼 이제 ts는 block만 블록체인에 추가할거임
//blockchain.push("stuff"); 이렇게 멍청하게 넣으면 추가안됨 이건 블록아니니까

export {};