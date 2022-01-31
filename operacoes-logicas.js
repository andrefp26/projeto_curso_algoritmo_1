

var nome, nota01, nota02, passou;
passou = false;

nome = prompt("digite o nome do aluno: ")
nota01 = prompt("digite a nota 1 do aluno: ")
nota02 = prompt("digite a nota 2 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2

if(media >= 50)
    passou = true;

    if(passou && (media >= 70 && media <= 90))
        alert("reprovado" + nome)
    else
        alert("reprovado" + nome)    