

document.onkeydown = (e) => { 
  e = e || window.event;
  const focusedElement = document.activeElement;
  let ele;
 
  if (e.keyCode === 13  ) {
    if(focusedElement.classList.contains('dropbtn')){
      ele = document.getElementById("menuButton");	
      selectMenuItem(index)
      console.log(ele)
    }else if(focusedElement.id === 'submenuButton'){
      ele = document.getElementById("submenuButton");
      selectMenuItem(index)
      console.log(ele)
    }else if(document.activeElement.tagName === 'INPUT'){
      ele = document.getElementById("btncheck");
    }else {
      console.log('nada')
    }
    
    if (ele != null){
      ele.click();	
      //se retorna false porque sino toma el evento por defecto del enter que es refresh de la página.
      return false;
    }
  } else if (e.keyCode === 37) {
	 let foco =	document.activeElement;		
	 let ele = document.getElementById("Anterior");
	 if (ele != null && foco.type != "text"){
		 document.getElementById("Anterior").click()
	 }	
  } else if (e.keyCode === 39) {
	 let foco =	document.activeElement;		
	 let ele = document.getElementById("Siguiente");
	 	 if (ele != null && foco.type != "text"){
		 document.getElementById("Siguiente").click();	 
	 }		    
  }
}

