class usuario {

constructor(nombre, apellido, libros, mascotas){
 this.nombre = nombre
 this.apellido = apellido
 this.libros = libros
this.mascotas = mascotas
}

getFullName() {
    return this.nombre + " " + this.apellido
}


getBookName(){
    return this.libros
}

}
let usuario1 = new usuario ("juan", "perez", ["pinocho", "lazarillo"],["perro", "gato"]);



console.log(usuario1.getBookName())