$email=GET['email'];
$pwd=POST['pwd'];
$pwd-repeat=POST['pwd-repeat'];
if ($pwd-repeat===$pwd) {
  echo `<script>firstCall();</script>`;
} else {
  echo `<script>secondCall();</script>`;
}
