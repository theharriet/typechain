import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

    //block을 생성하지 않아도 사용가능한 메서드
    static calculateBlockHash = (
        index: number,  
        previousHash: string, 
        timestamp: number,
        data: string
        ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    constructor(index: number, hash: string, previousHash: string, data: string, timestamp: number){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//Block.calculateBlockHash();
//(위 calculateBlockHash메서드에 static이 없다면 못씀)이제 이렇게 쓸수있음

const genesisBlock:Block = new Block(0, "20202020", "", "Hello", 1234);

let blockchain: Block[] = [genesisBlock];

//console.log(blockchain);

//array of blcok을 리턴하는 함수
const getBlockchain = () : Block[] => blockchain;

//블록체인이 얼마나 긴지 알아야하므로 필요 (하나의 블록만 리턴할거임)
const getLatestBlock = () : Block => blockchain[blockchain.length -1];

const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string) : Block =>{
    const previousBlock: Block = getLatestBlock();
    const newIndex: number
     = previousBlock.index + 1;
    const newTimeStamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
        newIndex,
        previousBlock.hash,
        newTimeStamp,
        data
      );
      const newBlock: Block = new Block(
        newIndex,
        newHash,
        previousBlock.hash,
        data,
        newTimeStamp
      );
      return newBlock;
}

console.log(createNewBlock("Hello"), createNewBlock("Bye bye"));

//블록체인 - 블록의 연결, array of block
//그럼 이제 ts는 block만 블록체인에 추가할거임
//blockchain.push("stuff"); 이렇게 멍청하게 넣으면 추가안됨 이건 블록아니니까

//새로운 블록을 만들기 위해서는 먼저 hash를 계산해야함
//Hash는 모든 속성을 수학적으로 길고 이상한 하나의 문자열로 결합한것
// yarn add crypto-js

export {};