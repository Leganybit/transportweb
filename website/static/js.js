//____Declaro variables______
var priceGas = 2,
//____Variables pequeña____
consumoP = 7,
horaInicioP = 2,
priceHoraP = 10,
//_____Variables mediana_____
consumoM = 11,
horaInicioM = 2,
priceHoraM = 14,
//____variables grande_____
consumoG = 15,
horaInicioG = 4,
priceHoraG = 18;

var numberInput = document.getElementById("input-km")
numberInput.addEventListener("change", function(){
    var input= document.getElementById("input-km").value;
    var km = parseInt(input)

    var precioP = parseInt((2 *(priceGas*(2*(km /100) * consumoP))+ (horaInicioP * priceHoraP )+
	(priceHoraP*(km/200)*(priceHoraP/4))+
	((priceGas*(km/100 * consumoP))+
	priceHoraP +(1/3*km/100)*priceHoraP)));

	var precioM = parseInt((2 *(priceGas*(2*(km /100) * consumoM))+
	(horaInicioM * priceHoraM )+(priceHoraM*(km/200)*(priceHoraM/4))+
	((priceGas*(km/100 * consumoM))+priceHoraM +(1/3*km/100)*priceHoraM)));

	/*var precioG = parseInt((2 *(priceGas*(2*(km /100) * consumoG))+
	(horaInicioG * priceHoraG )+(priceHoraG*(km/200)*(priceHoraG/4))+
	((priceGas*(km/100 * consumoG))+priceHoraG +(1/3*km/100)*priceHoraG)));*/

    document.getElementById("precioP").innerHTML = precioP;
    document.getElementById("fp").innerHTML = "Precio por la pequeña:";
    document.getElementById("fm").innerHTML = "Precio por la mediana:";
    document.getElementById("precioM").innerHTML = precioM;
});


/*
{{(2 *(priceGas*(2*(km /100) * consumoP))+ (horaInicioP * priceHoraP )+
	(priceHoraP*(km/200)*(priceHoraP/4))+
	((priceGas*(km/100 * consumoP))+
	priceHoraP +(1/3*km/100)*priceHoraP))|int}}€

<!--_________Variables generales de la formula______-->
{% set km=km|int%}
{% set priceGas= 2 %}
<!--_________Variables furgoneta pequeña______-->
{% set consumoP= 7 %}
{% set horaInicioP= 2 %} <!--Estas horas son la de sumar una hora de carga y otra de descarga-->
{% set priceHoraP=10 %}
<!--_________Variables furgoneta mediana______-->
{% set consumoM= 11 %}
{% set horaInicioM= 2 %}
{% set priceHoraM=14 %}
<!--_________Variables furgoneta grande______-->
{% set consumoG= 15 %}
{% set horaInicioG= 4 %}<!--En la grande, las horas de carga y descarga son 2, por ende la suma es 4-->
{% set priceHoraG=18 %}

*/