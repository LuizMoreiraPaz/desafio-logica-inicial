let nomeHeroi = prompt ("Informe o nome do seu herói:")
let xpHeroi = parseInt(prompt("Informe a experiência desse herói:"))
let nivel = ""

if(xpHeroi < 1000){
  nivel = "Ferro";
} else if (xpHeroi >= 1001 && xp <= 2000){
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && <= 5000){
    nivel = "Prata";
} else if (xpHeroi >= 5001 && <= 7000){
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && <= 8000){
    nivel = "Platina";
} else if (xpHeroi >= 8001 && <= 9000){
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && <= 10000){
    nivel = "Imortal";
} else (xpHeroi >= 10001){
    nivel: "Radiante";
}
alert("O herói de nome " + nomeHeroi + " está no nível de " + nivel);