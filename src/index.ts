import * as CryptoJS from "crypto-js";

class Block {
    //block을 생성하지 않아도 사용가능한 메서드
    static calculateBlockHash = (
        index: number,  
        previousHash: string, 
        timestamp: number,
        data: string
        ): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

    static validateStructure = (aBlock: Block) => 
    typeof aBlock.index === "number" && 
    typeof aBlock.hash === "string" && 
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
    //structure가 유효하면 return true or false.

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

//console.log(createNewBlock("Hello"), createNewBlock("Bye bye"));

const getHashforBlock = (aBlock: Block) : string => 
Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);

//이 함수는 제공되고 있는 블럭이 유효한지 아닌지 체크
//candidate 블럭과 previous블럭을 불러와 비교
const isBlockValid(candidateBlock: Block, previousBlock: Block): boolean => {
    //1. 블럭의 구조가 유효한지 체크
    if(!Block.validateStructure(candidateBlock)){
        return false;
    }else if(previousBlock.index +1 !== candidateBlock.index){
        return false;
    }else if(previousBlock.hash !== candidateBlock.hash){
        return false;
    }else if(getHashforBlock(candidateBlock) !== candidateBlock.hash){
        return false;
    }else {
        return true;
    }
    //따로 해쉬를 계산해서, 들어온 블럭의 해쉬가 실제로 있는지 체크 + 계산한 해쉬와 같은 해쉬인지.
};

//블럭 체인에 블럭 추가
const addBlock = (candidateBlock: Block): void => {
    if(isBlockValid(candidateBlock, getLatestBlock())){
        blockchain.push(candidateBlock);
    }
}

export {};

//블록체인의 기반은 블럭들이 자신의 전 블럭들의 링크를 가지고 있음