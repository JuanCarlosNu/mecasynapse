<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["name"];
    $telefono = $_POST["name_1"];
    $email = $_POST["ss_field_mail"];
    $meeting = $_POST["Mi_campo"];
    $mensaje = $_POST["mensaje"];
    $chkGDPR = isset($_POST["chkGDPR"]) ? "Aceptado" : "No Aceptado";

    $destinatario = "juancarlosm.nunez@gmail.com";
    $asunto = "Nueva consulta de $nombre";

    $cuerpo = "Nombre: $nombre\n";
    $cuerpo .= "Teléfono: $telefono\n";
    $cuerpo .= "Email: $email\n";
    $cuerpo .= "Mejor momento para contactar: $meeting\n";
    $cuerpo .= "Mensaje: $mensaje\n";
    $cuerpo .= "Acepto la política de privacidad: $chkGDPR";

    $cabeceras = "From: $email\r\n";
    $cabeceras .= "Reply-To: $email\r\n";
    $cabeceras .= "Content-Type: text/plain;charset=utf-8\r\n";

    if (mail($destinatario, $asunto, $cuerpo, $cabeceras)) {
        echo "¡Consulta enviada con éxito!";
    } else {
        echo "Error al enviar la consulta. Por favor, inténtalo de nuevo.";
    }
} else {
    header("Location: formulario.html");
    exit();
}
?>