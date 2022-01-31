

var nome, nota01, nota02;
nome = prompt("digite o nome do aluno: ")
nota01 = prompt("digite a nota 1 do aluno: ")
nota02 = prompt("digite a nota 2 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2
if(media >= 50)
    alert("Aprovado" + nome)
else
    alert("reprovado" + nome)