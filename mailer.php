<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/PHPMailer/src/Exception.php';
require __DIR__ . '/PHPMailer/src/PHPMailer.php';
require __DIR__ . '/PHPMailer/src/SMTP.php';

// BLOCK DIRECT ACCESS
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html#contact');
    exit;
}

// CLEAN INPUT
function clean_input($value) {
    return trim((string)($value ?? ''));
}

// SAFE OUTPUT
function esc_html($value) {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

// GET FORM DATA
$formType = clean_input($_POST['form_type'] ?? 'Sanatan Kriya Home Page Enquiry');
$name     = clean_input($_POST['name'] ?? '');
$phone    = clean_input($_POST['phone'] ?? '');
$email    = clean_input($_POST['email'] ?? '');
$service  = clean_input($_POST['service'] ?? '');
$query    = clean_input($_POST['query'] ?? '');

// ---------------- VALIDATION ---------------- //

if ($name === '') {
    header('Location: index.html?status=name_error#contact');
    exit;
}

if (!preg_match('/^[0-9]{10}$/', $phone)) {
    header('Location: index.html?status=phone_error#contact');
    exit;
}

if ($email === '') {
    header('Location: index.html?status=email_empty#contact');
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header('Location: index.html?status=email_error#contact');
    exit;
}

if ($service === '' || strtolower($service) === 'choose a service') {
    header('Location: index.html?status=service_error#contact');
    exit;
}

if ($query === '') {
    header('Location: index.html?status=query_error#contact');
    exit;
}

// ---------------- MAIL SETUP ---------------- //

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.zoho.in';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'info@growthkriya.com';


    $mail->Password   = 'us1jzAjrrDrU';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;

    // SENDER
    $mail->setFrom('info@growthkriya.com', 'Sanatan Kriya Website');

    // MAIN RECEIVER
    $mail->addAddress('info@growthkriya.com');

    // EXTRA RECEIVERS (HIDDEN - BEST PRACTICE)
    $mail->addBCC('sanatankikriya@gmail.com');
    $mail->addBCC('ajay@growthkriya.com');

    // REPLY TO USER
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry - ' . $service;

    // SAFE VALUES
    $safeFormType = esc_html($formType);
    $safeName     = esc_html($name);
    $safePhone    = esc_html($phone);
    $safeEmail    = esc_html($email);
    $safeService  = esc_html($service);
    $safeQuery    = nl2br(esc_html($query));

    // EMAIL BODY
    $mail->Body = "
        <h2 style='margin-bottom:16px;'>New Sanatan Kriya Enquiry</h2>
        <table border='1' cellpadding='10' cellspacing='0' style='border-collapse:collapse; width:100%; max-width:700px;'>
            <tr><td><strong>Form Type</strong></td><td>{$safeFormType}</td></tr>
            <tr><td><strong>Name</strong></td><td>{$safeName}</td></tr>
            <tr><td><strong>Phone</strong></td><td>{$safePhone}</td></tr>
            <tr><td><strong>Email</strong></td><td>{$safeEmail}</td></tr>
            <tr><td><strong>Service</strong></td><td>{$safeService}</td></tr>
            <tr><td><strong>Query</strong></td><td>{$safeQuery}</td></tr>
        </table>
    ";

    // PLAIN TEXT VERSION
    $mail->AltBody =
        "New Sanatan Kriya Enquiry\n\n" .
        "Form Type: {$formType}\n" .
        "Name: {$name}\n" .
        "Phone: {$phone}\n" .
        "Email: {$email}\n" .
        "Service: {$service}\n" .
        "Query: {$query}\n";

    // SEND MAIL
    $mail->send();

    header('Location: index.html?status=success#contact');
    exit;

} catch (Exception $e) {
    header('Location: index.html?status=mail_error#contact');
    exit;
}