var person ={
    name :"suvadip",
    greet : function(){
        console.log( `hi i am ${this.name}`)

    }
};
// person.greet()
let anotherpersioin=person.greet.bind(person);
anotherpersioin()
