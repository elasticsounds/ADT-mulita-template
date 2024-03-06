// lee los <li>
var listItems = document.querySelectorAll(".dropup-content li");
// Set up a counter to keep track of which <li> is selected
var currentLI = 0;
// Initialize first li as the selected (focused) one:
//listItems[currentLI].classList.add("drop-focus");

document.getElementById("menuButton").addEventListener('mouseover', handleAriaExpanded);
document.getElementById("menuButton").addEventListener('mouseleave', setButton);
document.getElementById("menu").addEventListener('mouseleave', setButton);
document.getElementById("menu").addEventListener('mouseover', setExpand);

function handleAriaExpanded() {
    let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	 
	 if(expanded === 'false'){
		   //está oculto: lo muestro
		    document.getElementById("menu").style.display = "";
			document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
	  }else{
		  //está visible: lo ocutlo
		   document.getElementById("menu").style.display = "none";
		   document.getElementById("menuButton").setAttribute('aria-expanded', 'false');
	  }
  
 }
	
function setButton(){
	let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	
	//se controla que si navega con flechas y se hace un mouseleave con el cursor cierre el menú y setee el expanded
	if(expanded==='false'){
		document.getElementById("menu").style.display = "none";
	}else{
		document.getElementById("menu").style.display = "";
	}		
	   document.getElementById("menuButton").setAttribute('aria-expanded', 'false');	  
}

function setExpand(){
	document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
}


document.addEventListener("keydown", function(event){	  

  const menu = document.getElementById("menu");
  
  
  switch(event.keyCode){
	  
    /*case 38: // Up arrow    
		  event.preventDefault();
		  //document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
	     // menu.removeAttribute("hidden", "");
       // menu.style.display = "block";
        if (!menu.hidden) {
          console.log(menu)
          const item = menu.querySelector('li a');            
          item.focus();            
        }
          
        function goToLink(){

        }
      // Remove the highlighting from the previous element
      listItems[currentLI].classList.remove("drop-indice");      
      currentLI = currentLI > 0 ? --currentLI : 0;     // Decrease the counter      
      listItems[currentLI].classList.add("drop-indice");   // Highlight the new element
      
	     listItems[currentLI].focus();  
       listItems[currentLI].addEventListener('click', goToLink)
      break;
	  

    case 40: // Down arrow
	 event.preventDefault();

   const submenu = document.getElementById("submenu");
	 //document.getElementById("menuButton").setAttribute('aria-expanded', 'true');
        if (!submenu.hidden) {
          
          const item = submenu.querySelector('li a'); 
                
          //item.focus();        
        }
      // Remove the highlighting from the previous element
      listItems[currentLI].classList.remove("drop-indice");      
      currentLI = currentLI < listItems.length-1 ? ++currentLI : listItems.length-1; // Increase counter 
      listItems[currentLI].classList.add("drop-indice");       // Highlight the new element
      //listItems[currentLI].querySelector('a').setAttribute('tabindex', '0');
	    
      listItems[currentLI].querySelector('a').focus();
      listItems[currentLI].querySelector('a').style.background = 'red';
      console.log(document.activeElement)
      console.log(listItems[currentLI].querySelector('a'))
      break;    
	  */
	 case 13: //enter
	 
	     let expanded =   document.getElementById("menuButton").getAttribute('aria-expanded');	 
			if(expanded === 'true'){   
			    event.preventDefault();
				listItems[currentLI].focus();  
				let id = listItems[currentLI].children[0].id;
				//document.getElementById(id).click();
			}      
	    break;
		
	 case 27: 
	   event.preventDefault();
	   handleAriaExpanded();	  
	   break;
	 
     default:
     break;  
  } 
});
