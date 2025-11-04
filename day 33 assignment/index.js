
let password = 2324;

let validatepass = () => {
  for (let i = 2; i >= 0; i--) {
    let userpass = prompt("enter password: ");
    if(password === Number(userpass)){
      return true;
    }else{
      alert(`password is wrong`);
      alert(`you have ${i} reamining`);
    }
  }
}

if(validatepass() === true){
  alert(`login succesfull`);
}else{
  alert(`3 attempts finished, login blocked`);
}


// let count = 0;
// let word = null;

// let wordcount = () => {
//   while (word !== "stop") {
//     word = prompt("enter word");
//     if (word === "stop") {
//       return count;
//     }
//     count++;
//   }
// }


// console.log(wordcount());

// let num = null;

// while(Number(num) % 2 == 0){
//   num = prompt("enter number");
//   console.log(num);  
// }

// let start = prompt("enter number");
// let end = prompt("enter number");

// if(Number(start) !== NaN && Number(end) !== NaN && Number(start) >= 0){
//   for(let i = Number(start); i <= Number(end); i++){
//     console.log(i);
//   }
// }else{
//   console.log("invalid number"); 
// }