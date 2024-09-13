const player1 = {
    Nome: "Mario",
    Velocidade: 4,
    Manobrabilidade: 3,
    Poder: 3,
    Pontos: 0,
};

const player2 = {
    Nome: "Luigi",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 4,
    Pontos: 0,
};

const player3 = {
    Nome: "Peache",
    Velocidade: 3,
    Manobrabilidade: 4,
    Poder: 2,
    Pontos: 0,
};

const player4 = {
    Nome: "Yoshi",
    Velocidade: 2,
    Manobrabilidade: 4,
    Poder: 3,
    Pontos: 0,
};

const player5 = {
    Nome: "Browser",
    Velocidade: 5,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0,
};

const player6 = {
    Nome: "Donkey Kong",
    Velocidade: 2,
    Manobrabilidade: 2,
    Poder: 5,
    Pontos: 0,
};

async function rollDice(){
    Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock(){
    let random = Math.random();
    let result

    switch (true) {
        case random < 0.33:
            result = "Reta";
            break;
        case random < .66:
            result = "Curva";
            break;
        default:
            result = "Confronto";
    }
    return result;
}

async function logRollResult(characterName, block, diceResult, attribuite) {
    console.log(`${characterName} rolou o dado de ${block} ${diceResult} + ${attribuite} = ${diceResult + attribuite}`);
}

async function playRaceEngine(character1, character2){
    for(let round = 1; round <= 5; round++){
        console.log(`🏁 Rodada ${round}`);
        //sortear bloco
        let block = await getRandomBlock();
        console.log(`Bloco: ${block}`);
        //rolar dados
        let diceResult1 = await rollDice();
        let diceResult2 = await rollDice();
    //habilidades
        let totalTestSkill1 = 0;
        let totalTestSkill2 = 0;

        if (block == "Reta"){
            totalTestSkill1 = diceResult1 + character1.Velocidade;
            totalTestSkill2 = diceResult2 + character2.Velocidade;

            await logRollResult(character1.Nome, "Velocidade", diceResult1, character1.Velocidade)
            await logRollResult(character2.Nome, "Velocidade", diceResult2, character2.Velocidade)
        }
        if (block == "Curva"){
            totalTestSkill1 = diceResult1 + character1.Manobrabilidade;
            totalTestSkill2 = diceResult2 + character2.Manobrabilidade;

            await logRollResult(character1.Nome, "Manobrabilidade", diceResult1, character1.Manobrabilidade)
            await logRollResult(character2.Nome, "Manobrabilidade", diceResult2, character2.Manobrabilidade)
        }
        if (block == "Confronto"){
            let powerResult1 = diceResult1 + character1.Poder;
            let powerResult2 = diceResult2 + character2.Poder;
        }
    }
}

(async function main(){ //função alto invocavel
    console.log(`🏁🚨 Corriga entre ${player1.Nome} de ${player2.Nome} começando..\n`);
   await playRaceEngine(player1, player2);
})()

