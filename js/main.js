class Pokemon{
    constructor(name, sprite, hp, moves){
        this.name = name;
        this.sprite = sprite;
        this.hp = hp;
        this.fullhp = hp;
        this.moves = moves;
    }
}

let pkmList = [
    ["Charizard", "https://img.pokemondb.net/sprites/black-white/normal/charizard.png", 360, [
        ["Flamethrower", "fire", 95, 0.95],
        ["Dragon claw", "dragon", 80, 0.95],
        ["Air slash", "fly", 75, 0.85],
        ["Slash", "normal", 70, 0.95]
    ]],

    ["Blastoise", "https://img.pokemondb.net/sprites/black-white/normal/blastoise.png", 362, [
        ["Surf", "water", 90, 0.95],
        ["Crunch", "normal", 80, 0.95],
        ["Ice Punch", "ice", 75, 0.95],
        ["Flash cannon", "steel", 80, 0.95]
    ]],

    ["Venusaur", "https://img.pokemondb.net/sprites/black-white/normal/venusaur.png", 364, [
        ["Petal blizzard", "grass", 90, 0.95],
        ["Sludge bomb", "poison", 90, 0.95],
        ["Earthquake", "ground", 100, 0.95],
        ["Body slam", "normal", 85, 0.95]
    ]]
];

const typeMatch = {
    'Charizard': [['ground'], ['water', 'rock'], ['fire', 'grass', 'steel']],
    'Blastoise': [[''], ['grass'], ['fire', 'water']],
    'Venusaur': [['poison'], ['fire', 'fly', 'ice', 'steel'], ['grass', 'water']]
};
function spawn(bool) {
    const [name, sprite, hp, moves] = pkmList[(Math.random() * pkmList.length) | 0];
    const pkm = new Pokemon(name, sprite, hp, moves);

    if (bool) {
        for (let i = 0; i < 4; i++) {
        document.getElementById(`m${i}`).value = pkm.moves[i][0];
        }
    }
    return pkm;
}

//CODIGO ORIGINAL
// let typeMatch = {
//     "Charizard": [["ground"], ["water", "rock"], ["fire", "grass", "steel"]],
//     "Blastoise": [[""], ["grass"], ["fire", "water"]],
//     "Venusaur": [["poison"], ["fire", "fly", "ice", "steel"], ["grass", "water"]],
// }

// function spawn(bool){
//     let p = pkmList[Math.floor(Math.random()*pkmList.length)];
//     let pkm = new Pokemon(p[0], p[1], p[2], p[3]);

//     if(bool){
//         for(i=0; i<4; i++){
//             document.getElementById('m'+i).value = pkm.moves[i][0];
//         }
//     }
//     return pkm;
// }


const pk1 = spawn(true);
const s1 = document.createElement('img');
s1.src = pk1.sprite;
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

pk1.moves.forEach((move, i) => {
    const btn = document.getElementById(`m${i}`);
    btn.addEventListener('click', function(e) {
        attack(move, pk1, pk2, 'hp2', '');
        setTimeout(attack, 2000, pk2.moves[Math.floor(Math.random() * 3)], pk2, pk1, 'hp1', 'Rival ');
    });
});

// let pk1 = spawn(true);
// s1 = document.createElement("img");
// s1.src = pk1.sprite;
// document.getElementById('pk1').appendChild(s1);
// document.getElementById('hp1').innerHTML = "<p>HP: " + pk1.hp + "/" + pk1.fullhp + "</p>";

// let pk2 = spawn(false);
// s2 = document.createElement("img");
// s2.src = pk2.sprite;
// document.getElementById('pk2').appendChild(s2);
// document.getElementById('hp2').innerHTML = "<p>HP: " + pk2.hp + "/" + pk2.fullhp + "</p>";


// for(i=0; i<4; i++){
//     let btn = document.getElementById("m"+i);
//     let move = pk1.moves[i];
//     function addHandler(btn, move, pk1, pk2){
//         btn.addEventListener('click', function(e){
//         attack(move, pk1, pk2, 'hp2', ' ');
//         setTimeout(attack,2000, pk2.moves[Math.floor(Math.random()*3)], pk2, pk1, "hp1", "Rival ");
//         });
//     }
//     addHandler(btn, move, pk1, pk2);
// }


// function attack(move, attacker, receiver, hp, owner) {
//     const commentElem = document.getElementById('comment');
//     const power = move[2] + Math.floor(Math.random() * 10);
//     const rtype = typeMatch[receiver.name];
//     const mtype = move[1];
//     let scale = 1;
  
//     switch (true) {
//       case rtype[0].includes(mtype):
//         commentElem.innerHTML = `<p>It had no effect!</p>`;
//         scale = 0;
//         break;
//       case rtype[1].includes(mtype):
//         commentElem.innerHTML = `<p>It was super effective!</p>`;
//         scale = 2;
//         break;
//       case rtype[2].includes(mtype):
//         commentElem.innerHTML = `<p>It was not very effective!</p>`;
//         scale = 0.5;
//         break;
//       default:
//         commentElem.innerHTML = `<p>The attack missed!</p>`;
//     }
  
//     if (scale !== 0) {
//       const damage = Math.floor(power * scale);
//       receiver.hp -= damage;
//       document.getElementById(hp).innerHTML = `<p>HP: ${receiver.hp}/${receiver.fullhp}</p>`;
//     }
  
//     checkWinner(hp);
//   }


// function attack(move, attacker, receiver, hp, owner){
//     document.getElementById("comment").innerHTML = "<p>" + owner + attacker.name + " used " + move[0] + "!</p>";
//     if(Math.random() < move[3]){
//         let power = move[2] += Math.floor(Math.random()*10);
//         let rtype = typeMatch[receiver.name];
//         let mtype = move[1];
//         let scale = 1;

//         for(i=0; i<rtype.length; i++){
//             if(rtype[i].includes(mtype)){
//                 switch(i){
//                     case 0:
//                         scale = 0;
//                         setTimeout(function(){
//                             document.getElementById("comment").innerHTML = "<p>It had no effect!</p>";
//                         },1000);
//                         break;
//                     case 1:
//                         scale = 2;
//                         setTimeout(function(){
//                             document.getElementById("comment").innerHTML = "<p>It was super effective!</p>";
//                         },1000);
//                         break;
//                     case 2:
//                         scale = 0.5;
//                         setTimeout(function(){
//                             document.getElementById("comment").innerHTML = "<p>It was not very effective!</p>";
//                         },1000);
//                         break;
//                 }
//                 break;
//             }
//         }
//         power *= scale;
//         receiver.hp -= Math.floor(power);
//         document.getElementById(hp).innerHTML = "<p>HP: " + receiver.hp + "/" + receiver.fullhp + " </p>";
//     }
//     else{
//         setTimeout(function(){
//             document.getElementById("comment").innerHTML = "<p>Attack missed!</p>";
//         })
//     }
//     checkWinner(hp);
// }



// function checkWinner(hp) {
//     let f;
//     if (pk1.hp <= 0) {
//         f = pk1;
//     } 
//     else if (pk2.hp <= 0) {
//         f = pk2;
//     } 
//     else {
//         return;
//     }
//     alert('GAME OVER: ' + f.name +' fainted!');
//     document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
//     setTimeout(function(){
//         location.reload();
//     }, 1500);
// }


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
        alert('GAME OVER: ' + f.name +' fainted!');
        document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
        setTimeout(function(){
            location.reload();
        }, 1500);
    }
}

// function checkWinner(hp){
//     let f = (pk1.hp <=0) ? pk1 : (pk2.hp<=0) ? pk2 : false;
//     if(f!=false){
//         alert('GAME OVER: ' + f.name +' fainted!');
//         document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
//         setTimeout(function(){
//             location.reload();
//         },1500)
//     }
// }







    // const commentEl = document.getElementById('comment');
    // const rtype = typeMatch[receiver.name];
    // const mtype = move[1];
    // const randomNum = Math.random();

// commentEl.innerHTML = `<p>${owner}${attacker.name} used ${move[0]}!</p>`;

// if (randomNum < move[3]) {
//     let power = move[2] + Math.floor(Math.random() * 10);
//     let scale = 1;

//     for (let i = 0; i < rtype.length; i++) {
//     if (rtype[i].includes(mtype)) {
//         switch (i) {
//         case 0:
//             scale = 0;
//             setTimeout(() => {
//             commentEl.innerHTML = '<p>It had no effect!</p>';
//             }, 1000);
//             break;
//         case 1:
//             scale = 2;
//             setTimeout(() => {
//             commentEl.innerHTML = '<p>It was super effective!</p>';
//             }, 1000);
//             break;
//         case 2:
//             scale = 0.5;
//             setTimeout(() => {
//             commentEl.innerHTML = '<p>It was not very effective!</p>';
//             }, 1000);
//             break;
//         }
//         break;
//     }
//     }

//     power *= scale;
//     receiver.hp -= Math.floor(power);
//     document.getElementById(hp).innerHTML = `<p>HP: ${receiver.hp}/${receiver.fullhp}</p>`;
// } else {
//     setTimeout(() => {
//     commentEl.innerHTML = '<p>Attack missed!</p>';
//     });
// }

// checkWinner(hp);
// }

// function checkWinner(hp){
//     let f = (pk1.hp <=0) ? pk1 : (pk2.hp<=0) ? pk2 : false;
//     if(f!=false){
//         alert('GAME OVER: ' + f.name +' fainted!');
//         document.getElementById(hp).innerHTML = '<p>HP: 0/' + f.fullhp + '</p>';
//         setTimeout(function(){
//             location.reload();
//         },1500)
//     }

// }