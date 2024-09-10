const arr = ["a", "b" , "c"];
arr.forEach(function (elem, index) { 
    console.log(elem , index);
})

const fruitArr = ["참외", "키위" , "감귤"];
const resultArr = [];
fruitArr.forEach((elem,index) => {
    resultArr.push(`${index}, ${elem}`);
});

console.log(fruitArr);
console.log(resultArr);

const phoneNumbers = [
    '010-1234-5678',
    '02-987-6543',
    '031-456-7890',
    '010-8765-4321'
  ];

  phoneNumbers.forEach((el, idx) => {
    console.log(el.slice(-4))
  })

  //map
  const mapArr = [1,2,3];
  mapArr.map ((el, idx) => {
    console.log(el,idx);
  })

  const lastMapDigis = phoneNumbers.map((el)=> {
    return el.slice(-4);
  })
 
  const data = [
    {
      _id: '642ba3980785cecff3f39a8d',
      index: 0,
      age: 28,
      name: 'Annette Middleton',
      gender: 'female',
      company: 'KINETICA',
    },
    {
      _id: '642ba398d0fed6e17f2f50c9',
      index: 1,
      age: 37,
      name: 'Kidd Roman',
      gender: 'male',
      company: 'AUSTECH',
    },
    {
      _id: '642ba39827d809511d00dd8d',
      index: 2,
      age: 39,
      name: 'Best Ratliff',
      gender: 'male',
      company: 'PRISMATIC',
    },
  ];

  const ages = data.map((el) => el['age']);
  
  const forOfArray = ["사과" , "바나나" , "오렌지"];

  for(const el of forOfArray) {
    if(el==="바나나") break;
  }

  //filter

  console.log('---filter---')
  const filterArr = [1,2,3,4,5,6,7,8,9,10];
  //짝수 요소만 갖고오기

  const newFilterArray = filterArr.filter((el)=> el % 2 === 0)
  console.log(newFilterArray)

  //reduce 

  const reduceArr = [1,2,3,4,5];
  
  reduceArr.reduce((a,c) => {
    console.log(`누적값 : ${a} , 현재 값 : ${c}`);
    return  a + c;
  }, 0)

  const joinArr = [ '000' , '1111' , '2222']
  console.log(joinArr.join("-"))
 
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const arr3 = [7, 8, 9]
  
  const newArr = arr1.concat(arr2, arr3, 10, 11);
  console.log(newArr);

  const arrs = [1, 2, 3, 4, 5, 6, 7, 8];
  
  const filtering = arrs.filter((el) => !(el%2))

  const squareArr = filtering.map((el) => el ** 2);

  const sum = squareArr.reduce((accumlator, current) => {
    return accumlator + current
  } , 0);

  console.log(sum)


  

