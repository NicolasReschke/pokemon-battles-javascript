class Pokemon{
    constructor(name, type, type2, sprite, sprite2, hp, moves){
        this.name = name;
        this.type = type;
        this.type2 = type2;
        this.sprite = sprite;
        this.sprite2 = sprite2;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}

let pkmList = [
    ["Venusaur",
        "grass",
        "poison",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/venusaur-f.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/venusaur.gif",
        364, [
        ["Frenzy plant", "grass", 90, 0.95, ["./img/planta.png"]],
        ["Sludge wave", "poison", 90, 0.95],
        ["Earthquake", "ground", 100, 0.95],
        ["Hyper Beam", "normal", 150, 0.33]
    ]],
    
    ["Charizard",
        "fire",
        "fly",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/charizard.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/charizard.gif",
        360, [
        ["Flamethrower", "fire", 90, 0.95, ["./img/planta.png"]],
        ["Dragon claw", "dragon", 80, 0.95],
        ["Air slash", "fly", 75, 0.95],
        ["Thunder Punch", "electric", 75, 0.95]
    ]],

    ["Blastoise",
        "water",
        "",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/blastoise.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/blastoise.gif",
        362, [
        ["Surf", "water", 90, 0.95, ["./img/planta.png"]],
        ["Crunch", "dark", 80, 0.95],
        ["Ice Punch", "ice", 75, 0.95],
        ["Flash cannon", "steel", 80, 0.95]
    ]],

    ["Pikachu",
        "electric",
        "",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu-f.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/pikachu.gif",
        274, [
        ["Thunderbolt", "electric", 90, 0.95, ["./img/planta.png"]],
        ["Iron tail", "steel", 90, 0.75],
        ["Brick break", "fighting", 85, 0.95],
        ["Surf", "water", 90, 0.95]
    ]],

    ["Nidoking",
        "poison",
        "ground",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/nidoking.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/nidoking.gif",
        366, [
        ["Sludge wave", "poison", 90, 0.95, ["./img/planta.png"]],
        ["Earth power", "ground", 90, 0.95],
        ["Rock Slide", "rock", 75, 0.90],
        ["Megahorn", "bug", 120, 0.85]
    ]],

    ["Machamp",
        "fighting",
        "",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/machamp.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/machamp.gif",
        384, [
        ["Brick break", "fighting", 85, 0.95, ["./img/planta.png"]],
        ["Heavy slam", "steel", 85, 0.95],
        ["Rock Slide", "rock", 75, 0.90],
        ["Earthquake", "ground", 100, 0.95]
    ]],

    ["Gengar",
        "ghost",
        "poison",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gengar.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gengar.gif",
        324, [
        ["Shadow ball", "ghost", 80, 0.95, ["./img/planta.png"]],
        ["Sludge bomb", "poison", 90, 0.95],
        ["Dark pulse", "dark", 80, 0.95],
        ["Hyper beam", "normal", 150, 0.33]
    ]],

    ["Gyarados",
        "water",
        "fly",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/gyarados-f.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/gyarados.gif",
        394, [
        ["Aqua tail", "water", 90, 0.90, ["./img/planta.png"]],
        ["Crunch", "dark", 80, 0.95],
        ["Dragon pulse", "dragon", 85, 0.95],
        ["Hyper beam", "normal", 150, 0.33]
    ]],

    ["Lapras",
        "water",
        "ice",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/lapras.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/lapras.gif",
        464, [
        ["Surf", "water", 90, 0.95, ["./img/planta.png"]],
        ["Ice beam", "ice", 90, 0.95],
        ["Dragon pulse", "dragon", 85, 0.95],
        ["Hyper beam", "normal", 150, 0.33]
    ]],

    ["Snorlax",
        "normal",
        "",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/snorlax.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/snorlax.gif",
        524, [
        ["Body slam", "normal", 65, 0.95, ["./img/planta.png"]],
        ["Heavy slam", "steel", 85, 0.95],
        ["Lick", "ghost", 30, 0.95],
        ["Hyper beam", "normal", 150, 0.33]
    ]],

    ["Dragonite",
        "dragon",
        "fly",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/dragonite.gif", 
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/dragonite.gif",
        386, [
        ["Dragon claw", "dragon", 80, 0.95, ["./img/planta.png"]],
        ["Wing attack", "fly", 60, 0.95],
        ["Hurricane", "fly", 110, 0.50],
        ["Hyper beam", "normal", 150, 0.33]
    ]],

    ["Mewtwo",
        "psychic",
        "",
        "https://img.pokemondb.net/sprites/black-white/anim/normal/mewtwo.gif",
        "https://img.pokemondb.net/sprites/black-white/anim/back-normal/mewtwo.gif",
        416, [
        ["Psystrike", "psychic", 100, 0.95, ["./img/planta.png"]],
        ["Aura sphere", "fighting", 80, 0.95],
        ["Shadow ball", "ghost", 80, 0.95],
        ["Hyper beam", "normal", 150, 0.33]
    ]]
];



const attackMoves = {
    "grass" : [["./img/planta.png"]],
    "fire" : [["./img/fuego.png"]],
    "water" : [["./img/agua.png"]],
    "electric" : [["./img/electrico3.png"]],
    "ground" : [["./img/tierra.png"]],
    "fighting" : [["./img/lucha.png"]],
    "ghost" : [["./img/fantasma.png"]],
    "fly" : [["./img/volador.png"]],
    "normal" : [["./img/normal.png"]],
    "dragon" : [["./img/dragon.png"]],
    "psychic" : [["./img/psiquico.png"]],
    "ice" : [["./img/hielo.png"]],
    "poison" : [["./img/veneno.png"]],
    "steel" : [["./img/acero2.png"]],
    "dark" : [["./img/siniestro.png"]],
    "rock" : [["./img/roca.png"]]
}



const typeMatch = {
    'Venusaur': [[''], ['fire', 'ice', 'fly', 'psychic'], ['water', 'electric', 'grass', 'fighting', 'fairy']],
    'Charizard': [['ground'], ['water', 'electric', 'rock'], ['fire', 'grass', 'fighting', 'bug', 'steel', 'fairy']],
    'Blastoise': [[''], ['electric', 'grass'], ['fire', 'water', 'ice', 'steel']],
    'Pikachu': [[''], ['ground'], ['electric', 'fly', 'steel']],
    'Nidoking': [['electric'], ['water', 'ice', 'ground', 'psychic'], ['fighting', 'poison', 'bug', 'rock', 'fairy']],
    'Machamp': [[''], ['fly', 'psychic', 'fairy'], ['bug', 'rock', 'dark']],
    'Gengar': [['normal', 'fighting'], ['ground', 'psychic', 'ghost', 'dark'], ['grass', 'poison', 'bug', 'fairy']],
    'Gyarados': [['ground'], ['electric', 'rock'], ['fire', 'water', 'fighting', 'bug', 'steel']],
    'Lapras': [['water'], ['electric', 'grass', 'fighting', 'rock'], ['ice']],
    'Snorlax': [['ghost'], ['fighting'], ['']],
    'Dragonite': [['ground'], ['ice', 'rock', 'dragon', 'fairy'], ['fire', 'water', 'grass', 'fighting', 'bug']],
    'Mewtwo': [[''], ['ghost', 'dark', 'bug'], ['fighting', 'psychic']]
};



function spawn(bool) {
    const [name, type, type2, sprite, sprite2, hp, moves] = pkmList[(Math.random() * pkmList.length) | 0];
    const pkm = new Pokemon(name, type, type2, sprite, sprite2, hp, moves);

    if (bool) {
        for (let i = 0; i < 4; i++) {
        document.getElementById(`m${i}`).value = pkm.moves[i][0];
        }
    }
    return pkm;
}



const pk1 = spawn(true);
const s1 = document.createElement('img');
s1.src = pk1.sprite2;
document.getElementById('pk1').appendChild(s1);

const hp1 = document.createElement('p');
hp1.textContent = `HP: ${pk1.hp}/${pk1.fullhp}`;
document.getElementById('hp1').appendChild(hp1);

const pk2 = spawn(false);
const s2 = document.createElement('img');
s2.src = pk2.sprite;
document.getElementById('pk2').appendChild(s2);

const hp2 = document.createElement('p');
hp2.textContent = `HP: ${pk2.hp}/${pk2.fullhp}`;
document.getElementById('hp2').appendChild(hp2);


///////////////////////////////
///////////////////////////////


pk1.moves.forEach((move, i) => {
    const btn = document.getElementById(`m${i}`);
    btn.addEventListener('click', function(e) {
        attack(move, pk1, pk2, 'hp2', 'Your ');
        setTimeout(attack, 2000, pk2.moves[Math.floor(Math.random() * 3)], pk2, pk1, 'hp1', 'Rival ');
    });
});

///////////////////////////////
///////////////////////////////


function attack(move, attacker, receiver, hp, owner){
    document.getElementById('comment').innerHTML = '<p>' + owner + attacker.name + ' used '  + move[0] + '!</p>';

    if(Math.random() < move[3]){
        let power = move[2] + Math.floor(Math.random()*10);
        let rtype = typeMatch[receiver.name];
        let mtype = move[1];
        let scale = 1;

        for(let i = 0; i < rtype.length; i++){
            if(rtype[i].includes(mtype)){
                switch(i){
                    case 0: 
                        scale = 0;
                        document.getElementById('comment').innerHTML += '<p>It had no effect!</p>';
                        break;
                    case 1: 
                        scale = 2;
                        document.getElementById('comment').innerHTML += '<p>It was super effective!</p>';
                        break;
                    case 2: 
                        scale = 0.5;
                        document.getElementById('comment').innerHTML += '<p>It was not very effective!</p>';
                        break;
                }
                break;
            }
        }
        power *= scale;
        receiver.hp -= Math.floor(power);
        document.getElementById(hp).innerHTML = '<p>HP: ' + receiver.hp + '/' + receiver.fullhp + '</p>';
    }
    else{
        document.getElementById('comment').innerHTML += '<p>Attack missed!</p>';
    }
    checkWinner(hp);
}



function checkWinner(hp){
    let f = (pk1.hp <= 0) ? pk1 : (pk2.hp <= 0) ? pk2 : false;
    if(f){
        alert('GAME OVER: ' + f.name +' fué derrotado!');
        document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
        setTimeout(function(){
            location.reload();
        }, 1500);
    }
}
