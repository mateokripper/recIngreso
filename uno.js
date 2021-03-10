/*Una software factory registra la siguiente informacion de sus empleados:
Nombre edad (validar)
sexo (masculino - femenino - no binario)
puesto (programador - analista - Qa)
sueldo (entre 15000 y 70000)
La empresa desea saber: se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) promedio de sueldos para cada puesto
b) el sexo del que percibe el mayor sueldo
c) el nombre del empleado femenino con mas sueldo
d) cantidad de programadores no binarios que cobran sueldos entre 20000 y 55000
*/
function mostrar()
{
	let nombre;
	let puesto;
	let sexo;
	let edad;
	let sueldo;
	let seguir;
	let acumPr= 0;
    let acumAn =0;
    let acumQa=0;
    let contPr=0;
    let contAn=0;
    let contQa=0;
    let promPr=0;
    let promAn=0;
    let promQa=0;
	let sexoMayorSueldo;
	let flagSexo=1;
	let mayorSueldo;
	let nombreFemMSueldo;
	let flagNombre=1;
	let mayorSueldoF;
	let contPrNB = 0;
    let flagNB = 1;


do{
nombre=prompt("Ingrese nombre: ");
edad=parseInt(prompt("Ingrese edad: "));
while(isNaN(edad) && edad < 0 ){
	edad=parseInt(prompt("Error. Ingrese edad: "));
}
sexo=prompt("Ingrese sexo masculino/femenino/no binario: ");
while(sexo != "masculino" && sexo != "femenino" && sexo != "no binario"){
	sexo=prompt("Error. Ingrese sexo: ");
}
puesto=prompt("Ingrese puesto programador/analista/Qa: ");
while(puesto != "programador" && puesto != "analista" && puesto != "Qa"){
	puesto=prompt("Error. Ingrese puesto programador/analista/Qa: ");
}
sueldo = parseInt(prompt("Ingrese sueldo entre 15000 y 70000: "));
while(sueldo < 15000 && sueldo > 70000){
	sueldo = parseInt(prompt("Error. Ingrese sueldo entre 15000 y 70000: "));
}

if (puesto == "programador"){
	acumPr+=cantidad;
	contPr++;
}else if (tipo == "analista"){
	acumAn+=cantidad;
	contAn++;
}else {
	acumQa+=cantidad;
	contQa++;
}

if (flagSexo || sueldo> mayorSueldo ){
	mayorSueldo=sueldo;
	sexoMayorSueldo=sexo;
	

	flagSexo = 0;
}

if (sexo=="femenino"){
	if(flagNombre || sueldo > mayorSueldoF){
	  mayorSueldoF=sueldo;
		nombreFemMSueldo=nombre;
	  
	  flagLibre=0;
	}
  }
  if (flagNB && sexo== "no binario"){
	if(sueldo >= 20000 && sueldo <= 55000){
		contPrNB ++; 
        flagNB=0;
	}
}
seguir=prompt("Desea ingresar otro empleado?");
}
while(seguir=="s");

if(contPr!=0){
    promPr=acumPr/contPr;
}
if (contAn!=0){
    promAn=acumAn/contAn;
}
if(contQa!=0){
    promQa=acumQa/contQa;
}


console.log(`A- El promedio de sueldo por cada puesto es: programador ${promPr}  analista ${promAn}  Qa  ${promQa}` );
console.log("B- El sexo del empleado con mayor sueldo es:" + sexoMayorSueldo);
if(flagNombre){
	console.log("C- No se ingresaron empleados femeninos");

}else{
	console.log("C- el nombre del empleado femenino con mayor sueldo es: " + nombreFemMSueldo)
}
if(flagNB){
	console.log("D- no se ingresaron empleados no binarios. ");
}else{
	console.log("D- La cantidad de empleados no binarios que cobran entre 20000 y 55000 es: " + contPrNB);








}
