<?php include('header.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>profil</title>
    <script src="js/index.js"></script>
</head>
<body>

<div class="container mt-4">
    <h2 id="login"></h2>
    <h2 id="email"></h2>

</div>
<div>

</div>
<div>

</div>

<script type="text/javascript">

    var listInfo = getInfo();
    if (listInfo){
        var login = document.querySelector('#login');
        var email = document.querySelector('#email');

        login.innerHTML = 'Login: ' + listInfo['login'];
        email.innerHTML = 'Email: '+listInfo['email'];
    }
    else {
        window.location.href = 'login.php'
    }



</script>
<script src="js/index.js"></script>
</body>
</html>