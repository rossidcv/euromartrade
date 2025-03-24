<?php
$remitente = $_POST['email'];
$destinatario = 'contacto@euromartrade.com.ar'; // en esta línea va el mail del destinatario.
$asunto = 'Consulta EUROMAR TRADE'; // acá se puede modificar el asunto del mail
if (!$_POST){
?>

<?php
}else{
    $cuerpo .= "Nombre: " . $_POST["nombre"] . "\r\n"; 
    $cuerpo .= "apellido: " . $_POST["apellido"] . "\r\n";
    $cuerpo .= "Email: " . $_POST["email"] . "\r\n";
    $cuerpo .= "Teléfono: " . $_POST["telefono"] . "\r\n";
    $cuerpo .= "Nombre de la empresa: " . $_POST["nombre-empresa"] . "\r\n"; 
    $cuerpo .= "Servicio: " . $_POST["servicio"] . "\r\n";   
    if ($_POST[servicio] == "") {$servicio = "No Disponible";}
    if ($_POST[servicio] == "Importación") {$servicio = "Importación";}
    if ($_POST[servicio] == "Exportación") {$servicio = "Exportación";}
    if ($_POST[servicio] == "Productos o servicios") {$servicio = "Productos o servicios";}    
    $cuerpo .= "Nombre del producto: " . $_POST['nombre-producto'] . "\r\n";   
    $cuerpo .= "Marca: " . $_POST['marca'] . "\r\n";   
    $cuerpo .= "Modelo: " . $_POST['modelo'] . "\r\n";   
    $cuerpo .= "Presentación: " . $_POST['presentacion'] . "\r\n";   
    $cuerpo .= "Cantidades: " . $_POST['cantidades'] . "\r\n";   
    $cuerpo .= "Valor: " . $_POST['valor'] . "\r\n";   
    $cuerpo .= "Kilo: " . $_POST['kilo'] . "\r\n";   
    $cuerpo .= "Volumen: " . $_POST['volumen'] . "\r\n";       
    $cuerpo .= "embalaje: " . $_POST["embalaje"] . "\r\n";   
    if ($_POST[embalaje] == "") {$embalaje = "No Disponible";}
    if ($_POST[embalaje] == "Caja de carton") {$embalaje = "Caja de carton";}
    if ($_POST[embalaje] == "Caja de madera") {$embalaje = "Caja de madera";}
    if ($_POST[embalaje] == "Caja metálica") {$embalaje = "Caja metálica";}
    if ($_POST[embalaje] == "Pallets de madera") {$embalaje = "Pallets de madera";}
    if ($_POST[embalaje] == "Pallets de plástico") {$embalaje = "Pallets de plástico";}    
    $cuerpo .= "Origen: " . $_POST['origen'] . "\r\n";   
    $cuerpo .= "Destino: " . $_POST['destino'] . "\r\n";   
    $cuerpo .= "transporte: " . $_POST["transporte"] . "\r\n";   
    if ($_POST[transporte] == "") {$transporte = "No Disponible";}
    if ($_POST[transporte] == "Vía aerea") {$transporte = "Vía aerea";}
    if ($_POST[transporte] == "Vía marítima") {$transporte = "Vía marítima";}
    if ($_POST[transporte] == "Vía acuática") {$transporte = "Vía acuática";}
    if ($_POST[transporte] == "Vía mutimodal") {$transporte = "Vía mutimodal";}
    $cuerpo .= "Caracteristicas: " . $_POST['caracteristicas'] . "\r\n";   
    //las líneas de arriba definen el contenido del mail. Las palabras que están dentro de $_POST[""] deben coincidir con el "name" de cada campo. 
    // Si se agrega un campo al formulario, hay que agregarlo acá.

    $headers  = "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/plain; charset=utf-8\n";
    $headers .= "X-Priority: 3\n";
    $headers .= "X-MSMail-Priority: Normal\n";
    $headers .= "X-Mailer: php\n";
    $headers .= "From: \"".$_POST['nombre']." ".$_POST['apellido']."\" <".$remitente.">\n";
    mail($destinatario, $asunto, $cuerpo, $headers);
    header( "refresh:2;index-es.html" ); 
    echo '<div style="width:100%; height: -webkit-fill-available; max-width:100%; background-color:#000; 
      border: 1px solid #063; color: #fff; line-height:42px;margin-left: auto; margin-right: auto;
      font-family: Verdana,Geneva,sans-serif; font-size:25px;position:absolute; left:0; top:0;
      padding-top:180px; text-align:center;">
      Sus datos fueron cargados correctamente. <br>Le responderemos a la brevedad. ¡Gracias!</div>';
}
?>