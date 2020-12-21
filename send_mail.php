<?php
  // Solo se va a ejecutar cuando la variable $_POST este definida
  if(isset($_POST)) {
    error_reporting(0); // no mandar reportes de errores
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];
    
    $domain = $_SERVER['HTTP_HOST'];
    $to = 'damiandanielvigo@gmail.com';
    $subject_mail = "Contacto desde el formulario del sitio $domain";
    $message = "
      <p>
      Datos enviados desde el formulario del sitio <b>$domain</b>
      </p>
      <ul>
        <li>Nombre: <b>$name</b></li>
        <li>Email: <b>$email</b></li>
        <li>Asunto: $subject</li>
        <li>Comentarios: $comments</li>
      </ul>
    ";

    // \r es un enter. \n es un salto de linea.
    $headers = "MIME-Version: 1.0\r\n"."Content-Type: text/html; charset=utf-8\r\n"."From: Envio Automatico No Responder <no-reply@$domain>";
    // $headers. Si lo envio sin cabecera el correo llega en texto plano. Dentro de las cabeceras especficar, que sea de formato html, que se codificado en utf8
    
   $send_mail = mail($to, $subject_mail, $message, $headers); // si el correo se envia va a validar a true. Localmente no lo puedo enviar porque necesito el protocolo smtp ya que apache no lo tiene, solo es un servidor web. 

   // Esto es lo que mando a la peticion fetch
   if($send_mail) {
    $res = [
      "err" => false,
      "message" => "Tus datos han sido enviados"
    ];
   } else {
    $res = [
      "err" => true,
      "message" => "Error al enviar tus datos. Intenta nuevamente"
    ];
   }

   header("Access-Control-Allow-Origin: *"); /* con * recibo peticiones de cualquier sitio */
   /* header("Access-Control-Allow-Origin: https://damianvigo.com");  *//* solomente aceptas peticiones de este dominio */
   header('Content-type: application/json');
   echo json_encode($res);
   exit;
  }

?>