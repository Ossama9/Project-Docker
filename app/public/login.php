<?php include('header.php'); ?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <script src="js/index.js"></script>
</head>
<body>
<div>
    <img class="wave" src="../public/image/bg.png">
    <div class="test">
        <div class="img">
            <img src="../public/image/wave.svg">
        </div>
        <div class="login-content">
            <div id="form">
                <img src="../public/image/avatar.svg">
                <div class="input-div one">
                    <div class="i">
                        <i class="fas fa-user"></i>
                    </div>
                    <div class="div">
                        <input type="text" id="login" placeholder="login" required class="input">
                    </div>
                </div>
                <div class="input-div pass">
                    <div class="i">
                        <i class="fas fa-lock"></i>
                    </div>
                    <div class="div">
                <input type="password" id="password" placeholder="password" required class="input">
                    </div>
                </div>
                <a href="subscribe.php">Pas encore de compte ? S'inscrire</a>
                <button type="submit" onclick="submit()" class="btn">se connecter</button>
            </div>

        </div>
    </div>

</body>


<script type="text/javascript">
    var login = document.querySelector("#login");
    var password = document.querySelector("#password");

    function submit() {

        sendRequestLogin(login.value, password.value)
    }
</script>
<script src="js/main.js"></script>
</html>