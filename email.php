<?php
if(isset($_POST["enviar"])){
 if(!empty($_POST["nombre"]) && !empty($_POST["email"]) && !empty($_POST["celular"]) && !empty($_POST["mensaje"])){
   $destinatario="braalexdeveloper@gmail.com";
   $nombre=$_POST["nombre"];
   $email=$_POST["email"];
   $cel=$_POST["celular"];
   $mensaje=$_POST["mensaje"];
   $header="Enviado desde tu pagina web" . "\r\n";
   $mensajecompleto=$mensaje . "\n atentamente".$nombre;
   
   $mail=mail($destinatario,$email,$cel,$mensajecompleto,$header);
   if($mail){
  echo "<h4>Mensaje Enviado Correctamente, Gracias.</h4>";
 /* header("Location:index.html"); */
  echo "<script> 

setInterval(function(){
  window.location.replace('index.html');
  },4000);


</script>"; 
   }

 }
}
?>