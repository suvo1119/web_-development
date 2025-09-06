// export function add(a,b){
//     return a+b;
// }
// export default function multiply(a,b){
//     return a*b;
// }
// export function subtract(a,b){
//     return a-b;
// }





// common js // 2nd way  to export function 


function add(a,b){
    return a+b;

}

function multiply(a,b){
    return a*b;

}
 
function subtract(a,b){
    return a-b;
}


module.exports={
    add,
    multiply,
    subtract,
}