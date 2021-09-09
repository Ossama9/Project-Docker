<?php


require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';
require_once __DIR__ . '/../../dao/session.php';


header("Content-Type: application/json");
ensureHttpMethod('GET');


if (isset($_GET['idUser'])) {
    $user = userById($_GET["idUser"]);
    if ($user) {
        http_response_code(201);
        echo json_encode($user);

    } else {
        http_response_code(500);
    }
} else {
    http_response_code(400); // BAD_REQUEST
}
