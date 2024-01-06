$email=GET['email'];
$pwd=POST['pwd'];
$pwdRepeat=POST['pwd-repeat'];
if ($pwdRepeat===$pwd) {
  echo `<script>trueCall();</script>`;
} else {
  echo `<script>falseCall();</script>`;
}
