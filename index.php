<?php
$email = $_GET['email'];
$pwd = $_POST['pwd'];
$pwdRepeat = $_POST['pwd-repeat'];

if ($pwdRepeat === $pwd) {
    $script = '<script>trueCall();</script>';
} else {
    $script = '<script>falseCall();</script>';
}

echo $script;
?>
