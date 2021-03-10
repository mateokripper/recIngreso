function mostrar()
/*
Realizar el algoritmo que permita ingresar los datos de los 500 alumnos de la UTN FRA, los datos solicitados son:
nombre carrera("Quimica";"Fisica";"Sistemas")
sexo (masculino - femenino - no binario)
cantidad de materias(entre 1 y 5)
Nota promedio (entre 0 y 10)
edad (validar)
se debe informar de existir, o informar que no existe , en el caso que corresponda.
a) El nombre del mejor promedio de los alumnos que estudian Fisica. (Sin importar el sexo).
b) El nombre de la alumna mas joven.
c) Porcentaje de estudiantes que estudia cada carrera.
d) La edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica.
*/
{
    let nombre;
    let sexo;
    let nombreCarrera;
    let cantidadMat;
    let notaProm;
    let edad;
    let nombreMPFisica;
    let mejorProm;
    let flagNMPFisica = 1;
    let nombreAMasJoven;
    let flagAMasJoven=1;
    let menorEdad;
    let flagMMaterias = 1;
    let nombreEMM;
    let edadEMM;
    let mayorCantMat;
    
    let contFis=0;
    let contQ=0;
    let contSis=0;
    let porcFis;
    let porcQ;
    let porcSis;
   


    for (let i=0; i < 500; i++){
nombre=prompt("Ingrese el nombre del alumno: ");       
nombreCarrera=prompt("Ingrese nombre de la carrera Quimica/Fisica/Sistemas: ");
while(nombreCarrera!="Quimica" && nombreCarrera!="Fisica" && nombreCarrera!="sistemas"){
    nombreCarrera=prompt("Error. Ingrese nombre de la carrera Quimica/Fisica/Sistemas: ");
}
sexo=prompt("Ingrese sexo masculino/femenino/no binario: ");
while(sexo!="masculino" && sexo!="Fisica" && sexo!="sistemas"){
    sexo=prompt("Error. Ingrese sexo masculino/femenino/no binario: ");
}
cantidadMat=parseInt(prompt("Ingrese hasta 5 materias: "));
while(cantidadMat<0 && cantidadMat > 5 && isNaN(cantidadMat)){
    cantidadMat=parseInt(prompt("Error. Ingrese hasta 5 materias: "));
}
notaProm=parseInt(prompt("Ingrese nota promedio hasta 10: "));
while(notaProm <0  && notaProm > 10 && isNaN(notaProm)){
    notaProm=parseInt(prompt("Error. Ingrese nota promedio hasta 10: "));
}
edad=parseInt(prompt("Ingrese edad : "));
while(edad <0  && isNaN(edad)){
    edad=parseInt(prompt("Error. Ingrese edad: "));
}

if (nombreCarrera=="Fisica"){
	if(flagNMPFisica || notaProm > mejorProm){
	    mejorProm=notaProm;
        nombreMPFisica=nombre;
	  
	  flagNMPFisica=0;
	}
  }
if(edad < menorEdad && flagAMasJoven  ){
    menorEdad=edad;
    nombreAMasJoven=nombre;
    flagAMasJoven=0;
}
 if(nombreCarrera != "Quimica") {
   if(cantidadMat>mayorCantMat){
       mayorCantMat=cantidadMat;
       nombreEMM=nombre;
       edadEMM=edad;

       flagMMaterias = 0;
   }
 }
 if (nombreCarrera == "Fisica"){
	contFis++;
}else if (nombreCarrera== "Quimica"){
	contQ++;
}else {
	contSis++;
}

}
if(flagNMPFisica){
	console.log("a- No se ingresaron alumnos que estudien fisica");

}else{
	console.log("a- el nombre del alumno con mejor promedio en fisica es: " + nombreMPFisica);
}

console.log("b- El nombre de la alumna mas joven es:" + nombreAMasJoven);

if(contFis!=0){
    porcFis= (contFis * 100) / 500;
}
if(contQ !=0){
    porcQ= (contQ*100)/500;

}
if(contSis!=0){
    porcSis=(contSis*100)/500;
}
console.log(`c- Porcentaje de estudiantes que estudia cada carrera: fisica ${porcFis}  quimica ${porcQ}  sistemas ${porcSis}`);

if(edadEMM){
	console.log("d- No se ingresaron alumnos que no estudien quimica.");

}else{
	console.log("d- la edad y nombre del estudiante que cursa mas materias exceptuando la carrera de Quimica es : " + nombreEMM + edadEMM);
}
}    
