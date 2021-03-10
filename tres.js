function mostrar()
/*El empleado del negocio ingresa los siguientes datos de cada venta, teniendo en cuenta que tenemos varias ventas:
nombre del cliente
cantidad de lamparas marca (FelipeLamparas - ArgentinaLuz - Illuminatis)
precio por unidad 
total de la compra: dato que se calcula.
Se sabe que si la marca es FelipeLamparas y la cantidad de lamparas supera las 5 unidades, se aplica un descuento del 10% sobre la compra Si la marca es ArgentinaLuz y compra 3 o mas unidades, el descuento es del 5%. Ningun otro caso aplica descuento. al terminar la carga de todas las ventas,la empresa desea saber:
a) Cuanto recauda la empresa en concepto de todas las ventas realizadas.
b) Cuanto "perdio" la empresa en concepto de descuentos.
c) El promedio de la cantidad de lamparas vendidas de cada marca.
d) La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas)
*/
{ 
let nombre;
let cantidadLamp;
let marca;
let precioXU;
let totalCompra;
let seguir;
let totalRecaudado;
let totalPerdido;
let acumFL= 0;
let acumAL =0;
let acumI=0;
let contFL=0;
let contAL=0;
let contI=0;
let promFL=0;
let promAL=0;
let promI=0;
let marcaMasVenta;

do{
	nombre=prompt("Inrese nombre del cliente: ");
	cantidadLamp=parseInt(prompt("Ingrse cantidad de lamparas: "));
	marca=prompt("Ingrese marca FelipeLamparas/ArgentinaLuz/Illuminatis");
	while(marca!="FelipeLamparas" && marca!="ArgentinaLuz" && marca!= "Illuminatis"){
		marca=prompt("Error.Ingrese marca FelipeLamparas/ArgentinaLuz/Illuminatis");
	}
	precioXU=parseInt(prompt("Ingrese precio por unidad: "));

	totalCompra=cantidadLamp*precioXU;

	if(marca=="FelipeLamparas" && cantidadLamp> 5){
      totalCompra = totalCompra * 0.10; 
	}else if(marca=="ArgentinaLuz" && cantidadLamp>=3){
      totalCompra=totalCompra * 0.05;
	}
	

	if (marca == "FelipeLamparas"){
		acumFL+=cantidadLamp;
		contFL++;
	}else if (marca == "ArgentinaLuz"){
		acumAL+=cantidadLamp;
		contAL++;
	}else {
		acumI+=cantidadLamp;
		contI++;
	}

	

	seguir=prompt("Desea ingresar otra venta?: ");
}
while(seguir=="s");

if(contFL!=0){
    promFL=acumFL/contFL;
}
if (contAL!=0){
    promAL=acumAL/contAL;
}
if(contI!=0){
    promI=acumI/contI;
}
if (acumFL > acumAL && acumFL > acumI){
    marcaMasVenta = "FelipeLamparas";
 }else if (acumAL >= acumFL && acumAL > acumI){
    marcaMasVenta="ArgentinaLuz";
 }else{
    marcaMasVenta="Illuminatis";
 }

console.log(`c-El promedio de la cantidad de lamparas vendidas de cada marca es: FelipeLamparas  ${promFL}  ArgentinaLuz ${promAL}  Illuminatis ${promI}`);
console.log("d- La marca que mas ventas realizo (sin importar la cantidad de lamparas vendidas) es: " + marcaMasVenta);

}

