<?php include('header.php'); ?>


<body>
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
                    <h5>Nom d'utilisateur</h5>
                    <input type="text" id="login" placeholder="login" class="input">
                </div>
            </div>
            <div class="input-div one">
                <div class="i">
                    <i class="fas fa-user"></i>
                </div>
                <div class="div">
                    <h5>Adresse e-mail</h5>
                    <input type="email" id="email" placeholder="email" class="input">
                </div>
            </div>
            <div class="input-div pass">
                <div class="i">
                    <i class="fas fa-lock"></i>
                </div>
                <div class="div">
                    <h5>Mot de passe</h5>
                    <input type="password" id="password" placeholder="password" class="input">
                </div>
            </div>

            <button type="submit" id="submit" class="btn" onclick="subscribe()">s'inscrire</button>
        </div>
    </div>
</div>
</div>
<div>

</div>


</body>


<script type="text/javascript">
    function subscribe() {
        var login = document.querySelector("#login");
        var password = document.querySelector("#password");
        var email = document.querySelector("#email");
        sendRequestSubscribe(login.value, password.value, email.value)
    }
</script>
<script src="js/main.js"></script>

