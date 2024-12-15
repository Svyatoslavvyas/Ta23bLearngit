
const characters = [
    {
        name: "Wasp Beth",
        status: "Alive",
        species: "Animal",
        gender: "Female",
        origin: "Earth (Wasp Dimension)",
        location: "Earth (Wasp Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/521.jpeg",
        type: "Wasp",
        episodeCount: 1
    },
    {
        name: "Caterpillar Mr. Goldenfold’s Larvae",
        status: "Dead",
        species: "Animal",
        gender: "unknown",
        origin: "Earth (Wasp Dimension)",
        location: "Earth (Wasp Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/522.jpeg",
        type: "Caterpillar",
        episodeCount: 1
    },
    {
        name: "Boglin",
        status: "unknown",
        species: "unknown",
        gender: "unknown",
        origin: "Earth (Replacement Dimension)",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/523.jpeg",
        type: "Toy",
        episodeCount: 1
    },
    {
        name: "Kirkland Brand Mr. Meeseeks",
        status: "unknown",
        species: "Humanoid",
        gender: "Male",
        origin: "Mr. Meeseeks Box",
        location: "Earth (Replacement Dimension)",
        image: "https://rickandmortyapi.com/api/character/avatar/524.jpeg",
        type: "Meeseeks",
        episodeCount: 1
    },
    {
        name: "Glootie",
        status: "Alive",
        species: "Alien",
        gender: "Male",
        origin: "unknown",
        location: "Monogatron Mothership",
        image: "https://rickandmortyapi.com/api/character/avatar/525.jpeg",
        type: "Monogatron",
        episodeCount: 1
    },
  
];


function displayCharacters() {
    const container = document.getElementById('character-container');
    container.innerHTML = ''; 

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h3>${character.name}</h3>
            <p>Status: ${character.status}</p>
            <p>Species: ${character.species}</p>
            <p>Gender: ${character.gender}</p>
            <button onclick="showMoreInfo(${characters.indexOf(character)})">Read More</button>
            <div class="character-info" id="info-${characters.indexOf(character)}" style="display:none;">
                <p>Origin: ${character.origin}</p>
                <p>Location: ${character.location}</p>
                <p>Type: ${character.type}</p>
                <p>Episode Count: ${character.episodeCount}</p>
            </div>
        `;

        container.appendChild(card);
    });
}


function showMoreInfo(index) {
    const info = document.getElementById(`info-${index}`);
    const isVisible = info.style.display === 'block';
    info.style.display = isVisible ? 'none' : 'block';
}


window.onload = displayCharacters;
