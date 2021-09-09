<?php

require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';
require_once __DIR__ . '/../../dao/session.php';

header("Content-Type: application/json");
ensureHttpMethod('POST');

// afin de récuperer le contenu json dans le body request
// pas automatique en Php

$body = file_get_contents("php://input");
//$_POST = json_decode($body, true);

if (isset($_POST['login']) && isset($_POST['password'])) {

    $user = userUsingCredentials($_POST['login'], $_POST['password']);
    if ($user) {
        $_SESSION['id'] = $user["id"];
        $token = sessionInsert($user["id"]);

//        echo "1";

        $role = userById($user["id"]);
        if ($role['roles']){
            echo "1";
        }
else{

        }


//        echo json_encode(["token" => $token]);

    } else {
        http_response_code(404);
    }
} else {
    http_response_code(400);
}
