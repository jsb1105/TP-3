//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function info(cadena) {

    let resultado = "La cadena \""+cadena+"\" ";
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }
  alert(info("hola mundo "));
alert(info("BUEN DIA"));
  alert(info("Domingo de Julio"));
