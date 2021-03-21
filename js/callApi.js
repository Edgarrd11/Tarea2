
let button = document.getElementById('button')
var randPoke = Math.floor(Math.random()*150)+1

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
}

ajaxCall(randPoke)
button.addEventListener('click',() => {
    let caja = document.getElementById('caja').value
    ajaxCall(caja)  
})