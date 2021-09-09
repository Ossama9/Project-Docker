<?php include('header.php'); ?>

<div class="container mt-4" style="
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
">


    <h4 id="login" class="p-4"></h4>
    <h4 id="mail" class="p-4"></h4>
    <br>
    <h4 id="role" class="p-4"></h4>

    <div id="valid">

        <button class="btn" onclick="Valid()"> Valider</button>
    </div>
    <div>

        <button class="btn" onclick="Modify()"> Modifier le role</button>
    </div>

    <h4 class="p-4">
        <h5 id="historique" class="">

        </h5>
    </h4>


</div>
<script>

</script>
<script src="../js/index.js"></script>
<script src="js/userdetail.js"></script>