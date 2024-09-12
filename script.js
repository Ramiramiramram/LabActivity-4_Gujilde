$(document).ready(function(){

    fetch("pokedex.json")
        .then((rawData) => rawData.json())
        .then(pokedex =>{
            console.log(pokedex)

            pokedex.forEach(pokemon => {
                // console.log(pokemon);
                
                let id = pokemon["id"];
                let name = pokemon["name"];
                let image = pokemon["hires"];
                let typesHtml = "";

                typesHtml.forEach(type =>{
                    typesHtml += `<span class="${type}"></span>`
                })
                    $('.pokemon-container').append(
                        `<div class="card">
                            <img src="${image}" alt="${name}">
                            <ul type="none">
                            <li class="pokemon-id">#${id}</li>
                            <li class="pokemon-name">
                                <a href="pages/pokemon.html?id=0">${image}</a>
                            </li>
                            <li class="pokemon-type">
                                <span class="grass">Grass</span> <span class="poison">Poison</span>
                            </li>
                            </ul>
                        </div>`
                    );

                    console.log(typesHtml);
            });

        });

        
})