<?php

require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';

ensureHttpMethod('POST');

header("Content-Type: application/json");

// afin de récuperer le contenu json dans le body request
// pas automatique en Php
$body = file_get_contents("php://input");
if (isset($_POST["idRole"]) && isset($_POST["idUser"])) {


    $success = UserRoleUpdate($_POST["idRole"], $_POST["idUser"]);
    var_dump($success);
    if ($success) {
        http_response_code(204);
    } else {
        http_response_code(500);
    }

} else {
    http_response_code(400);
}