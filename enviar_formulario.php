<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = htmlspecialchars($_POST['nombre']);
    $correo = htmlspecialchars($_POST['correo']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    // Configurar el correo electrónico
    $to = $correo; // Esto enviará el correo al cliente (persona que llenó el formulario)
    $subject = "Gracias por contactarnos, $nombre";
    $body = "
    <html>
    <head>
        <title>Gracias por contactarnos</title>
    </head>
    <body>
        <h2>Hola $nombre,</h2>
        <p>Gracias por tu mensaje. Nuestro equipo se pondrá en contacto contigo lo más pronto posible.</p>
        <p><strong>Tu mensaje:</strong> $mensaje</p>
        <br>
        <p>Saludos cordiales,</p>
        <p>El equipo de Tierra Sabia</p>
    </body>
    </html>
    ";
    
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= "From: contacto@tierrasabia.com" . "\r\n";

    // Enviar el correo electrónico
    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado correctamente a $correo.";
    } else {
        echo "Hubo un problema al enviar el mensaje.";
    }
}
?>
