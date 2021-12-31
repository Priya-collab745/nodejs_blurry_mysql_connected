const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const loadTextHead=document.querySelector('.loading-text-head')
const loadButton=document.querySelector('.btn-group')
//import {callMajorNode} from "./index.js"
let load = 0
let loadstr='.'
let loadheadstr=''
let int = setInterval(blurring, 60)

function blurring() {
    load++
    loadstr=loadstr+'.'
    if (load%3==2){
        loadstr='.'  
    }
    if(load<10){
        loadheadstr='loading';    
    }
    if(load>10 && load < 30){
        loadheadstr='Comingsoon';
    }
    if(load>30 && load < 99){
        loadheadstr='Hurrah!!';   
    }
    if (load >=99 ) {
        clearInterval(int);
        loadheadstr='';
    }
    /*console.log('SCALE VALUE--->>>', scale(load, 0, 100, 1, 0))*/

    loadText.innerText = `${loadstr}`

    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 60, 0)}px)`
    loadButton.style.filter=`blur(${scale(load, 0, 100, 60, 0)}px)`
    loadTextHead.innerText=`${loadheadstr}`

}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function callNode(){
    //alert("redirecting to Node JS!");
    callMajorNode()
    //console.log(result['url']);
  }

getData()

filter.addEventListener('input', (e) => filterData(e.target.value))

async function getData() {
    const res = await fetch('https://randomuser.me/api?results=50')

    const { results } = await res.json()

    // Clear result
    result.innerHTML = ''

    results.forEach(user => {
        const li = document.createElement('li')

        listItems.push(li)

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `

        result.appendChild(li)
    })
}

function filterData(searchTerm) {
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide')
        } else {
            item.classList.add('hide')
        }
    })
}
