<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = $_POST['recipient_email']; // Cambiado para usar el correo proporcionado por el usuario

    // Cuerpo del mensaje
    $email_body = "Nombre: $name\nCorreo: $email\nAsunto: $subject\n\nMensaje:\n$message";

    // Cabeceras del correo
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Enviar el correo
    if (mail($to, $subject, $email_body, $headers)) {
        echo '<script>alert("El mensaje se envió correctamente. ¡Gracias por contactarnos!")</script>';
        echo '<script>window.location.href = "contact.html";</script>';
    } else {
        echo '<script>alert("Hubo un problema al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.")</script>';
        echo '<script>window.location.href = "contact.html";</script>';
    }
} else {
    // Si la solicitud no es de tipo POST, redireccionar a la página de inicio
    header("Location: contact.html");
    exit;
}
?>
