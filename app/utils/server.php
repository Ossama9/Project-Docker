<?php

require_once __DIR__ . '/../dao/user.php';
require_once __DIR__ . '/../dao/session.php';

function ensureHttpMethod(string $method): void {
    if($_SERVER['REQUEST_METHOD'] !== $method) {
        http_response_code(400);
        die();
    }
}

function ensureUserConnected(?string $role = null): array {
    $headers = getallheaders();
    if(isset($headers["Authorization"])) {
        $bearer = $headers["Authorization"];
        $tokenArray = explode(' ', $bearer);
        if(count($tokenArray) == 2 && $tokenArray[0] == "Bearer") {
            $token = $tokenArray[1];
            $session = sessionWithToken($token);
            if($session) {
                $user = userById($session["userId"]);
                if($user) {
                    if($role !== null) {
                        foreach ($user["roles"] as $userRole) {
                            if($userRole["name"] === $role) {
                                return $user;
                            }
                        }
                        http_response_code(403); // FORBIDDEN
                        die();
                    }
                    return $user;
                }
            }
        }
    }
    http_response_code(401); // UNAUTHORIZED
    die();
}