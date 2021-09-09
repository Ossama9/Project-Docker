<?php

require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';

header("Content-Type: application/json");
ensureHttpMethod('POST');
//
//// afin de récuperer le contenu json dans le body request
//// pas automatique en Php
$body = file_get_contents("php://input");
//$_POST = json_decode($body, true);

//var_dump($_POST);
if (isset($_POST['login']) && isset($_POST['password']) && isset($_POST['email'])) {
    $userId = userInsert($_POST['login'], $_POST['password'], $_POST['email']);
    if ($userId) {
        $user = userById($userId);
        if ($user) {
            $role = UserRoleInsert($userId);
            http_response_code(201);
            echo "1";
        } else {
            http_response_code(500);
        }
    } else {
        http_response_code(409);// CONFLICT
    }
} else {
    http_response_code(400); // BAD_REQUEST
}
