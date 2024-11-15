const addPokemon = async ()=>{

    const mainBox = document.querySelector('.box');
    const ul = document.querySelector('.lista');
    const input = document.querySelector(".text-input")
    const nomePokemon = input.value.toLowerCase()

    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`) 
        if(!response.ok){
            alert("Pokemon inesistente. Ritenta")
            return
        }
       
    const data = await response.json()
    const name = data.name

    const img = document.createElement("img")
    const li=document.createElement("li")
    const checkbox=document.createElement("input")
    const newButton = document.createElement("button")
    const a = document.createElement("a")
    const div = document.createElement("div")
    const p = document.createElement("p")

    img.src = data.sprites.front_default
    img.alt = data.name
    a.href = `https://wiki.pokemoncentral.it/${name}`

    checkbox.setAttribute("type", "checkbox")
    newButton.classList.add("bottone-nuovo")
    
    newButton.innerText="Rimuovi"
    p.innerText = `Nome Pokémon: ${name}`
    a.innerText = "Wiki"
   
    ul.appendChild(li)
    li.appendChild(p)
    li.appendChild(div)
    div.appendChild(img)
    li.appendChild(newButton)
    li.appendChild(a)
    

    newButton.addEventListener("click", () => {
        ul.removeChild(li)
        input.value="";
    })

    input.addEventListener("click", ()=> {
        input.value="";
    })

    }catch(error){
        console.error(error)
    }
}