<?php
/**
 * @version 1.0
 */

require("class.phpmailer.php");
require("class.smtp.php");

// Detect the language sent from the client

$selectedLanguage = isset($_POST["language"]) ? $_POST["language"] : "en"; // Default to English if no language is provided

// Valores enviados desde el formulario
if ( 
 !isset($_POST["name"]) ||
 !isset($_POST["company"]) || 
 !isset($_POST["countryCode"]) ||
 !isset($_POST["phoneNumber"]) ||
 !isset($_POST["email"]) ||
 !isset($_POST["fromTime"]) ||
 !isset($_POST["toTime"]) ||
 !isset($_POST["mensaje"]) 
  ) {
    die ("Es necesario completar todos los datos del formulario");
}

$nombre = $_POST["name"];
$company = $_POST["company"];
$countryCode = $_POST["countryCode"];
$phoneNumber = $_POST["phoneNumber"];
$email = $_POST["email"];
$fromTime = $_POST["fromTime"];
$toTime = $_POST["toTime"];
$mensaje = $_POST["mensaje"];



// Datos de la cuenta de correo utilizada para enviar vía SMTP

$smtpHost = "c1532453.ferozo.com";  // Dominio alternativo brindado en el email de alta 
$smtpUsuario ="contacto@mecasynapse.com";  // Mi cuenta de correo
$smtpClave = "Corcho@2024";  // Mi contraseña

// Email donde se enviaran los datos cargados en el formulario de contacto
$emailDestino = "contacto@mecasynapse.com";

$mail = new PHPMailer();
$mail->IsSMTP();
$mail->SMTPAuth = true;
$mail->Port = 465; 
$mail->SMTPSecure = 'ssl';
$mail->IsHTML(true); 
$mail->CharSet = "utf-8";


// VALORES A MODIFICAR //

$mail->Host = $smtpHost; 
$mail->Username = $smtpUsuario; 
$mail->Password = $smtpClave;

$mail->From = $email; // Email desde donde envío el correo.
$mail->FromName = $nombre;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario

$mail->Subject = "DonWeb - Ejemplo de formulario de contacto"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "
<b>Nombre:</b> $nombre <br />
<b>Company:</b> $company <br />
<b>Country Code:</b> $countryCode <br />
<b>Phone Number:</b> $phoneNumber <br />
<b>Email:</b> $email <br />
<b>From Time:</b> $fromTime <br />
<b>To Time:</b> $toTime <br />
<b>Mensaje:</b> $mensajeHtml <br /><br />
Formulario de ejemplo. By DonWeb<br />;"; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Formulario de ejemplo By DonWeb"; // Texto sin formato HTML
// FIN - VALORES A MODIFICAR //

//language specific messages:
    $successMessages = [
        "en" => "The email was sent successfully.",
        "es" => "El correo se envió correctamente.",
       "fr" =>"L'e-mail a été envoyé avec succès.",
    ];
    
    $errorMessages = [
        "en" => "An unexpected error occurred.",
        "es" => "Ocurrió un error inesperado.",
        "fr" =>"Une erreur inattendue est apparue.",
    ];

$estadoEnvio = $mail->Send(); 
if($estadoEnvio){
    echo $successMessages[$selectedLanguage];
} else {
    echo $errorMessages[$selectedLanguage];
}
