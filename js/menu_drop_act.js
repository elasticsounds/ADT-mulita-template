// lee los <li>
var sublistItems = document.querySelectorAll(".dropup-content-act li");
// Set up a counter to keep track of which <li> is selected
var subcurrentLI = 0;


document.getElementById("submenuButton").addEventListener('mouseover', handleAriasubexpanded);
document.getElementById("submenuButton").addEventListener('mouseleave', setsubButton);
document.getElementById("submenu").addEventListener('mouseleave', setsubButton);
document.getElementById("submenu").addEventListener('mouseover', setsubExpand);

function handleAriasubexpanded() {
    let subexpanded =   document.getElementById("submenuButton").getAttribute('aria-expanded');	 
	 if(subexpanded === 'false'){
		   //está oculto: lo muestro
		    document.getElementById("submenu").style.display = "";
			document.getElementById("submenuButton").setAttribute('aria-expanded', 'true');
	  }else{
		  //está visible: lo ocutlo
		   document.getElementById("submenu").style.display = "none";
		   document.getElementById("submenuButton").setAttribute('aria-expanded', 'false');
	  }
  
 }
	
function setsubButton(){
	let subexpanded =   document.getElementById("submenuButton").getAttribute('aria-expanded');	
	//se controla que si navega con flechas y se hace un mouseleave con el cursor cierre el menú y setee el subexpanded
	if(subexpanded==='false'){
		document.getElementById("submenu").style.display = "none";
	}else{
		document.getElementById("submenu").style.display = "";
	}		
	   document.getElementById("submenuButton").setAttribute('aria-expanded', 'false');	  
}

function setsubExpand(){
	document.getElementById("submenuButton").setAttribute('aria-expanded', 'true');
}


document.addEventListener("keydown", function(event){	  

  var submenu = document.getElementById("submenu");
  
  switch(event.keyCode){
	  
    case 38: // Up arrow    
		  event.preventDefault();
		  document.getElementById("submenuButton").setAttribute('aria-expanded', 'true');
	      submenu.removeAttribute("hidden", "");
          submenu.style.display = "block";
          if (!submenu.hidden) {
            const item = submenu.querySelector('li a');            
            item.focus();            
          }
          
      // Remove the highlighting from the previous element
      sublistItems[subcurrentLI].classList.remove("drop-indice");      
      subcurrentLI = subcurrentLI > 0 ? --subcurrentLI : 0;     // Decrease the counter      
      sublistItems[subcurrentLI].classList.add("drop-indice");   // Highlight the new element
	  sublistItems[subcurrentLI].focus();  
      break;
	  
    case 40: // Down arrow
	 event.preventDefault();
	 document.getElementById("submenuButton").setAttribute('aria-expanded', 'true');
      // Remove the highlighting from the previous element
      sublistItems[subcurrentLI].classList.remove("drop-indice");      
      subcurrentLI = subcurrentLI < sublistItems.length-1 ? ++subcurrentLI : sublistItems.length-1; // Increase counter 
      sublistItems[subcurrentLI].classList.add("drop-indice");       // Highlight the new element
	  sublistItems[subcurrentLI].focus();
      break;    
	  
	 case 13: //enter
	 
	     let subexpanded =   document.getElementById("submenuButton").getAttribute('aria-expanded');	 
			if(subexpanded === 'true'){   
			    event.preventDefault();
				sublistItems[subcurrentLI].focus();  
				let id = sublistItems[subcurrentLI].children[0].id;
				document.getElementById(id).click();
			}      
	    break;
		
	 case 27: 
	   event.preventDefault();
	   handleAriasubexpanded();	  
	   break;
	 
     default:
     break;  
  } 
});
