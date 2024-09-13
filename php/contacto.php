<?php
echo "El archivo PHP se está ejecutando correctamente.";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "mmundo640@gmail.com"; 
    $subject = "Nuevo mensaje de contacto de $name";
    $body = "Nombre: $name\nCorreo Electrónico: $email\nMensaje:\n$message";
    $headers = "From: $email";

   
    if (mail($to, $subject, $body, $headers)) {
        echo json_encode(["idnotificacion" => 1, "mensaje" => "Correo enviado exitosamente."]);
    } else {
        echo json_encode(["idnotificacion" => 2, "mensaje" => "Estamos experimentando problemas al enviar el correo, por favor utilice un medio diferente para contactarme."]);
    }
}else {
    echo json_encode(["idnotificacion" => 3, "mensaje" => "Método de solicitud no permitido."]);
}
?>