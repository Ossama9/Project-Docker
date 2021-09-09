<?php


require_once __DIR__ . '/../../utils/server.php';
require_once __DIR__ . '/../../dao/user.php';

ensureHttpMethod('GET');

header("Content-Type: application/json");

    if ($_GET['query'] == 'listUser') {
        $service = listUser();
    }
    if ($service) {
        echo json_encode($service);
    } else {
        http_response_code(500);
    }

