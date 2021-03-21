
let button = document.getElementById('button')
var randPoke = Math.floor(Math.random()*150)+1
let input = document.querySelector('input')

function ajaxCall(id) {
    let img = document.getElementById('img')
    let p = document.getElementById('info')
    let xhttp = new XMLHttpRequest()
                
    xhttp.open("GET",`https://pokeapi.co/api/v2/pokemon/${id}`)
    xhttp.send()
    
    xhttp.onreadystatechange = function () {      
            if(this.readyState == 4 && this.status == 200) {
            let datoPokemon = JSON.parse( this.responseText)
            img.setAttribute("src",datoPokemon.sprites.front_default)
            p.textContent = datoPokemon.name
            }
        }
        document.getElementById('caja').value = ""
}

ajaxCall(randPoke)

input.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {
        ajaxCall(e.target.value)  
    }
})

button.addEventListener('click',() => {
    ajaxCall(document.getElementById('caja').value)  
})