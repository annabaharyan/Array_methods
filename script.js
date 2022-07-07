let array1=["a","b","c","d"];
let array2=["e","f","j"]

// method array.at()
array1.at(1)==="b";//true
let lastItem=array1.at(-1) //"d"
array1.at(-2)==="c";//true

//method array.concat()

let array3=array1.concat(array2);//["a","b","c","d","e","f","j"]
let array4=array3.concat("h","i");//["a","b","c","d","e","f","j","h","i"]
let copyOfArray1=array1.concat();//["a","b","c","d"]

//method array.copyWithin()

let changeFirstToLast=array1.copyWithin(0,-1)//["d","b","c","d"];

let changePart=array3.copyWithin(1,4,5)// ['a', 'e', 'c', 'd', 'e', 'f', 'j']
let k=["a","b","c","d","e"].copyWithin(1,3)//['a', 'd', 'e', 'd', 'e']


//method array.entries()
let entries=array3.entries()
entries.next().value;//[0, 'a'];
entries.next().value; // [1, 'b'];
for(const [key,value] of["a","b","c","d"].entries()){
   // console.log(`the key is ${key} => the value is ${value}`);//the key is 0 => the value is a,
                                                            //the key is 1 => the value is b....
}

//method array.every(callback())
const boolVal1=["a","b","c"].every(val=>typeof val==="string");//true
const boolVal2=["a",1,"c"].every(val=>typeof val==="string");//false
const emptyArr=[].every(val=>typeof value === "number")//true


//method array.fill(value,start,end)

const r1= ["a","b","c"].fill("k",1)//["a","k","k]
const r2= ["a","b","c"].fill("k")//["k","k","k]
const r3= ["a","b","c"].fill("k",1,2)//["a","k","c]

//method array.filter(callback)

let res1=['a', 'b', 'c', 'd', 'e', 'f', 'j'].filter(function(item){
    return item.charCodeAt()>=101 // ['e', 'f', 'j']
})
let res2=[1,2,3,4,5,6].filter(function(item){
    return item%2===0 // [2,4,6]
})


//method array.find(callback)
let find1=[1,2,3,4,5,6].find(function(item){
    return item%2===0 // 2
})
let find2=[2,4,6].find(function(item){
    return item<1 // [undefined]
})


//method array.findIndex(callback)
let findIndex1=[2,6,4,5,3].findIndex(function(item){
    return item%2===1 // 3
})
let findIndex2=[2,4,6].findIndex(function(item){
    return item<1 // -1
})

//method array.findLast(callback)

let findLast=[2,6,4,5,8,3].findLast(function(item){
    return item%2===0 // 8
})


//method array.findLastIndex(callback)
let findLastIndex=[2,4,6,3,5,8,10].findLastIndex(function(item){
    return item<7 //4
})
//method array.flat(depth/tiv))

const arr1=[[1,2],[[3,4,5]],[6,[[7]]],8];
const v1=arr1.flat()//[1,2,[3,4,5],6,[[7]],8];
const v2=arr1.flat(2)//[1,2,3,4,5,6,[7],8]
const v3=arr1.flat(3)//[1,2,3,4,5,6,7,8]
const v4=arr1.flat(Infinity) //[1,2,3,4,5,6,7,8]
//method array.flat(depth/tiv))
const arrFlatMap = [1,2,3,4];

let m=arrFlatMap.map(x => [x * 2]);// [[2], [4], [6], [8]]
let fm=arrFlatMap.flatMap(item=>[item*2])//[2,4,6]

//Array.from()
let set=new Set([1,2,4,1,5,4,3,4,5])//{1,2,4,5,3}
let setArr=Array.from(set);//[1, 2, 4, 5, 3]
let stringArr=Array.from("string")//['s', 't', 'r', 'i', 'n', 'g']

//method array.includes(val)
let includes1=[1,2,3,4].includes(3) //true
let includes2=[1,2,3,4].includes(5) //false
let includes3=[1,2,3,4,1,2,5].includes(1,2) //true

//method array.indexOf(val)
let indexOf1=[1,2,3,4].indexOf(3) //2
let indexOf2=[1,2,3,4].indexOf(5) //-1
let indexOf3=[1,2,3,4,2].indexOf(2,2) //4
//method array.lastIndexOf(val)
let lastIndexOf1=[1,2,1,4].lastIndexOf(1) //2
let lastIndexOf2=[1,2,3,4].lastIndexOf(5) //-1
let lastIndexOf3=[1,2,3,4,2].lastIndexOf(2,2) //1

//Array.isArray
const bValue1=Array.isArray([])//true
const bValue2=Array.isArray(new Array(1,2,3))//true
const bValue3=Array.isArray({})//false
let v = [] instanceof Array //true
let v_1={} instanceof Array //false
let newArr=new Array(1,2,3)
let v_2=newArr instanceof Array //true

//method array.join()
 let elem=["A","B","C"];
 let elem1=elem.join()//"A,B,C";
 let elem2=elem.join("")//"ABC"
 let elem3=elem.join("-")//"A-B-C"

 //method array.keys() array.values()

 let iterateObj=[1,2,3,4].keys()
 let iterateObjKeySum=0;
 for(let key of iterateObj){
  iterateObjKeySum+=key;//0 1 2 3 =>6
 }
// method array.map(callback)
const a=[1,2,3].map(function(item){
    return item*2
})//[2,4,6]

//Array.of(val1,val2,...)
let arrOfVals=Array.of(1,2,3)//[1,2,3]
let arrOfValsUndef=Array.of(undefined)//[undefined]

// method array.pop()
let arr=[1,2,3]
arr.pop()//[1,2]
// method array.push(val)
arr.push(4)//[1,2,4]

//method array.reduce() array.reduceRight()(arjeqnery ajic-dzax e vercnum)
let z=[1,2,3]
 let r=z.reduce(function(accumulator,item,index){
return accumulator+item
},0) //6

//method array.reverse() 
let zangvac=[1,2,3]
zangvac.reverse() //[3,2,1]

//method array.shift() 
let zangvac1=[1,2,3]
zangvac1.shift()//[2,3]
//method array.unshift(val) 
zangvac1.unshift(4,5)//[4,5,2,3]

//method array.slice(start,end/not included/) 
let slice=zangvac1.slice(1,2)//[5]

//method array.some(callback) 
let valOfSome=zangvac.some(item=>item%2===0) //true
let valOfSome2=[5,6,7].some(item=>item<5)//false

//method array.sort(callback) 
let sortArr=[2,4,15,21,12,1];
sortArr.sort((a,b)=>a-b)

//method array.splice(start index, delete count,add value) 
let spliceArr=[1,2,3,4,5,6]
spliceArr.splice(1,2,7,8)//[1,7,8,4,5,6]

//method array.toString() 
let arrToStr=[1,2,"aaaa","bbb"].toString()//"1,2,aaaa,bbb"
console.log(arrToStr)