class usuario {

constructor(nombre, apellido, libros, mascotas){
 this.nombre = nombre
 this.apellido = apellido
 this.libros = [libros]
this.mascotas = [mascotas]
}

getFullName () {
return (`mi nombre completo es ${this.nombre} ${this.apellido}`)
}

addMascotas(){
this.mascotas.push("loro")
}

getBookNames(){
    return this.libros
}

countMascotas(){
   return this.mascotas.length
}

}

let usuario1 = new usuario ("juan", "perez", ["pinocho", "lazarillo"],["perro", "gato"]);


console.log()