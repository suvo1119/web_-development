// console.log("hello world");
// let username={firstName:"suvadip" ,lastName:"mondal"}
// console.log(username);

// // changing the city

//while loop
// add the sum value of 1 to 5 in a variaable using while loop
// let i=1;
// let sum=0;
// while(i<=5){
//     sum=sum+i;
//     i++
// }
//console.log(sum);

// let cities=["tokio","london","mumbai","kolkata"];
// let newcities=[];
// for(i=0;i<cities.length;i++){
// //     let city=cities[i];
// //     newcities.push(city);
// // }
// //console.log(newcities);

// // let product=["green tea",'black tea','ulong tea',"chai","old tea "];
// // let product1=[];
// // for(i=0;i<product.length;i++){
// //     if(product[i]=="chai"){
// // continue

// //     }
// //     else{
// //         product1.push(product[i])
// //     }
// // }
// //console.log(product1);

// // let newcities=[];
// // cities.forEach(city => {
//     //     newcities.push(`${city} city`)

//     // });
//     // console.log(newcities);

//     // let numbers=[1,67,8,3,45,9];
//     // numbers.forEach(function(number){
//         //     console.log(number)
//         // })

//         let cities=["london","kolkata","paris","new york"];

//         let newcities =[];
//         cities.forEach(city => {
//             if(city != "kolkata"){
//                 newcities.push(city);

//             }

//         });

//         console.log(newcities);

//         let numbers =[2,5,7,9]
//         let multinumber=[]
//         numbers.forEach(every_number => {
//             if(every_number!=7){
//                 let new_number =`${every_number*2}`
//                 multinumber.push(new_number)
//             }

//         });
//         console.log(multinumber)

//         let fruits=["mango chai", "green tea" ,"special cold tea", "old monk"]
//         let fruit_container=[]
//         for (const fruit of fruits) {
//             if(fruit.length<=10){

//                 fruit_container.push(fruit)
//             }

//         }
//         console.log(fruit_container)

/* 3. Write an arrow function named 'calculateTotal that takes two parameters: `price` and `quantity`. The function should return the total cost by multiplying the `price` and `quantity`.
Store the result in a variable named 'totalCost`.
*/

// let calculatetotal =(price ,quantity)=>{
//     let result=(price*quantity);
//     return result;

// }
// let Totalcost=calculatetotal(6,90)
// console.log(`total is ${Totalcost}`)

// function Teamaker(){
//     function anotherteamaker(Teatype) {
//         return "making green tea";
//     }
//     return anotherteamaker();
// }
// let tea=Teamaker("green tea")
// console.log(tea)

// let computer={
//     cpu:12
// };

// let mac ={
//     screen: "full hd"
// };
// let ubuntu ={
//     keyboard:"blue"
// }
// //Object.setPrototypeOf(mac,computer);
// Object.setPrototypeOf(mac,ubuntu);
// //console.log(mac.cpu);
// console.log(Object.getPrototypeOf(mac))

// function car(model,price){
//     this.model=model
//     this.price=price

// }
// car.prototype.country=function(){
//     return `${this.model} mades in america`

// }
// let mycar =new car('toyota' ,8900000);
// console.log(mycar.country());

// class bankaccount{
//     #balance =0;

//     deposit (amount){
//         this.#balance+=amount;
//         return this.#balance;

//     }
//     getbalance (){
//         return `balance $ ${this.#balance}`
//     }
// }
// let checkbalance= new bankaccount();
// console.log(checkbalance.getbalance());

//abstraction

// class cofeemachine{
//     start (){
//         return `turning on the coffe machine`

//     }
//     brewcoffe (){
//         return `brewing the coffe`
//     }
//     startthebutton(){
//         let msg1=this.start();
//         let msg2=this.brewcoffe();
//         return `${msg1 } ....... ${ msg2}`
//     }

// }
// let pressthebutton =new cofeemachine();
// console.log(pressthebutton.startthebutton());

// polymorphisim

// class bird{
//     fly(){
//         return`birds can fly`
//     }

// }
// class penguin extends bird{
//     fly(){
//         return `penguin can't fly`
//     }

// }
// let Bird =new bird();
// let Penguin =new penguin();
// console.log(Bird.fly());

// console.log(Penguin.fly());

//get  and set method

class employee {
   #salary
  constructor(name, salary) {
    if (salary <= 0) {
      console.log("oops !! retry");
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return this.#salary
  }
  set salary(value) {
    if (value < 0) {
      console.error("your salary  is not credited");
    } else {
      this.#salary = value;
    }
  }
}
let emp = new employee("suvadip", -89);
console.log(emp.salary);
