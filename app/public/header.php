<?php session_start(); ?>
    <!DOCTYPE html>
    <html lang="fr">
<head>
    <meta charset="UTF-8">
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
    <link rel="stylesheet" type="text/css" href="css/index.css">
    <link href="https://fonts.googleapis.com/css?family=Poppins:600&display=swap" rel="stylesheet">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <script src="js/index.js"></script>

</head>

<header>
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">
            <!--            <a class="navbar-brand" href="index.php"><img src="{{ asset('image/IMG-3034.PNG') }}" id="img"-->
            <!--                                                          width="70px" height="70px"></a>-->
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>

            </button>

            <div class="collapse navbar-collapse" id="navbarResponsive">


                <?php

                if (isset($_SESSION['id'])) { ?>
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item"><a class="nav-link" href="index.php">Accueil</a></li>
                </ul>
                <ul class="navbar-nav ml-auto">

                    <li><a class="nav-link nav-item" href="profil.php">Mon compte</a></li>




                    <li><a class="nav-link nav-item" href="logout.php">Déconnexion</a></li>

                    <?php } else { ?>
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item"><a class="nav-link" href="index.php">Accueil</a></li>
                    </ul>
                    <ul class="navbar-nav ml-auto">


                        <li><a class="nav-link nav-item" href="login.php">Connexion</a></li>
                        <li><a class="nav-link nav-item" href="subscribe.php">Inscription</a></li>

                        <?php } ?>
                    </ul>
            </div>
        </div>

    </nav>
</header>


<?php