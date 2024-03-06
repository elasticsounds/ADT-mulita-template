//funcion para checkear forms a completar
console.log('Hay un elemento enfocado:', document.activeElement);
function checked(actividad) {	
	const opciones = {};
  var lbId;

	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	

    if (actividad == 1) {
        opciones.opcion = "No abran la puerta a nadie.";
        lbId = "lblopcion";
    } else if (actividad == 2) {
        opciones.opcion = "Abran la puerta. Soy su mamá.";
        lbId = "lblopcion";
    } else if (actividad == 3) {
        opciones.opcion = "Me los comeré a todos.";
        lbId = "lblopcion";
    } else if (actividad == 4) {
        opciones.opcion = "¡Qué susto pasé!";
        lbId = "lblopcion";		
    } else if (actividad == 5) {
        opciones.nombre1 = "LOBO";
        lbId = "lblnombre";
    } else if (actividad == 6) {
        opciones.nombre1 = "CABRA";
        lbId = "lblnombre";
    } else if (actividad == 7) {
        opciones.nombre1 = "CABRITOS";
        lbId = "lblnombre";
    } else if (actividad == 8) {
        opciones.nombre1 = "MOLINERO";
        lbId = "lblnombre";
    } else if (actividad == 9) {
        opciones.nombre1 = "ALMACENERO";
        lbId = "lblnombre";
    } else if (actividad == 10) {
        opciones.nombre1 = "PANADERO";
        lbId = "lblnombre";
    } else if (actividad == 11) {
        opciones.orden = "Mamá, tendremos mucho cuidado.";
        lbId = "lblorden";
    } else if (actividad == 12) {
      opciones.orden = "Póngame harina sobre las patas.";
      lbId = "lblorden";
    } else if (actividad == 13) {
      opciones.orden = "¿Dónde están, mis queridos cabritos?";
      lbId = "lblorden";
    } else if (actividad == 14) {
      opciones.espacio = "El lobo golpeó la puerta.";
      lbId = "lblespacio";
    } else if (actividad == 15) {
      opciones.espacio = "El lobo mostró su pata.";
      lbId = "lblespacio";
    } else if (actividad == 16) {
      opciones.espacio = "El lobo entró a la casa.";
      lbId = "lblespacio";
    } else if (actividad == 17) {
      opciones.espacio = "Los cabritos se escondieron.";
      lbId = "lblespacio";
    } else if (actividad == 18) {
      opciones.espacio = "El lobo los engañó.";
      lbId = "lblespacio";
    } else if (actividad == 19) {
      opciones.dijo = "La mamá de los cabritos";
      lbId = "lbldijo";
    } else if (actividad == 20) {
      opciones.dijo = "Los cabritos";
      lbId = "lbldijo";
    } else if (actividad == 21) {
      opciones.dijo = "El lobo";
      lbId = "lbldijo";
    } else if (actividad == 22) {
      opciones.dijo = "Los cabritos";
      lbId = "lbldijo";
    } else if (actividad == 211) {
        opciones.opcion = "¡Qué ricas!";
        lbId = "lblopcion";
    } else if (actividad == 212) {
        opciones.opcion = "¡Ya no quiero ser ratón!";
        lbId = "lblopcion";
    } else if (actividad == 213) {
        opciones.opcion = "¡Ya me convertí en jabalí, en carpincho, en mandril!";
        lbId = "lblopcion";
    } else if (actividad == 214) {
        opciones.opcion = "¡Nunca, jamás sería un gato!";
        lbId = "lblopcion";
    } else if (actividad == 221) {
        opciones.nombre1 = "BA";
        lbId = "lblopcion"
    } else if (actividad == 222) {
        opciones.nombre1 = "ZO";
        lbId = "lblopcion"
    } else if (actividad == 223) {
      opciones.nombre1 = "PIN";
      lbId = "lblopcion"
    }
    else if (actividad == 224) {
      opciones.nombre1 = "FAN";
      lbId = "lblopcion"
    } else if (actividad == 225) {
      opciones.nombre1 = "DRIL";
      lbId = "lblopcion"
    }
    else if (actividad == 241) {
      opciones.orden = "Soy un ratón de biblioteca.";
      lbId = "lblorden"
    }
    else if (actividad == 242) {
      opciones.orden = "Odio el queso, me apasiona el papel.";
      lbId = "lblorden"
    }
    else if (actividad == 243) {
      opciones.orden = "Me devoré un libro de animales.";
      lbId = "lblorden"
    }
    else if (actividad == 251) {
      opciones.espacio = "Diógenes se convirtió en un pez.";
      lbId = "lblespacio"
    }
    else if (actividad == 252) {
      opciones.espacio = "La zambullida del pez fue colosal.";
      lbId = "lblespacio"
    }
    else if (actividad == 253) {
      opciones.espacio = "Nadaba en lo más profundo del lago.";
      lbId = "lblespacio"
    }
    else if (actividad == 254) {
      opciones.espacio = "Persiguió a dos anguilas pendencieras.";
      lbId = "lblespacio"
    }
    else if (actividad == 261) {
      opciones.dijo = "El elefante Diógenes";
      lbId = "lbldijo"
    }
    else if (actividad == 262) {
      opciones.dijo = "La liebre Diógenes";
      lbId = "lbldijo"
    }
    else if (actividad == 263) {
      opciones.dijo = "El jabalí Diógenes";
      lbId = "lbldijo"
    }
    else if (actividad == 264) {
      opciones.dijo = "El zorrillo Diógenes";
      lbId = "lbldijo"
    }  else if (actividad == 290) {
        opciones.opcion = "van a la escuela";
        lbId = "lblopcion"
    
    } else if (actividad == 291) {
      opciones.opcion = "ratón de biblioteca.";
      lbId = "lblopcion"
    }
    else if (actividad == 292) {
      opciones.opcion = "odiaba el queso.";
      lbId = "lblopcion"
    }else if (actividad == 293) {
      opciones.opcion = "las hojas de un libro";
      lbId = "lblopcion"
    }else if (actividad == 294) {
      opciones.opcion = "otros bichos.";
      lbId = "lblopcion"
    }else if (actividad == 295) {
      opciones.opcion = "ser ratón";
      lbId = "lblopcion"
    }else if (actividad == 296) {
      opciones.opcion = "gato violeta.";
      lbId = "lblopcion"
    }else if (actividad == 311) {
      opciones.opcion = "¡Un huevito cúbico!";
      lbId = "lblopcion"
    }else if (actividad == 312) {
      opciones.opcion = "Se llamará Eulato.";
      lbId = "lblopcion"
    }else if (actividad == 313) {
      opciones.opcion = "Yo le enseñaré a cantar.";
      lbId = "lblopcion"
    }else if (actividad == 314) {
      opciones.opcion = "¡Es igual a Eulato!";
      lbId = "lblopcion"
    } else if (actividad == 321) {
      opciones.nombre1 = "NICOLAS";
      lbId = "lblnombre"
    }  else if (actividad == 322) {
      opciones.nombre1 = "AVISPON";
      lbId = "lblnombre"
    }  else if (actividad == 323) {
      opciones.nombre1 = "CHINCHE";
      lbId = "lblnombre"
    }  else if (actividad == 331) {
      opciones.nombre1 = "HORMIGA";
      lbId = "lblnombre"
    }  else if (actividad == 332) {
      opciones.nombre1 = "CANASTO";
      lbId = "lblnombre"
    }  else if (actividad == 333) {
      opciones.nombre1 = "GRILLO";
      lbId = "lblnombre"
    }else if (actividad == 341) {
      opciones.opcion = "Miren esto vengan.";
      lbId = "lblopcion"
    }else if (actividad == 342) {
      opciones.opcion = "Eulato comió seis dedales de miel.";
      lbId = "lblopcion"
    }else if (actividad == 343) {
      opciones.opcion = "Cuidá los hilos para tejer bien.";
      lbId = "lblopcion"
    }else if (actividad == 344) {
      opciones.opcion = "Para cantar bien debés entonar mejor.";
      lbId = "lblopcion"
    }else if (actividad == 345) {
      opciones.opcion = "Ese bicho es igual a Eulato.";
      lbId = "lblopcion"
    }else if (actividad == 351) {
      opciones.opcion = "Lulo Grillo";
      lbId = "lblopcion"
    }else if (actividad == 352) {
      opciones.opcion = "Eulato";
      lbId = "lblopcion"
    }else if (actividad == 353) {
      opciones.opcion = "Quico Hormiga";
      lbId = "lblopcion"
    }else if (actividad == 354) {
      opciones.opcion = "Señora Abeja";
      lbId = "lblopcion"
    }else if (actividad == 371) {
      opciones.opcion = "cúbico.";
      lbId = "lblopcion"
    }else if (actividad == 372) {
      opciones.opcion = "curiosos.";
      lbId = "lblopcion"
    }else if (actividad == 373) {
      opciones.opcion = "Eulato.";
      lbId = "lblopcion"
    }else if (actividad == 374) {
      opciones.opcion = "centímetros.";
      lbId = "lblopcion"
    }else if (actividad == 375) {
      opciones.opcion = "cantar.";
      lbId = "lblopcion"
    }else if (actividad == 376) {
      opciones.opcion = "enredarse";
      lbId = "lblopcion"
    }else if (actividad == 377) {
      opciones.opcion = "estornudado";
      lbId = "lblopcion"
    }else if (actividad == 378) {
      opciones.opcion = "se sacudía.";
      lbId = "lblopcion"
    }else if (actividad == 379) {
      opciones.opcion = "a otro lado.";
      lbId = "lblopcion"
    }else if (actividad == 3710) {
      opciones.opcion = "En medio";
      lbId = "lblopcion"
    }else if (actividad == 411) {
      opciones.opcion = "¡Tengo ganas de jugar con mi tesoro!";
      lbId = "lblopcion"
    }else if (actividad == 412) {
      opciones.opcion = "¡Este no es mi tesoro!";
      lbId = "lblopcion"
    }else if (actividad == 413) {
      opciones.opcion = "¡No estoy para adivinanzas!";
      lbId = "lblopcion"
    }else if (actividad == 414) {
      opciones.opcion = "¡Tesoro mío!";
      lbId = "lblopcion"
    }else if (actividad == 421) {
      opciones.espacio = "Abrió el cofre chiquitito de un soplido.";
      lbId = "lblespacio"
    }else if (actividad == 422) {
      opciones.espacio = "Abrió el cofre grande con un grito.";
      lbId = "lblespacio"
    }else if (actividad == 423) {
      opciones.espacio = "Abrió el cofre enorme de un cabezazo.";
      lbId = "lblespacio"
    }else if (actividad == 424) {
      opciones.espacio = "Abrió el cofre gigante con la pata de palo.";
      lbId = "lblespacio"
    }


    var sonido = true;

    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {

        //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim();
        //let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
		let palabra = aux //.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
        console.log(valor);
        console.log(palabra);
        if (palabra == valor) {
            let label = document.getElementById(lbId);			
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";			
			document.getElementById("btncheck").focus();
			document.getElementById('btncheck').classList.add("next");
			changeButton('btncheck',1);
			/*if(actividad == 20){
				document.getElementById('div1').style.display = 'none';				
				document.getElementById('div2').setAttribute("class","poema-respuesta");
				document.getElementById('div3').style.display = 'none';	
				document.getElementById('glo').setAttribute('disabled', '');	
			}*/

        } else if (palabra != "") {					
            let label = document.getElementById(lbId);		
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                //label.innerHTML = "Intenta otra vez";
				label.innerHTML = "";
                sonido = false;	
				label;
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.add("reset");
				changeButton('btncheck',2);
            }
			
        } else {
            let label = document.getElementById(lbId);		
            if (label != null) {
                console.log(label);
                label.classList.remove("success");
                label.classList.remove("danger");
                label.classList.add("info");
                label.innerHTML = "¡Sin hacer!";
                sonido = false;	
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.remove("reset");
            }
        }

    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function checked_silabas(actividad) {	
	const opciones = {};
  var lbId;

	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	

  if (actividad == 5) {
        opciones.nombre = "lobo";
        lbId = "lblnombre";
    } else if (actividad == 6) {
        opciones.nombre = "cabra";
        lbId = "lblnombre";
    } else if (actividad == 7) {
        opciones.nombre = "cabritos";
        lbId = "lblnombre";
    } else if (actividad == 8) {
        opciones.nombre = "molinero";
        lbId = "lblnombre";
    } else if (actividad == 9) {
        opciones.nombre = "almacenero";
        lbId = "lblnombre";
    } else if (actividad == 10) {
        opciones.nombre = "panadero";
        lbId = "lblnombre";
    }  else if (actividad == 221) {
      opciones.opcion = "ba";
      lbId = "lblopcion"
    } else if (actividad == 222) {
      opciones.opcion = "zo";
      lbId = "lblopcion"
    } else if (actividad == 223) {
      opciones.opcion = "pin";
      lbId = "lblopcion"
    } else if (actividad == 224) {
      opciones.opcion = "fan";
      lbId = "lblopcion"
    } else if (actividad == 225) {
      opciones.opcion = "dril";
      lbId = "lblopcion"
    } else if (actividad == 321) {
      opciones.opcion = "nicolás";
      lbId = "lblopcion"
    } else if (actividad == 322) {
      opciones.opcion = "avispón";
      lbId = "lblopcion"
    } else if (actividad == 322) {
      opciones.opcion = "avispón";
      lbId = "lblopcion"
    } else if (actividad == 323) {
      opciones.opcion = "chinche";
      lbId = "lblopcion"
    } else if (actividad == 331) {
      opciones.opcion = "hormiga";
      lbId = "lblopcion"
    } else if (actividad == 332) {
      opciones.opcion = "canasto";
      lbId = "lblopcion"
    } else if (actividad == 333) {
      opciones.opcion = "grillo";
      lbId = "lblopcion"
    } 
    var sonido = true;

    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {

        //me quedo con el valor de la opoción correspondiente.
        let valor = opciones[element.id];

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toLowerCase();
		    let palabra = aux 
        if (palabra == valor) {
            let label = document.getElementById(lbId);			
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";			
			document.getElementById("btncheck").focus();
			document.getElementById('btncheck').classList.add("next");
			changeButton('btncheck',1);
			if(actividad == 20){
				document.getElementById('div1').style.display = 'none';				
				document.getElementById('div2').setAttribute("class","poema-respuesta");
				document.getElementById('div3').style.display = 'none';	
				document.getElementById('glo').setAttribute('disabled', '');	
			}

        } else if (palabra != "") {					
            let label = document.getElementById(lbId);		
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                //label.innerHTML = "Intenta otra vez";
				label.innerHTML = "";
                sonido = false;	
				label;
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.add("reset");
				changeButton('btncheck',2);
            }
			
        } else {
            let label = document.getElementById(lbId);		
            if (label != null) {
                console.log(label);
                label.classList.remove("success");
                label.classList.remove("danger");
                label.classList.add("info");
                label.innerHTML = "¡Sin hacer!";
                sonido = false;	
				document.getElementById('btncheck').classList.remove("next");
				document.getElementById('btncheck').classList.remove("reset");
            }
        }

    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function check_radios(actividad) {

    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbId;
	
	if (actividad === undefined){
		actividad = localStorage.getItem('act')
	}else{
		localStorage.setItem('act',actividad);			
	}	
	
    if (actividad == 181) {
        opciones.opcion = "recomendacion";
    } if (actividad == 182) {
      opciones.opcion = "enganio";
    } if (actividad == 183) {
      opciones.opcion = "rescate";
    } else if (actividad == 12) {
        opciones.opcion = "SAPITO";
    } else if (actividad == 13) {
        opciones.opcion = "TORTUGA";
	  } else if (actividad == 14) {
        opciones.opcion = "CANGREJO";
    } else if (actividad == 15) {
        opciones.opcion = "MOSCA";
    } else if (actividad == 999) {
        opciones.opcion = "RANA";
    } else if (actividad == 999) {
        opciones.opcion = "CARACOL";
    }else if (actividad == 361) {
      opciones.opcion = "busqueda";
    }else if (actividad == 362) {
      opciones.opcion = "recomendacion";
    }else if (actividad == 363) {
      opciones.opcion = "busqueda";
    }else if (actividad == 441) {
      opciones.opcion = "pequenito";
    }else if (actividad == 442) {
      opciones.opcion = "pisando";
    }else if (actividad == 443) {
      opciones.opcion = "fastidiado";
    }


    var inputs = document.getElementsByTagName("input");

    Array.from(inputs).forEach(function(element) {
      

        if (element.type == "radio") {
            if (element.checked == true) {
                isChecked = true;

                if (element.value == opciones.opcion) {
                    let label = document.getElementById("lblopcion");
                    label.classList.remove("danger");
                    label.classList.remove("info");
                    label.classList.add("success");
                    label.innerHTML = "¡Muy bien!";
					document.getElementById("btncheck").focus();
					changeButton('btncheck',1);
                } else {
                    let label = document.getElementById("lblopcion");
                    label.classList.add("danger");
                    label.classList.remove("success");
                    label.classList.remove("info");
                    label.classList.add("info");
                    document.querySelector("label[for='"+element.id+"']").parentNode.classList.add('wrong-answer'); 
                    //label.innerHTML = "Intenta otra vez";
				    label.innerHTML = "";
					changeButton('btncheck',2);
                    sonido = false
                }
            }
        }
        if (isChecked == false) {
            let label = document.getElementById("lblopcion");
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            label.innerHTML = "¡Sin hacer!";
            sonido = false;	
        }
    });
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }


}

function checked_opciones(actividad, number) {
    const opciones = {};
    var sonido = true;
    var isChecked = false;
    var lbId;
	  var count = 0;

    if (actividad === undefined){
      actividad = localStorage.getItem('act')
    }else{
      localStorage.setItem('act',actividad);			
    }	  

    if (actividad == 10) {
        opciones.opcion1 = "LOBITO";
        opciones.opcion2 = "CORDEROS";
    }else if (actividad == 102) {
      opciones.opcion1 = "BRUJA";
      opciones.opcion2 = "HONRADO";
    }else if (actividad == 103) {
      opciones.opcion1 = "MUNDO";
    }else if (actividad == 271) {
      opciones.opcion1 = "PECECITO";
      opciones.opcion1 = "PECERA";
    }
    else if (actividad == 272) {
      opciones.opcion1 = "RATONCITO";
      opciones.opcion2 = "RATONERA";
    }else if (actividad == 202) {
      opciones.opcion1 = "RATONES CON BONETES ROJOS";
      opciones.opcion2 = "RATONES EN ZAPATILLAS";
    }else if (actividad == 203) {
      opciones.opcion1 = "Y DESPUÉS SE DAN UN BESO";
      opciones.opcion2 = "EN LA CACEROLA";
    }else if (actividad == 204) {
      opciones.opcion1 = "CON UN CUADERNO Y UNA VELA";
      opciones.opcion2 = "Y EL RABO DETRÁS";
    }else if (actividad == 300) {
      opciones.opcion1 = "QUE YO PONGO EL PAN!";
      opciones.opcion2 = "QUE YO PONGO EL VINO!";
    }else if (actividad == 301) {
      opciones.opcion1 = "YO PONGO LA TERNERA!";
      opciones.opcion2 = "YO SERÉ LA MADRINA!";
    }else if (actividad == 302) {
      opciones.opcion1 = "YO SERÉ EL PADRINO!";
    }else if (actividad == 431) {
      opciones.opcioncofre = "UN COFRE CHIQUITITO";
      opciones.opcionlugar = "EN LA ARENA";
      opciones.opcionmanera = "DE UN SOPLIDO.";
    }else if (actividad == 432) {
      opciones.opcioncofre = "UN COFRE BASTANTE GRANDE";
      opciones.opcionlugar = "EN LA RAMA DE UNA PALMERA";
      opciones.opcionmanera = "DE UN GRITO.";
    }else if (actividad == 433) {
      opciones.opcioncofre = "UN COFRE ENORME";
      opciones.opcionlugar = "EN LA SELVA";
      opciones.opcionmanera = "DE UN CABEZAZO.";
    }else if (actividad == 434) {
      opciones.opcioncofre = "UN COFRE GIGANTE";
      opciones.opcionlugar = "EN LA MONTAÑA DE CARACOLES";
      opciones.opcionmanera = "DE UNA PATADA.";
    }

    var inputs = document.getElementsByTagName("input");    
    Array.from(inputs).forEach(function(element) {      
        let label = document.getElementById("lbl" + element.id);
        console.log(label)
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.remove("success");

        //cheque si el valor de la opción es igual al valor ingresado
        let aux = element.value.trim().toUpperCase();
        //let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        let palabra = aux.normalize("NFD")
        let existe = existeValor(actividad, element);
        if (existe == false) {
            sonido = false;			
        }else{
			if (element.value.trim() != ""){
				count += 1;
			}			
		}
    });
    if (sonido) {
        getSound("correct");
		if (count == number ){			
			changeButton('btncheck',1);
		}
    } else {
        getSound("error");
    }

}

if (window.addEventListener) {
  // Agregar un escuchador de evento para antes de la descarga
  window.addEventListener('beforeunload', function() {
      // Borrar el contenido de la variable de array en localStorage
      localStorage.removeItem("miArray");
  });
} 


// Recuperar el array del almacenamiento local
var arrayGuardadoString = localStorage.getItem("miArray");

// Verificar si el array recuperado es nulo o no existe
if (arrayGuardadoString) {
    // Si existe, analizarlo como JSON para obtener el array
    var miArray = JSON.parse(arrayGuardadoString);
} else {
    // Si no existe, inicializar un nuevo array vacío
    var miArray = [];
}

function existeValor(actividad, element) {
    const opciones = {};
    var retorno = false;
    if (actividad == 10) {
        opciones.opcion1 = "LOBITO";
        opciones.opcion2 = "CORDEROS";
    }else if (actividad == 102) {
      opciones.opcion1 = "BRUJA";
      opciones.opcion2 = "HONRADO";
    }else if (actividad == 103) {
      opciones.opcion1 = "MUNDO";
    }else if (actividad == 271) {
      opciones.opcion1 = "PECECITO";
      opciones.opcion2 = "PECERA";
    }
    else if (actividad == 272) {
      opciones.opcion1 = "RATONCITO";
      opciones.opcion2 = "RATONERA";
    }else if (actividad == 202) {
      opciones.opcion1 = "RATONES CON BONETES ROJOS";
      opciones.opcion2 = "RATONES EN ZAPATILLAS";
    }else if (actividad == 203) {
      opciones.opcion1 = "Y DESPUÉS SE DAN UN BESO";
      opciones.opcion2 = "EN LA CACEROLA";
    }else if (actividad == 204) {
      opciones.opcion1 = "CON UN CUADERNO Y UNA VELA";
      opciones.opcion2 = "Y EL RABO DETRÁS";
    }else if (actividad == 300) {
      opciones.opcion1 = "QUE YO PONGO EL PAN!";
      opciones.opcion2 = "QUE YO PONGO EL VINO!";
    }else if (actividad == 301) {
      opciones.opcion1 = "YO PONGO LA TERNERA!";
      opciones.opcion2 = "YO SERÉ LA MADRINA!";
    }else if (actividad == 302) {
      opciones.opcion1 = "YO SERÉ EL PADRINO!";
    }else if (actividad == 431) {
      opciones.opcioncofre = "UN COFRE CHIQUITITO";
      opciones.opcionlugar = "EN LA ARENA";
      opciones.opcionmanera = "DE UN SOPLIDO.";
    }else if (actividad == 432) {
      opciones.opcioncofre = "UN COFRE BASTANTE GRANDE";
      opciones.opcionlugar = "EN LA RAMA DE UNA PALMERA";
      opciones.opcionmanera = "DE UN GRITO.";
    }else if (actividad == 433) {
      opciones.opcioncofre = "UN COFRE ENORME";
      opciones.opcionlugar = "EN LA SELVA";
      opciones.opcionmanera = "DE UN CABEZAZO.";
    }else if (actividad == 434) {
      opciones.opcioncofre = "UN COFRE GIGANTE";
      opciones.opcionlugar = "EN LA MONTAÑA DE CARACOLES";
      opciones.opcionmanera = "DE UNA PATADA.";
    }

    let aux = element.value.trim().toUpperCase();
  //  let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	//let palabra = aux.normalize("NFD").replace(/[\u0300-\u036f\.?:;!¡,]/g, "");
  let palabra = aux
   
  
    for (var i = 0 in opciones) {
        if (palabra.toLowerCase() === opciones[i].toLowerCase()) {
            //claves.push(opciones[i])
            console.log(element.classList.contains('incorrecto'))
            if(element.classList.contains('incorrecto')){
              element.classList.remove('incorrecto')
            }
            element.classList.add('correct')
            let label = document.getElementById("lbl" + element.id);
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            miArray.push(i)
            // Convertir el array a una cadena de texto y guardarla en localStorage
            localStorage.setItem("miArray", JSON.stringify(miArray));
            if (miArray.includes("opcion1") && miArray.includes("opcion2") || miArray.includes("opcioncofre") && miArray.includes("opcionlugar") && miArray.includes("opcionmanera")) {
              changeButton('btncheck',1);
            } else {
              return true;
            }
            
        } else if (palabra != "") {
            let label = document.getElementById("lbl" + element.id);
            if(!element.classList.contains('correcto')){
              element.classList.add('incorrecto')
            }
            
            if (label != null) {
                label.classList.remove("success");
                label.classList.remove("info");
                label.classList.add("danger");
                label.innerHTML = "Intenta otra vez";
                retorno = false;
                changeButton('btncheck',2);
            }
        } else {
            let label = document.getElementById("lbl" + element.id);
            element.classList.add('nodone')
            label.classList.remove("success");
            label.classList.remove("danger");
            label.classList.add("info");
            sonido = false;
            label.innerHTML = "¡Sin hacer!";
            
        }
    }
    return retorno;
}

function showImage(actividad, element) {
    const opciones = {};
    var label;
    var sonido = false;
    var correcto = false;
    if (actividad == 19) {
        opciones.opcion1 = "SAPO";
        opciones.opcion2 = "CANGREJO"
    }

    for (var i = 0 in opciones) {

        if (element.innerHTML == opciones[i]) {
            let imagen = document.getElementById("img" + element.id);
            imagen.classList.remove("hide");
            sonido = true;
            correcto = true;
            label = document.getElementById("lblResult");
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";
            break;
        }
    }

    if (correcto == false) {
        let countImg = document.getElementsByClassName("hide").length;
        if (countImg != 0) {
            label = document.getElementById("lblResult");
            label.classList.remove("success");
            label.classList.remove("info");
            label.classList.add("danger");
            label.innerHTML = "Intenta otra vez";
        }

    }
    if (sonido) {
        getSound("correct");
    } else {
        getSound("error");
    }
}

function limpiarCampos(){	
	
	let selected = document.getElementsByTagName("input");
	
	Array.from(selected).forEach(function(element) {		
		
		 if (element.type == "radio") {			
			
      if (element.checked == true) {
			
				element.checked = false;
        document.querySelector("label[for='"+element.id+"']").parentNode.classList.remove('wrong-answer'); 
			}
		 }else if (element.type == "text" && element.classList.contains('incorrect')){
        element.classList.remove('incorrect')
        element.value = "";
		 }else if (element.type == "text" && !element.classList.contains('correct')){
      element.value = "";
      }
	});	
	
	let actividad = localStorage.getItem('act');
	if (actividad >= 11 && actividad <= 15 || actividad >=181 && actividad <= 183 || actividad >=361 && actividad <= 365 || actividad >=441 && actividad <= 443){
		document.getElementById('btncheck').onclick = function() {check_radios()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}else if(actividad == 10 || actividad == 102 || actividad == 103 || actividad == 431 || actividad == 432 || actividad == 433 || actividad == 434){
		document.getElementById('btncheck').onclick = function() {checked_opciones()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}else{
    console.log(actividad)
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
	}
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').classList.remove("next");
		

}

function setValue(input,silaba, unaSilaba){
	  var cantidadLetras = 0
    var unaSilabaContent
    console.log(unaSilaba)
    var silabas = Array.from(document.querySelectorAll('.opc-inline-click li'))
    silabas.forEach(sila =>{
      cantidadLetras += sila.textContent.trim().length;
    } )

    if( unaSilaba == true) {
      unaSilabaContent = document.querySelector('input.opc.corto')
    }

		let palabra = document.getElementById(input).value;
		palabra = palabra + silaba;
    var palabraCantidad = palabra.trim().length;
   
    if(palabraCantidad <= cantidadLetras && unaSilaba !== true) {
     
      document.getElementById(input).value = palabra;
    } else if ( unaSilaba == true && unaSilabaContent.value === ''){
      console.log(unaSilabaContent.value)
      document.getElementById(input).value = palabra;
    }else {
      return
    }
		
}

function getSound(type) {
    var beat;
    if (type == "correct") {
        beat = new Audio('../sonidos/correct-ding.mp3');
    } else {
        beat = new Audio('../sonidos/incorrecto.mp3');
    }

    beat.play();
}

function compareList(actividad){	
  var retorno = true;
  var sonido = true;
  var lbId;
  var optSel = 0;
  var optTot;
  var cant= 0;	
  
  if (actividad === undefined){
    actividad = localStorage.getItem('act')
  }else{
    localStorage.setItem('act',actividad);			
  }		
  
  console.log("act " + actividad);
    if (actividad == 7) {
    
      var opciones =  ["SUS PATAS SON NEGRAS", "LE GUSTA ENGAÑAR", "TIENE LA VOZ RONCA", "ES ASTUTO","ES MALVADO"];			
        lbId = "lblopcion";
    optTot = 5
    } else if (actividad == 8) {
    
      var opciones =  ["SABE COSER", "ES VALIENTE", "SUS PATAS SON BLANCAS", "ES MUY PROTECTORA","TIENE LA VOZ FINA Y MELODIOSA"];			
        lbId = "lblopcion";
    optTot = 5
    } else if (actividad == 281) {
       var opciones =  ["HORNERO", "DEDAL"];
        lbId = "lblopcion";		
      optTot = 2		
    } else if (actividad == 282) {
       var opciones =  ["CONSEJO", "BICICLETA"];
        lbId = "lblopcion";		
      optTot = 2		
    } else if (actividad == 283) {
    var opciones =  ["COLOR", "OLOROSO"];
     lbId = "lblopcion";		
     optTot = 2		
    }else if (actividad == 999) {
       var opciones =  ["PEJERREY", "BAGRE"];
        lbId = "lblopcion";		
      optTot = 2	
    }
  
  
  let selected = document.getElementsByTagName("input");
  console.log(selected);
  Array.from(selected).forEach(function(element) {
     if (element.type == "radio") {			
            if (element.checked == true) {
         optSel += 1;
         console.log("element.value " +element.value);
         console.log("opciones " + opciones);
        let aux = !(opciones.includes(element.value.trim().toUpperCase())) ;
        if(aux == true){
          console.log("no encuentra " +element.value);
          //document.querySelector("label[for='"+element.id+"']").style.color = "red ";	
          document.querySelector("label[for='"+element.id+"']").parentNode.classList.add('wrong-answer');	
          retorno =  false;					
        }else{
          cant += 1;
          document.querySelector("label[for='"+element.id+"']").style.color = "black";	
        }					
      }
      
     }
  });

  //aca
  if(optSel == optTot && retorno){
    let label = document.getElementById("lblopcion");
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.add("success");
        label.innerHTML = "¡Muy bien!";
    document.getElementById('btncheck').classList.add("next");
    document.getElementById("btncheck").focus();
    changeButton('btncheck',1);
  }else if (optSel != 0){
    let label = document.getElementById("lblopcion");
        label.classList.add("danger");
        label.classList.remove("success");
        label.classList.remove("info");
        label.classList.add("info");
        //label.innerHTML = "Intenta otra vez";
    label.innerHTML = "";
        sonido = false
    document.getElementById('btncheck').classList.remove("next");
    document.getElementById('btncheck').classList.add("reset");
    changeButton('btncheck',2);
    
  }else{
  let label = document.getElementById("lblopcion");
      label.classList.remove("success");
      label.classList.remove("danger");
      label.classList.add("info");
      label.innerHTML = "¡Sin hacer!";
      sonido = false;	
  document.getElementById('btncheck').classList.remove("next");
  document.getElementById('btncheck').classList.remove("reset");
  }
  if (sonido) {
      getSound("correct");
  } else {
      getSound("error");
  }

  //control para mostar mensaje Falta encontrar un animal
  if (optTot - 1  == cant){
  console.log(cant);
    let label = document.getElementById("lblopcion");
        label.classList.add("danger");
        label.classList.remove("success");
        label.classList.remove("info");        
        label.innerHTML = "Falta encotrar una cualidad";	
  }
}
/*parametros: 1 = id del boton checked, 
				    2 = opcion 1 igual correcto, 2 igual incorrecto
					3 = comportamiento 1 igual no limpia input, 2 igual limpia input
*/

function compareListTab(actividad, optCorr){	
  var retorno = true;
  var sonido 
  var lbId;
  var optSel = 0;
  var optTot;
  var cant= 0;	
  
  if (actividad === undefined){
    actividad = localStorage.getItem('act')
  }else{
    localStorage.setItem('act',actividad);			
  }		
  
  console.log("act " + actividad);
    if (actividad == 7) {
    
      var opciones =  ["SUS PATAS SON NEGRAS", "LE GUSTA ENGAÑAR", "TIENE LA VOZ RONCA", "ES ASTUTO","ES MALVADO"];			
        lbId = "lblopcion";
    optTot = 6
    } else if (actividad == 8) {
    
      var opciones =  ["SABE COSER", "ES VALIENTE", "SUS PATAS SON BLANCAS", "ES MUY PROTECTORA","TIENE LA VOZ FINA Y MELODIOSA"];			
        lbId = "lblopcion";
    optTot = 6
    } else if (actividad == 281) {
       var opciones =  ["HORNERO", "DEDAL"];
        lbId = "lblopcion";		
      optTot = 2		
    } else if (actividad == 282) {
       var opciones =  ["CONSEJO", "BICICLETA"];
        lbId = "lblopcion";		
      optTot = 2		
    } else if (actividad == 283) {
    var opciones =  ["COLOR", "OLOROSO"];
     lbId = "lblopcion";		
     optTot = 2		
    }else if (actividad == 999) {
       var opciones =  ["PEJERREY", "BAGRE"];
        lbId = "lblopcion";		
      optTot = 2	
    } 
  
  
  let selected = document.getElementsByTagName("input");
  let label = document.getElementById("lblopcion");
  console.log(selected);
  Array.from(selected).forEach(function(element) {
     if (element.type == "radio") {			
            if (element.checked == true) {
         optSel += 1;
         console.log("element.value " +element.value);
         console.log("opciones " + opciones);
        let aux = !(opciones.includes(element.value.trim().toUpperCase())) ;
        if(aux == true){
          console.log("no encuentra " +element.value);
          //document.querySelector("label[for='"+element.id+"']").style.color = "red ";	
          document.querySelector("label[for='"+element.id+"']").parentNode.classList.add('wrong-answer');	
          sonido = false
          retorno =  false;					
        }else{
          cant += 1;
          sonido = true
          document.querySelector("label[for='"+element.id+"']").style.color = "black";	
        }					
      }
      if(optTot == optSel ) {
        
            label.classList.add("danger");
            label.classList.remove("success");
            label.classList.remove("info");        
            label.innerHTML = "Llegaste al número máximo de opciones a elegir.";
            //document.querySelector("label[for='"+element.target.id+"']").parentNode.classList.remove('wrong-answer'); 
            
            if(sonido) {
              sonido = false
            }else {
              sonido = false
            }
            element.checked = false;	
            return
      }
      
     }
  });

  if(cant == optCorr) {
    let label = document.getElementById("lblopcion");
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.add("success");
        label.innerHTML = "¡Muy bien!";
    document.getElementById('btncheck').classList.add("next");
    document.getElementById("btncheck").focus();
    changeButton('btncheck',1);
  }

  

  //aca
  /*if(optSel == optTot && retorno){
    let label = document.getElementById("lblopcion");
        label.classList.remove("danger");
        label.classList.remove("info");
        label.classList.add("success");
        label.innerHTML = "¡Muy bien!";
    document.getElementById('btncheck').classList.add("next");
    document.getElementById("btncheck").focus();
    changeButton('btncheck',1);
  }else if (optSel != 0){
    let label = document.getElementById("lblopcion");
        label.classList.add("danger");
        label.classList.remove("success");
        label.classList.remove("info");
        label.classList.add("info");
        //label.innerHTML = "Intenta otra vez";
    label.innerHTML = "";
        
    document.getElementById('btncheck').classList.remove("next");
    document.getElementById('btncheck').classList.add("reset");
    //changeButton('btncheck',2);
    
  }else{
  let label = document.getElementById("lblopcion");
      label.classList.remove("success");
      label.classList.remove("danger");
      label.classList.add("info");
      label.innerHTML = "¡Sin hacer!";
      sonido = false;	
  document.getElementById('btncheck').classList.remove("next");
  document.getElementById('btncheck').classList.remove("reset");
  }*/
  if (sonido) {
      getSound("correct");
  } else {
      getSound("error");
  }

  
}



function changeButton(button, opcion){	

	document.getElementById('btncheck').classList.remove("next");
	document.getElementById('btncheck').classList.remove("reset");
	if(opcion == 1){
		let btn = document.getElementById(button).onclick = function() {clickSiguiente()};	
		document.getElementById(button).innerHTML = "Siguiente";
		document.getElementById(button).style.backgroundColor='#00A88A'	
		document.getElementById('btncheck').classList.add("next");		
	}else if(opcion == 2){
		
			document.getElementById(button).innerHTML = "Intenta otra vez";	
			document.getElementById(button).style.backgroundColor='#aa2c24'		
			let btn = document.getElementById(button).onclick = function() {limpiarCampos()};				
			document.getElementById('btncheck').classList.add("reset");		
	}
	
}

function clickSiguiente(){
	 let ele = document.getElementById("Siguiente");
	 if (ele != null){
		 document.getElementById("Siguiente").click();	 
	 }	
}

function check_button(actividad,ele,lbl){
	localStorage.setItem('act',actividad);
  if(actividad == 5 || actividad == 6 || actividad == 7 || actividad == 8 || actividad == 9 || actividad == 10 || actividad == 221 || actividad == 222 || actividad == 223 || actividad == 224 || actividad == 225 || actividad == 321 || actividad == 322 || actividad == 323 || actividad == 331 || actividad == 332 || actividad == 333)
  {
    document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').onclick = function() {checked_silabas()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
		document.getElementById(lbl).innerHTML = "";
  }	else {
    document.getElementById('btncheck').classList.remove("next");
		document.getElementById('btncheck').classList.remove("reset");
		document.getElementById('btncheck').onclick = function() {checked()};		
		document.getElementById('btncheck').innerHTML = "Chequear";
		document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
    if(lbl){
      document.getElementById(lbl).innerHTML = "";
    }
		
  }
}

function radios_count(){
  let count =  0;
  let selected = document.getElementsByTagName("input");	
  
  Array.from(selected).forEach(function(element) {
     if (element.type == "radio") {			
            if (element.checked == true) {
         count += 1;								
      }			
     }
  });
  
  return count;	
  }  

//metodo encargado de check uncheck y control de cantidad checked
function check_uncheck_radios(actividad,ele,cant_opt){
  localStorage.setItem('act',actividad);	
  console.log("actividad " + actividad);
   if (actividad == 7) {		
       var opciones =  ["VALIENTE", "DEFIENDE A LOS ANIMALES", "BUEN HERMANO", "OBEDIENTE","INTELIGENTE", "MUY ASTUTO"];
    } else if (actividad == 8) {
  
      var opciones =  ["SABE COSER", "ES VALIENTE", "SUS PATAS SON NEGRAS", "ES MUY PROTECTORA","TIENE LA VOZ FINA Y MELODIOSA"];			
        lbId = "lblopcion";
    optTot = 5	
  } else if (actividad == 181) {
    var opciones =  ["PIANO"];			
    lbId = "lblopcion";
    optTot = 1  			      		    
    }  else if (actividad == 281) {
  
      var opciones =  ["HORNERO", "DEDAL"];			
        lbId = "lblopcion";
      optTot = 2  			      		    
      } else if (actividad == 282) {		
       var opciones =  ["CONSEJO", "BICICLETA"];
       optTot = 2      
    } else if (actividad == 283) {		
      var opciones =  ["COLOR", "OLOROSO"];
      optTot = 2      
   } else if (actividad == 999) {
       var opciones =  ["PATO", "CARDENAL"];     
  } else if (actividad == 999) {
       var opciones =  ["PEJERREY", "BAGRE"];      
    } 
  
    let label = document.getElementById("lblopcion");
    label.classList.add("danger");
    label.classList.remove("success");
    label.classList.remove("info");        
    label.innerHTML = "";	
    let count = radios_count();	

    
  if (count <= cant_opt){
    
    if (ele.getAttribute('ischecked') === "false"){	
      ele.checked = true;
      ele.setAttribute('ischecked', "true") ;	
        
    let aux = !(opciones.includes(ele.value.trim().toUpperCase()));		
      
    }else if(ele.getAttribute('ischecked') === "true"){		
      ele.checked = false;
      ele.setAttribute('ischecked', 'false') ;
      document.querySelector("label[for='"+ele.id+"']").style.color = "black";					
    }	
  }else{
    console.log('llegaste al limite')
    let label = document.getElementById("lblopcion");
        label.classList.add("danger");
        label.classList.remove("success");
        label.classList.remove("info");        
        label.innerHTML = "Llegaste al número máximo de opciones a elegir.";	
    ele.checked = false;		
  }
  
  //cada vez que selecciona o desselecciona una opcion le pongo el btn en chequear
    document.getElementById('btncheck').onclick = function() {compareList()};		
    document.getElementById('btncheck').innerHTML = "Chequear";
    document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
    document.getElementById('btncheck').classList.remove("next");
    document.getElementById('btncheck').classList.remove("reset");	
  }

function selectText(ele,id){
	input = document.getElementById(id).value =  ele.innerText;
    
		//cada vez que selecciona o desselecciona una opcion le pongo el btn en chequear		
		let text = document.getElementById('btncheck').innerText;
		if(!text.includes("Chequear")){
			actividad = localStorage.getItem('act')
			document.getElementById('btncheck').onclick = function() {checked(actividad)};		
			document.getElementById('btncheck').innerHTML = "Chequear";
			document.getElementById('btncheck').style.backgroundColor='#2E61F6'	
			document.getElementById('btncheck').classList.remove("next");
			document.getElementById('btncheck').classList.remove("reset");	
		}	
}



document.addEventListener("DOMContentLoaded", function(event) {
  let menuIndiceFooter = document.getElementById("menuButton")
  let menuIndiceHeader = document.getElementById("submenuButton")
  let menuIndiceHeaderItems = Array.from(document.querySelectorAll('#submenu li a'))

  console.log(menuIndiceHeaderItems)

  if(menuIndiceFooter) {
    menuIndiceFooter.addEventListener('click', selectMenuItem)
  }

  if(menuIndiceHeader) {
    menuIndiceHeader.addEventListener('click', selectMenuItem)
  }

  // Obtener todos los elementos li dentro del ul
   const listItemsHeader = document.querySelectorAll('#submenu li a');
   const listItemsFooter = document.querySelectorAll('#menu li a');
   console.log(listItemsFooter )

   listItemsHeader.forEach((li) => {
    
    li.addEventListener('blur', function (event) {
      // Verificar si el elemento que perdió el foco es el último li del ul
      const isLastLiHeaderMenu = this === listItemsHeader[listItemsHeader.length - 1];
      
      if (isLastLiHeaderMenu) {
        document.getElementById("submenu").style.display = "none";
      }
    });
  });


   listItemsFooter.forEach((li) => {
    
    li.addEventListener('blur', function (event) {
      const isLastLiFooterMenu = this === listItemsFooter[listItemsFooter.length - 1];

      

      if (isLastLiFooterMenu) {
        document.getElementById("menu").style.display = "none";
        console.log('ultimo')
      }

    });
  });
});

function selectMenuItem(index) {
  if(index.target.id === 'menuButton'){
    document.getElementById("menu").style.display = "block";
    if (index instanceof Element) {
      index.setAttribute('atributo', 'valor');
    }
  }else if(index.target.id === 'submenuButton') {
    document.getElementById("submenu").style.display = "block";
    //index.setAttribute('aria-expanded', 'true');
  }
}

function handleSpacebar(event , actividad, optCorr) {
  if (event.keyCode === 32 && event.type === "keydown") {
      
      
      if (event.target.checked) {
          // Desmarcar el radio button
          event.target.checked = false;
          document.querySelector("label[for='"+event.target.id+"']").parentNode.classList.remove('wrong-answer'); 
          let label = document.getElementById("lblopcion");
          label.innerHTML = "";
      } else {
          // Marcar el radio button
          
          event.target.checked = true;
          compareListTab(actividad, optCorr)
      }

      // Prevenir el comportamiento predeterminado de la barra espaciadora (scroll)
      event.preventDefault();
  }
}


function verificarLetras(actividad, letrasCantidad) {
   var respuestaUsuario = [];
   var respuestaCorrecta = [];
   var letrasElements = [];
   
    
    var inputs = document.querySelectorAll(".una_letra");

    if(actividad === 421){
      respuestaCorrecta = ["a", "a", "e", "o", "i", "a", "e"]
    }
    
    // Iterar sobre cada input y concatenar su valor
    inputs.forEach(function(input) {
      letrasElements.push(input);
      respuestaUsuario.push(input.value.toLowerCase());
      
    });

    console.log(respuestaUsuario)
    console.log(respuestaUsuario)
  
  
  // Inicializamos una variable para almacenar el HTML de la respuesta
  var respuestaHTML = "";
  var letrasCorrectas = 0;
  
  // Iteramos sobre cada letra de la respuesta del usuario y la comparamos con la respuesta correcta
  for (var i = 0; i < respuestaUsuario.length; i++) {
      var letraUsuario = respuestaUsuario[i];
      var letraCorrecta = respuestaCorrecta[i];
      var letra = letrasElements[i]
      letra.classList.remove('correct')
      letra.classList.remove('error')
      
      // Verificamos si la letra del usuario coincide con la letra correcta
      if (letraUsuario === letraCorrecta) {
          // La letra es correcta, la marcamos en verde
          console.log(letra)
          letra.classList.add('correct')
          letrasCorrectas += 1
      } else {
          // La letra es incorrecta, la marcamos en rojo
          letra.classList.add('error')
      }
      
      if(letrasCantidad == letrasCorrectas) {
        let label = document.getElementById('lblopcion');			
            label.classList.remove("danger");
            label.classList.remove("info");
            label.classList.add("success");
            label.innerHTML = "¡Muy bien!";			
			document.getElementById("btncheck").focus();
			document.getElementById('btncheck').classList.add("next");
			changeButton('btncheck',1);
      }
  }
  
}

