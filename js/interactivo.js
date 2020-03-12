/* menu toggle*/
var btn=document.getElementById("btn-menu");
var menu=document.getElementById("navid");

btn.addEventListener("click",function(){
	menu.classList.toggle("mostrar");
	document.getElementById("logo").classList.toggle("margenTop");
	document.getElementById("yo").classList.toggle("topContenedor");
	document.getElementById("estudios").classList.toggle("topContenedor");
	document.getElementById("programas").classList.toggle("topContenedor");
	document.getElementById("miportafolio").classList.toggle("topContenedor");
	document.getElementById("contactenos").classList.toggle("topContenedor");
});

    
    /*window.addEventListener("DOMContentLoaded",quiensoy,false);*/
    var btn1=document.getElementById("btn-mision");
	var btn2=document.getElementById("btn-vision");
	var btn3=document.getElementById("btn-valores");

	

   /* function quiensoy(){*/
     btn1.addEventListener("click",mision,false);
	 btn2.addEventListener("click",vision,false);
	 btn3.addEventListener("click",valores,false);
        /* }*/
    
function mision(){
	var mision=document.getElementById("mision");
	var vision=document.getElementById("vision");
	var valores=document.getElementById("valores");
	
	mision.classList.add("mostrar");
	vision.classList.remove("mostrar");
	valores.classList.remove("mostrar");

	btn1.classList.add("btncolor");
	btn2.classList.remove("btncolor");
	btn3.classList.remove("btncolor");

	//mision.style.display="block";
}
function vision(){
	
	var mision=document.getElementById("mision");
	var vision=document.getElementById("vision");
	var valores=document.getElementById("valores");
	
	mision.classList.remove("mostrar");
	vision.classList.add("mostrar");
	valores.classList.remove("mostrar");

	btn1.classList.remove("btncolor");
	btn2.classList.add("btncolor");
	btn3.classList.remove("btncolor");
}
function valores(){
	var mision=document.getElementById("mision");
	var vision=document.getElementById("vision");
	var valores=document.getElementById("valores");

	mision.classList.remove("mostrar");
	vision.classList.remove("mostrar");
	valores.classList.add("mostrar");

	btn1.classList.remove("btncolor");
	btn2.classList.remove("btncolor");
	btn3.classList.add("btncolor");
}

/* efecto escroll*/

var animascroll=document.querySelectorAll(".animacion-mostrar");

function mostrarscroll(){
	var scrolltop=document.documentElement.scrollTop;
	for(var i=0;i<animascroll.length;i++){
      var alturanimado=animascroll[i].offsetTop;
      if(alturanimado-300<scrolltop){
       animascroll[i].style.opacity=1;
       animascroll[i].classList.add("mostrarArriba");
      }
	}
}
window.addEventListener("scroll",mostrarscroll);

/* animacion circular*/
/*entra el raton*/
window.addEventListener("DOMContentLoaded",circulo,false);
function circulo(){
	document.getElementById("art1").addEventListener("mouseover",animacircular,false);
	document.getElementById("art1").addEventListener("mouseout",removerani,false);

	document.getElementById("art2").addEventListener("mouseover",animacircular2,false);
	document.getElementById("art2").addEventListener("mouseout",removerani2,false);

	document.getElementById("art3").addEventListener("mouseover",animacircular3,false);
	document.getElementById("art3").addEventListener("mouseout",removerani3,false);

	document.getElementById("art4").addEventListener("mouseover",animacircular4,false);
	document.getElementById("art4").addEventListener("mouseout",removerani4,false);
}
function animacircular(){
var articulo=document.getElementById("ico1");

articulo.classList.add("animacircular");

};
function animacircular2(){
	var articulo2=document.getElementById("ico2");
	articulo2.classList.add("animacircular");
}
function animacircular3(){
	var articulo3=document.getElementById("ico3");
	articulo3.classList.add("animacircular");
}
function animacircular4(){
	var articulo4=document.getElementById("ico4");
	articulo4.classList.add("animacircular");
}

/* sale el raton*/

function removerani(){
var articulo=document.getElementById("ico1");

articulo.classList.remove("animacircular");

};
function removerani2(){
	var articulo2=document.getElementById("ico2");
	articulo2.classList.remove("animacircular");
}
function removerani3(){
	var articulo3=document.getElementById("ico3");
	articulo3.classList.remove("animacircular");
}
function removerani4(){
	var articulo4=document.getElementById("ico4");
	articulo4.classList.remove("animacircular");
}

window.addEventListener("DOMContentLoaded",toga,false);
function toga(){
	document.getElementById("div-imgCarrera1").addEventListener("mouseover",mostrargancho,false);
	document.getElementById("div-imgCarrera1").addEventListener("mouseout",ocultargancho,false);

	document.getElementById("div-imgCarrera2").addEventListener("mouseover",mostrargancho2,false);
	document.getElementById("div-imgCarrera2").addEventListener("mouseout",ocultargancho2,false);

	document.getElementById("div-imgCarrera3").addEventListener("mouseover",mostrargancho3,false);
	document.getElementById("div-imgCarrera3").addEventListener("mouseout",ocultargancho3,false);

	document.getElementById("div-imgCarrera4").addEventListener("mouseover",mostrargancho4,false);
	document.getElementById("div-imgCarrera4").addEventListener("mouseout",ocultargancho4,false);
}

/* mostrar ganchito*/
function mostrargancho(){
	var gancho=document.getElementById("gancho");
	gancho.classList.add("mostrarganchito");
}

function mostrargancho2(){
	var gancho2=document.getElementById("gancho2");
	gancho2.classList.add("mostrarganchito");
}

function mostrargancho3(){
	var gancho3=document.getElementById("gancho3");
	gancho3.classList.add("mostrarganchito");
}

function mostrargancho4(){
	var gancho4=document.getElementById("gancho4");
	gancho4.classList.add("mostrarganchito");
}

/* desaparecer gancho*/

function ocultargancho(){
	var gancho=document.getElementById("gancho");
	gancho.classList.remove("mostrarganchito");
}

function ocultargancho2(){
	var gancho2=document.getElementById("gancho2");
	gancho2.classList.remove("mostrarganchito");
}

function ocultargancho3(){
	var gancho3=document.getElementById("gancho3");
	gancho3.classList.remove("mostrarganchito");
}

function ocultargancho4(){
	var gancho4=document.getElementById("gancho4");
	gancho4.classList.remove("mostrarganchito");
}

/* voltear letras seccion servicios*/


/* boton arriba */

window.onscroll=function(){
	if(document.documentElement.scrollTop > 400){
      document.querySelector(".ir-arriba").classList.add("mostrararriba");
	}else{
		document.querySelector(".ir-arriba").classList.remove("mostrararriba");
	}
}
document.querySelector(".ir-arriba").addEventListener("click",function(){
	window.scrollTo({
		top:0,
		behavior:"smooth"
	});
});

/*formulario*/

var input=document.getElementsByClassName("formulario_input");
for(var i=0 ; i < input.length ; i++){
input[i].addEventListener("keyup",function(){
	if(this.value.length>=1){
       this.nextElementSibling.classList.add("fijar");
	}else{
         this.nextElementSibling.classList.remove("fijar");
	}
});
}