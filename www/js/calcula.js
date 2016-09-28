function calcular(){

	var form = document.calculoIMC;
	var altura = form.altura.value;
	var peso = Number(form.peso.value);

	if(altura.indexOf(',')>-1){
		altura=altura.replace(',','.');


	} //indexOf devolve a posição de cada caractere.

	altura=Number(altura);
	var IMC=peso/Math.pow(altura,2);
	var imcNew=IMC.toFixed(2);//fica com 2 casas decimais e arredonda
	var resultado = 'O seu IMC é '+imcNew+'<br>';

	/*Novo*/
	if(IMC<18.5){
		resultado += 'Você encontra-se abaixo do peso ideal!';
	} else if(IMC<25){
		resultado += 'Você está no seu peso normal'
	} else if(IMC<30){
		resultado += 'Você está acima do seu peso'
	} else if(IMC<35){
		resultado += 'Obesiedade grau I'
	}

	document.getElementById('resultado').innerHTML=resultado;
}