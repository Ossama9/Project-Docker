<?php


require_once __DIR__ . '/../../dao/roles.php';


require_once __DIR__ . '/../../utils/server.php';

ensureHttpMethod('GET');

header("Content-Type: application/json");
$name = isset($_GET["name"]) ? $_GET["name"] : null;
$limit = isset($_GET["limit"]) ? intval($_GET["limit"]) : 200;
$offset = isset($_GET["offset"]) ? intval($_GET["offset"]) : 0;
if (isset($_GET['query'])) {
    if ($_GET['query'] == 'listRoles') {
        $service = listRole();
    }
    if ($service) {
        echo json_encode($service);
    } else {
        echo json_encode($service);
    }

} else {
}
