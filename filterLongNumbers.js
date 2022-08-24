const numbers = [
    '1763687364',
    '4763687363',
    '7867867862',
    'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
  ];

const checkLength = (number) =>{
    if(number.length <= 10){
        return true;
    }else{
        return false;
    }

}
console.log(checkLength);
const filterLongNumbers = numbers.filter(checkLength);

// const filterLongNumbers = (numbers) =>{
//    return numbers.filter(checkLength);
// } 
console.log(filterLongNumbers);