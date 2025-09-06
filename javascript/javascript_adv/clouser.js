function counter() {
  let count = 5;
  return function () {
    count++;
    return count;
  };
}
let anothercounter = counter();
console.log(anothercounter());
