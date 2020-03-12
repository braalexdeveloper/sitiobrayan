var indice=1;
mostrarslider(indice);

function avanzar(n){
mostrarslider(indice+=n);
}
setInterval(function(){
	mostrarslider(indice+=1);
},6000);
function mostrarslider(n){
var i;
var slider=document.getElementsByClassName("item-slider");

if(n>slider.length){
indice=1;
}
if(n<1){
indice=slider.length;
}
for(i=0;i<slider.length;i++){
slider[i].style.display="none";
}
slider[indice-1].style.display="block";
}
