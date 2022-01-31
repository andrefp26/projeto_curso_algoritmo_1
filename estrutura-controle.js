/*escreval("digite o nome do aluno: ")
leia(nome)
escreval("digite a nota 1 do aluno: ")
leia(nota1)
escreval("digite a nota 2 do aluno: ")
leia(nota2)
media := (nota1 + nota2) /2

se media >= 5 entao
   escreval("Aprovado!", nome)
senao
   escreval("Reprovado", nome)
fimse*/

var nome, nota01, nota02;
nome = prompt("digite o nome do aluno: ")
nota01 = prompt("digite a nota 1 do aluno: ")
nota02 = prompt("digite a nota 2 do aluno: ")

media = (parseInt(nota01) + parseInt(nota02)) / 2
if(media >= 50)
    alert("Aprovado" + nome)
else
    alert("reprovado" + nome)