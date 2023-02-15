//let greet = require('./greet');

//greet();

let persona = {
	nombre: "Kevin",
	apellido: "Lazaro",
	getName: function() {
		return `${this.nombre} ${this.apellido}`
	},
	domicilio: {
		calle: "Madero #144",
		colonia: "Centro",
		cp: 28000,
		municipio: "Colima"
	},
	getDomicilio: function () {
		return `Calle: ${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp} Municipio: ${this.domicilio.municipio}`;
	}
}
//console.log(persona.nombre);
//console.log(persona.apellido);
console.log(persona.getName())
console.log(persona.getDomicilio())
