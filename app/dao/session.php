<?php

require_once __DIR__ . '/../utils/database.php';
session_start();
/**
 * Cette fonction permet d'inserer une session en base
 * @param string $userId L'id du user correspondant a la session
 * @return string|null Le token de la session
 */
function sessionInsert(string $userId): ?string {
    $db = getDatabaseConnection();
    $sql = "INSERT INTO Session (token, userId, expirationDate) VALUES (?, ?, ?)";
    $token = random_bytes(32); // 64 caractères
    $dt = new DateTime();
    $dt->add(new DateInterval('P15D'));
    $expirationDate = $dt->format("Y-m-d");
    $tokenStr = bin2hex($token);
    $params = [
        $tokenStr,
        $userId,
        $expirationDate
    ];
    databaseInsert($db, $sql, $params);
    return $tokenStr;
}

/**
 * Cette fonction permet de récuperer une session à partir d'un token
 * @param string $token Le token permettant de recuperer la session
 * @return array|null La session ou null si le token est invalide ou expiré
 */
function sessionWithToken(string $token): ?array {
    $db = getDatabaseConnection();
    $sql = "SELECT token, userId, expirationDate FROM Session WHERE token = ? AND expirationDate > NOW()";
    $params = [$token];
    return databaseFindOne($db, $sql, $params);
}