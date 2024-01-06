<?php
function generateToken() {
    return bin2hex(random_bytes(16));
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $pwd = $_POST['pwd'];
    $pwdRepeat = $_POST['pwd-repeat'];

    if ($pwdRepeat === $pwd) {
        $script = '<script>trueCall();</script>';
    } else {
        $script = '<script>falseCall();</script>';
    }

    if (isset($_POST['remember'])) {
        $token = generateToken();
        setcookie('remember_token', $token, time() + (60 * 60 * 24 * 30), '/');
        echo '<script>localStorage.setItem("authToken", "' . $token . '");</script>';
    }
    
    echo $script;
}
?>
