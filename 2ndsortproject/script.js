/*
let card=document.createElement('div');
card.setAttribute('class','flex justify-center flex-col rounded-xl items-center  border-2 border-amber-800 h-50 w-50 bg-amber-500')

let image=document.createElement('img')
image.setAttribute('class','w-24 h-24 mb-3 rounded-full shadow-lg')

let h5=document.createElement('h5')
h5.setAttribute('class','mb-1 text-xl font-medium text-gray-900')

let span=document.createElement('span')
span.setAttribute('class','text-sm text-black')

image.setAttribute('src','https://randomuser.me/api/portraits/women/11.jpg')

h5.textContent="SUVADIP mondal"

span.textContent="Visual Designer"

card.appendChild(image)
card.appendChild(h5)
card.appendChild(span)


let cards=document.getElementById('cards')
cards.appendChild(card)
*/

async function fetchUser() {
    let users = await fetch("https://randomuser.me/api/?results=10")

    console.log(users.json())
}

fetchUser()
