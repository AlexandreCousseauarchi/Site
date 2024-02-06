<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["Nom-2"];
    $email = $_POST["email-2"];
    $telephone = $_POST["T-l-phone-2"];
    $message = $_POST["field-2"];
    
    // Adresse e-mail où vous souhaitez recevoir les informations soumises
    $destinataire = "alexandrecousseau.archi@gmail.com";
    $sujet = "Nouveau message de formulaire";
    $contenu = "Nom: $nom\n";
    $contenu .= "Email: $email\n";
    $contenu .= "Téléphone: $telephone\n";
    $contenu .= "Message:\n$message";
    
    // Envoi de l'e-mail
    mail($destinataire, $sujet, $contenu);

    exit;
}
?>
