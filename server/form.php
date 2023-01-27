<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Validate the input data
    $name = trim(filter_input(INPUT_POST, "user_name", FILTER_SANITIZE_STRING));
    $email = trim(filter_input(INPUT_POST, "user_email", FILTER_SANITIZE_EMAIL));
    $message = trim(filter_input(INPUT_POST, "user_message", FILTER_SANITIZE_STRING));
    $success = null;

    if (empty($name) || empty($email) || empty($message)) {
        echo "Please fill all the fields";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format";
        exit;
    }

    // Prepare the email message
    $to = "info@guigs.tech";
    $subject = "New message from $name";
    $headers = "From: $email" . "\r\n" .
        "Reply-To: $email" . "\r\n" .
        "X-Mailer: PHP/" . phpversion();

    $body = "You have received a new message from $name at $email\n\n" .
        "Here is the message:\n\n $message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        $_SESSION['message'] = 'Your message has been sent successfully!';
        $success = true;
        echo $success;
        header('Location: ./../pages/contact.html');
    } else {
        $_SESSION['message'] = 'Sorry, there was an error sending your message. Please try again later.';
        $success = false;
        echo $success;
        header('Location: ./../pages/contact.html');
    }
}
?>