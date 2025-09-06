document.getElementById('changeTextBtn').addEventListener("click" ,function() {
    let paragraph =document.getElementById('para');
    paragraph.textContent =" the text is changed"
    
});



//example2 

document.getElementById('highlightBtn').addEventListener("click",function(){
    let cityList =document.getElementById('cityList');
cityList.firstElementChild.classList.toggle('highlight');
});




// document.getElementById('highlightBtn').addEventListener("click",function(){
//     document.body.classList.toggle('dark')
// });



document.getElementById('changeOrder').addEventListener('click',function(){
    let changeevent =document.getElementById('coffeeType');
    changeevent.textContent = "brown-coffe"
})



//example 4

document.getElementById('addItemBtn').addEventListener('click',function () {
    let allitems= document.getElementById('shoppingList').children
    let grocerry=["honey","peanut","butter","milk"];
    let currentitem=grocerry[Math.floor(Math.random()*grocerry.length)];
    let newitem=document.createElement("li")
    newitem.textContent =currentitem;

    document.getElementById('shoppingList').appendChild(newitem)
    console.log(allitems.length)
})



//example 6

document.getElementById("clickme").addEventListener("click",function(){
    alert('hii using event ')
})


//exp 7


document.getElementById("teaList").addEventListener('click',function(){
    if(event.target && event.target.matches(".teaItem")){
        alert("you selected : "+event.target.textContent);
    }
})


/// exp 8

document.getElementById("feedbackForm").addEventListener("submit",function(event){
    event.preventDefault();
    let feedback=document.getElementById('feedbackInput').
    value;
    let checkfeeed=document.getElementById('feedbackDisplay');
    if(feedbackInput.value.length!=0){
        checkfeeed.textContent=
    `your feedback is >> ${ feedback}`;
    }else{
        alert('at first enter a feedback!!')
    }
})


//exp 9
document.addEventListener("DOMContentLoaded",function(){
    document.getElementById("domStatus").textContent=
    "Dom content fully loaded !!"
});


//exp 10

document.getElementById("toggleHighlight").addEventListener
("click",function(){
    let descriptionText= document.getElementById("descriptionText");
    descriptionText.classList.add('highlight');
})