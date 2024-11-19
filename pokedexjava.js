const addPokemon = async () => {
    const ul = document.querySelector('.lista');
    const input = document.querySelector(".text-input");
    const nomePokemon = input.value.toLowerCase();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`);
        if (!response.ok) {
            alert("Pokemon inesistente. Ritenta");
            return;
        }

        const data = await response.json();
        const name = data.name;
        const types = data.types.map(typeInfo => typeInfo.type.name); // array con i tipi

        // Elementi DOM
        const img = document.createElement("img");
        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        const newButton = document.createElement("button");
        const a = document.createElement("a");
        const div = document.createElement("div");
        const nome = document.createElement("p");
        const tipoPokemon = document.createElement("p");

        // immagine del Pokémon
        img.src = data.sprites.front_default;
        img.alt = data.name;
        a.href = `https://wiki.pokemoncentral.it/${name}`;

        checkbox.setAttribute("type", "checkbox");
        newButton.classList.add("bottone-nuovo");

        newButton.innerText = "Rimuovi";
        nome.innerText = `Nome Pokémon: ${name}`;
        a.innerText = "Wiki";

        // tipi nella card
        if (types.length === 1) {
            tipoPokemon.innerText = `Tipo: ${types[0]}`;
        } else if (types.length > 1) {
            tipoPokemon.innerText = `Tipo: ${types.join(", ")}`; // Unisce i tipi con una virgola
        }

        // Combinazioni con doppio tipo
        if (types.includes("normal") && types.includes("fighting")) {
            li.classList.add("tipo-normale-lotta");
        } else if (types.includes("normal") && types.includes("flying")) {
            li.classList.add("tipo-normale-volante");
        } else if (types.includes("normal") && types.includes("poison")) {
            li.classList.add("tipo-normale-veleno");
        } else if (types.includes("normal") && types.includes("ground")) {
            li.classList.add("tipo-normale-terra");
        } else if (types.includes("normal") && types.includes("rock")) {
            li.classList.add("tipo-normale-roccia");
        } else if (types.includes("normal") && types.includes("bug")) {
            li.classList.add("tipo-normale-insetto");
        } else if (types.includes("normal") && types.includes("ghost")) {
            li.classList.add("tipo-normale-spettro");
        } else if (types.includes("normal") && types.includes("steel")) {
            li.classList.add("tipo-normale-acciaio");
        } else if (types.includes("normal") && types.includes("fire")) {
            li.classList.add("tipo-normale-fuoco");
        } else if (types.includes("normal") && types.includes("water")) {
            li.classList.add("tipo-normale-acqua");
        } else if (types.includes("normal") && types.includes("grass")) {
            li.classList.add("tipo-normale-erba");
        } else if (types.includes("normal") && types.includes("electric")) {
            li.classList.add("tipo-normale-elettrico");
        } else if (types.includes("normal") && types.includes("psychic")) {
            li.classList.add("tipo-normale-psico");
        } else if (types.includes("normal") && types.includes("ice")) {
            li.classList.add("tipo-normale-ghiaccio");
        } else if (types.includes("normal") && types.includes("dragon")) {
            li.classList.add("tipo-normale-drago");
        } else if (types.includes("normal") && types.includes("dark")) {
            li.classList.add("tipo-normale-buio");
        } else if (types.includes("normal") && types.includes("fairy")) {
            li.classList.add("tipo-normale-folletto");
        } else if (types.includes("fighting") && types.includes("flying")) {
            li.classList.add("tipo-lotta-volante");
        } else if (types.includes("fighting") && types.includes("poison")) {
            li.classList.add("tipo-lotta-veleno");
        } else if (types.includes("fighting") && types.includes("ground")) {
            li.classList.add("tipo-lotta-terra");
        } else if (types.includes("fighting") && types.includes("rock")) {
            li.classList.add("tipo-lotta-roccia");
        } else if (types.includes("fighting") && types.includes("bug")) {
            li.classList.add("tipo-lotta-insetto");
        } else if (types.includes("fighting") && types.includes("ghost")) {
            li.classList.add("tipo-lotta-spettro");
        } else if (types.includes("fighting") && types.includes("steel")) {
            li.classList.add("tipo-lotta-acciaio");
        } else if (types.includes("fighting") && types.includes("fire")) {
            li.classList.add("tipo-lotta-fuoco");
        } else if (types.includes("fighting") && types.includes("water")) {
            li.classList.add("tipo-lotta-acqua");
        } else if (types.includes("fighting") && types.includes("grass")) {
            li.classList.add("tipo-lotta-erba");
        } else if (types.includes("fighting") && types.includes("electric")) {
            li.classList.add("tipo-lotta-elettrico");
        } else if (types.includes("fighting") && types.includes("psychic")) {
            li.classList.add("tipo-lotta-psico");
        } else if (types.includes("fighting") && types.includes("ice")) {
            li.classList.add("tipo-lotta-ghiaccio");
        } else if (types.includes("fighting") && types.includes("dragon")) {
            li.classList.add("tipo-lotta-drago");
        } else if (types.includes("fighting") && types.includes("dark")) {
            li.classList.add("tipo-lotta-buio");
        } else if (types.includes("fighting") && types.includes("fairy")) {
            li.classList.add("tipo-lotta-folletto");
        } else if (types.includes("fire") && types.includes("flying")) {
            li.classList.add("tipo-fuoco-volante");
        } else if (types.includes("fire") && types.includes("poison")) {
            li.classList.add("tipo-fuoco-veleno");
        } else if (types.includes("fire") && types.includes("ground")) {
            li.classList.add("tipo-fuoco-terra");
        } else if (types.includes("fire") && types.includes("rock")) {
            li.classList.add("tipo-fuoco-roccia");
        } else if (types.includes("fire") && types.includes("bug")) {
            li.classList.add("tipo-fuoco-insetto");
        } else if (types.includes("fire") && types.includes("ghost")) {
            li.classList.add("tipo-fuoco-spettro");
        } else if (types.includes("fire") && types.includes("steel")) {
            li.classList.add("tipo-fuoco-acciaio");
        } else if (types.includes("fire") && types.includes("water")) {
            li.classList.add("tipo-fuoco-acqua");
        } else if (types.includes("fire") && types.includes("grass")) {
            li.classList.add("tipo-fuoco-erba");
        } else if (types.includes("fire") && types.includes("electric")) {
            li.classList.add("tipo-fuoco-elettrico");
        } else if (types.includes("fire") && types.includes("psychic")) {
            li.classList.add("tipo-fuoco-psico");
        } else if (types.includes("fire") && types.includes("ice")) {
            li.classList.add("tipo-fuoco-ghiaccio");
        } else if (types.includes("fire") && types.includes("dragon")) {
            li.classList.add("tipo-fuoco-drago");
        } else if (types.includes("fire") && types.includes("dark")) {
            li.classList.add("tipo-fuoco-buio");
        } else if (types.includes("fire") && types.includes("fairy")) {
            li.classList.add("tipo-fuoco-folletto");
        } else if (types.includes("water") && types.includes("flying")) {
            li.classList.add("tipo-acqua-volante");
        } else if (types.includes("water") && types.includes("poison")) {
            li.classList.add("tipo-acqua-veleno");
        } else if (types.includes("water") && types.includes("ground")) {
            li.classList.add("tipo-acqua-terra");
        } else if (types.includes("water") && types.includes("rock")) {
            li.classList.add("tipo-acqua-roccia");
        } else if (types.includes("water") && types.includes("bug")) {
            li.classList.add("tipo-acqua-insetto");
        } else if (types.includes("water") && types.includes("ghost")) {
            li.classList.add("tipo-acqua-spettro");
        } else if (types.includes("water") && types.includes("steel")) {
            li.classList.add("tipo-acqua-acciaio");
        } else if (types.includes("water") && types.includes("grass")) {
            li.classList.add("tipo-acqua-erba");
        } else if (types.includes("water") && types.includes("electric")) {
            li.classList.add("tipo-acqua-elettrico");
        } else if (types.includes("water") && types.includes("psychic")) {
            li.classList.add("tipo-acqua-psico");
        } else if (types.includes("water") && types.includes("ice")) {
            li.classList.add("tipo-acqua-ghiaccio");
        } else if (types.includes("water") && types.includes("dragon")) {
            li.classList.add("tipo-acqua-drago");
        } else if (types.includes("water") && types.includes("dark")) {
            li.classList.add("tipo-acqua-buio");
        } else if (types.includes("water") && types.includes("fairy")) {
            li.classList.add("tipo-acqua-folletto");
        } else if (types.includes("flying") && types.includes("poison")) {
            li.classList.add("tipo-volante-veleno");
        } else if (types.includes("flying") && types.includes("ground")) {
            li.classList.add("tipo-volante-terra");
        } else if (types.includes("flying") && types.includes("rock")) {
            li.classList.add("tipo-volante-roccia");
        } else if (types.includes("flying") && types.includes("bug")) {
            li.classList.add("tipo-volante-insetto");
        } else if (types.includes("flying") && types.includes("ghost")) {
            li.classList.add("tipo-volante-spettro");
        } else if (types.includes("flying") && types.includes("steel")) {
            li.classList.add("tipo-volante-acciaio");
        } else if (types.includes("flying") && types.includes("grass")) {
            li.classList.add("tipo-volante-erba");
        } else if (types.includes("flying") && types.includes("electric")) {
            li.classList.add("tipo-volante-elettrico");
        } else if (types.includes("flying") && types.includes("psychic")) {
            li.classList.add("tipo-volante-psico");
        } else if (types.includes("flying") && types.includes("ice")) {
            li.classList.add("tipo-volante-ghiaccio");
        } else if (types.includes("flying") && types.includes("dragon")) {
            li.classList.add("tipo-volante-drago");
        } else if (types.includes("flying") && types.includes("dark")) {
            li.classList.add("tipo-volante-buio");
        } else if (types.includes("flying") && types.includes("fairy")) {
            li.classList.add("tipo-volante-folletto");
        } else if (types.includes("poison") && types.includes("ground")) {
            li.classList.add("tipo-veleno-terra");
        } else if (types.includes("poison") && types.includes("rock")) {
            li.classList.add("tipo-veleno-roccia");
        } else if (types.includes("poison") && types.includes("bug")) {
            li.classList.add("tipo-veleno-insetto");
        } else if (types.includes("poison") && types.includes("ghost")) {
            li.classList.add("tipo-veleno-spettro");
        } else if (types.includes("poison") && types.includes("steel")) {
            li.classList.add("tipo-veleno-acciaio");
        } else if (types.includes("poison") && types.includes("grass")) {
            li.classList.add("tipo-veleno-erba");
        } else if (types.includes("poison") && types.includes("electric")) {
            li.classList.add("tipo-veleno-elettrico");
        } else if (types.includes("poison") && types.includes("psychic")) {
            li.classList.add("tipo-veleno-psico");
        } else if (types.includes("poison") && types.includes("ice")) {
            li.classList.add("tipo-veleno-ghiaccio");
        } else if (types.includes("poison") && types.includes("dragon")) {
            li.classList.add("tipo-veleno-drago");
        } else if (types.includes("poison") && types.includes("dark")) {
            li.classList.add("tipo-veleno-buio");
        } else if (types.includes("poison") && types.includes("fairy")) {
            li.classList.add("tipo-veleno-folletto");
        } else if (types.includes("ground") && types.includes("rock")) {
            li.classList.add("tipo-terra-roccia");
        } else if (types.includes("ground") && types.includes("bug")) {
            li.classList.add("tipo-terra-insetto");
        } else if (types.includes("ground") && types.includes("ghost")) {
            li.classList.add("tipo-terra-spettro");
        } else if (types.includes("ground") && types.includes("steel")) {
            li.classList.add("tipo-terra-acciaio");
        } else if (types.includes("ground") && types.includes("grass")) {
            li.classList.add("tipo-terra-erba");
        } else if (types.includes("ground") && types.includes("electric")) {
            li.classList.add("tipo-terra-elettrico");
        } else if (types.includes("ground") && types.includes("psychic")) {
            li.classList.add("tipo-terra-psico");
        } else if (types.includes("ground") && types.includes("ice")) {
            li.classList.add("tipo-terra-ghiaccio");
        } else if (types.includes("ground") && types.includes("dragon")) {
            li.classList.add("tipo-terra-drago");
        } else if (types.includes("ground") && types.includes("dark")) {
            li.classList.add("tipo-terra-buio");
        } else if (types.includes("ground") && types.includes("fairy")) {
            li.classList.add("tipo-terra-folletto");
        } else if (types.includes("rock") && types.includes("bug")) {
            li.classList.add("tipo-roccia-insetto");
        } else if (types.includes("rock") && types.includes("ghost")) {
            li.classList.add("tipo-roccia-spettro");
        } else if (types.includes("rock") && types.includes("steel")) {
            li.classList.add("tipo-roccia-acciaio");
        } else if (types.includes("rock") && types.includes("grass")) {
            li.classList.add("tipo-roccia-erba");
        } else if (types.includes("rock") && types.includes("electric")) {
            li.classList.add("tipo-roccia-elettrico");
        } else if (types.includes("rock") && types.includes("psychic")) {
            li.classList.add("tipo-roccia-psico");
        } else if (types.includes("rock") && types.includes("ice")) {
            li.classList.add("tipo-roccia-ghiaccio");
        } else if (types.includes("rock") && types.includes("dragon")) {
            li.classList.add("tipo-roccia-drago");
        } else if (types.includes("rock") && types.includes("dark")) {
            li.classList.add("tipo-roccia-buio");
        } else if (types.includes("rock") && types.includes("fairy")) {
            li.classList.add("tipo-roccia-folletto");
        } else if (types.includes("bug") && types.includes("ghost")) {
            li.classList.add("tipo-insetto-spettro");
        } else if (types.includes("bug") && types.includes("steel")) {
            li.classList.add("tipo-insetto-acciaio");
        } else if (types.includes("bug") && types.includes("grass")) {
            li.classList.add("tipo-insetto-erba");
        } else if (types.includes("bug") && types.includes("electric")) {
            li.classList.add("tipo-insetto-elettrico");
        } else if (types.includes("bug") && types.includes("psychic")) {
            li.classList.add("tipo-insetto-psico");
        } else if (types.includes("bug") && types.includes("ice")) {
            li.classList.add("tipo-insetto-ghiaccio");
        } else if (types.includes("bug") && types.includes("dragon")) {
            li.classList.add("tipo-insetto-drago");
        } else if (types.includes("bug") && types.includes("dark")) {
            li.classList.add("tipo-insetto-buio");
        } else if (types.includes("bug") && types.includes("fairy")) {
            li.classList.add("tipo-insetto-folletto");
        } else if (types.includes("ghost") && types.includes("steel")) {
            li.classList.add("tipo-spettro-acciaio");
        } else if (types.includes("ghost") && types.includes("grass")) {
            li.classList.add("tipo-spettro-erba");
        } else if (types.includes("ghost") && types.includes("electric")) {
            li.classList.add("tipo-spettro-elettrico");
        } else if (types.includes("ghost") && types.includes("psychic")) {
            li.classList.add("tipo-spettro-psico");
        } else if (types.includes("ghost") && types.includes("ice")) {
            li.classList.add("tipo-spettro-ghiaccio");
        } else if (types.includes("ghost") && types.includes("dragon")) {
            li.classList.add("tipo-spettro-drago");
        } else if (types.includes("ghost") && types.includes("dark")) {
            li.classList.add("tipo-spettro-buio");
        } else if (types.includes("ghost") && types.includes("fairy")) {
            li.classList.add("tipo-spettro-folletto");
        }  else if (types.includes("steel") && types.includes("grass")) {
            li.classList.add("tipo-acciaio-erba");
        } else if (types.includes("steel") && types.includes("electric")) {
            li.classList.add("tipo-acciaio-elettrico");
        } else if (types.includes("steel") && types.includes("psychic")) {
            li.classList.add("tipo-acciaio-psico");
        } else if (types.includes("steel") && types.includes("ice")) {
            li.classList.add("tipo-acciaio-ghiaccio");
        } else if (types.includes("steel") && types.includes("dragon")) {
            li.classList.add("tipo-acciaio-drago");
        } else if (types.includes("steel") && types.includes("dark")) {
            li.classList.add("tipo-acciaio-buio");
        } else if (types.includes("steel") && types.includes("fairy")) {
            li.classList.add("tipo-acciaio-folletto");
        } else if (types.includes("grass") && types.includes("electric")) {
            li.classList.add("tipo-erba-elettrico");
        } else if (types.includes("grass") && types.includes("psychic")) {
            li.classList.add("tipo-erba-psico");
        } else if (types.includes("grass") && types.includes("ice")) {
            li.classList.add("tipo-erba-ghiaccio");
        } else if (types.includes("grass") && types.includes("dragon")) {
            li.classList.add("tipo-erba-drago");
        } else if (types.includes("grass") && types.includes("dark")) {
            li.classList.add("tipo-erba-buio");
        } else if (types.includes("grass") && types.includes("fairy")) {
            li.classList.add("tipo-erba-folletto");
        } else if (types.includes("electric") && types.includes("psychic")) {
            li.classList.add("tipo-elettrico-psico");
        } else if (types.includes("electric") && types.includes("ice")) {
            li.classList.add("tipo-elettrico-ghiaccio");
        } else if (types.includes("electric") && types.includes("dragon")) {
            li.classList.add("tipo-elettrico-drago");
        } else if (types.includes("electric") && types.includes("dark")) {
            li.classList.add("tipo-elettrico-buio");
        } else if (types.includes("electric") && types.includes("fairy")) {
            li.classList.add("tipo-elettrico-folletto");
        } else if (types.includes("psychic") && types.includes("ice")) {
            li.classList.add("tipo-psico-ghiaccio");
        } else if (types.includes("psychic") && types.includes("dragon")) {
            li.classList.add("tipo-psico-drago");
        } else if (types.includes("psychic") && types.includes("dark")) {
            li.classList.add("tipo-psico-buio");
        } else if (types.includes("psychic") && types.includes("fairy")) {
            li.classList.add("tipo-psico-folletto");
        } else if (types.includes("ice") && types.includes("dragon")) {
            li.classList.add("tipo-ghiaccio-drago");
        } else if (types.includes("ice") && types.includes("dark")) {
            li.classList.add("tipo-ghiaccio-buio");
        } else if (types.includes("ice") && types.includes("fairy")) {
            li.classList.add("tipo-ghiaccio-folletto");
        } else if (types.includes("dragon") && types.includes("dark")) {
            li.classList.add("tipo-drago-buio");
        } else if (types.includes("dragon") && types.includes("fairy")) {
            li.classList.add("tipo-drago-folletto");
        } else if (types.includes("dark") && types.includes("fairy")) {
            li.classList.add("tipo-buio-folletto");
        } else if (types[0] === "normal") {
            li.classList.add("tipo-normale");
        } else if (types[0] === "fighting") {
            li.classList.add("tipo-lotta");
        } else if (types[0] === "flying") {
            li.classList.add("tipo-volante");
        } else if (types[0] === "poison") {
            li.classList.add("tipo-veleno");
        } else if (types[0] === "ground") {
            li.classList.add("tipo-terra");
        } else if (types[0] === "rock") {
            li.classList.add("tipo-roccia");
        } else if (types[0] === "bug") {
            li.classList.add("tipo-insetto");
        } else if (types[0] === "ghost") {
            li.classList.add("tipo-spettro");
        } else if (types[0] === "fire") {
            li.classList.add("tipo-fuoco");
        } else if (types[0] === "water") {
            li.classList.add("tipo-acqua");
        } else if (types[0] === "electric") {
            li.classList.add("tipo-elettrico");
        } else if (types[0] === "psychic") {
            li.classList.add("tipo-psico");
        } else if (types[0] === "ice") {
            li.classList.add("tipo-ghiaccio");
        } else if (types[0] === "dragon") {
            li.classList.add("tipo-drago");
        } else if (types[0] === "dark") {
            li.classList.add("tipo-buio");
        } else if (types[0] === "fairy") {
            li.classList.add("tipo-folletto");
        } else if (types[0] === "steel") {
            li.classList.add("tipo-acciaio");
        } else if (types[0] === "grass") {
            li.classList.add("tipo-erba");
        }

        // Costruzione della card
        ul.appendChild(li);
        li.appendChild(nome);
        li.appendChild(tipoPokemon);
        li.appendChild(div);
        div.appendChild(img);
        li.appendChild(newButton);
        li.appendChild(a);

        // rimuovere il Pokémon al click
        newButton.addEventListener("click", () => {
            ul.removeChild(li);
            input.value = "";
        });

        // Resetta l'input al click
        input.addEventListener("click", () => {
            input.value = "";
        });

    } catch (error) {
        console.error(error);
    }
};