<?php


require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';
require_once __DIR__ . '/../../dao/session.php';


header("Content-Type: application/json");
ensureHttpMethod('GET');
$body = file_get_contents("php://input");


$idUser = $_SESSION['id'];

$list = userById($idUser);
if (isset($_GET['query'])){
    if ($_GET['query'] == 'getSessionId'){
        $idUser = $_SESSION['id'];
        $list = userById($idUser);

    }
}
if ($list) {
    echo json_encode($list);
} else {
    http_response_code(500);
}

?>

