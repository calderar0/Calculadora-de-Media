var nome = "Calderaro"
var notaDoPrimeiroBimestre = 8.34
var notaDoSegundoBimestre = 7.41
var notaDoTerceiroBimestre = 6.89
var notaDoQuartoBimestre = 9.25
var notas = notaDoPrimeiroBimestre, notaDoSegundoBimestre, notaDoTerceiroBimestre, notaDoQuartoBimestre

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4

var notaFixada = notaFinal.toFixed(1)

console.log("Bem vindo " + nome)
console.log("O método utilizado para o cálculo foi: " + "(notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4")
console.log("Com suas notas, a conta ficou dessa forma: " + notaDoPrimeiroBimestre + " + " + notaDoSegundoBimestre + " + " + notaDoTerceiroBimestre + " + " + notaDoQuartoBimestre + " / 4")
console.log("Portanto, sua nota final de forma arredondada é:  " + notaFixada + ", enquanto sua nota final sem arredondamento é: " + notaFinal)
