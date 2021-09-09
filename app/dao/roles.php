<?php

require_once __DIR__ . '/../utils/database.php';


function RoleById(string $id): ?array
{
    $db = getDatabaseConnection();
    $sql = "SELECT * FROM Role WHERE id = ?";
    $params = [$id];
    return databaseFindOne($db, $sql, $params);
}

function listRole(): ?array
{
    $db = getDatabaseConnection();
    $sql = "SELECT * FROM Role";
    $params = [];
    return databaseFindAll($db, $sql, $params);
}


function RoleDelete(string $id): bool
{
    $db = getDatabaseConnection();
    $sql = "DELETE FROM Role WHERE id = ?";
    $params = [$id];
    $affectedRows = databaseExec($db, $sql, $params);
    return $affectedRows === 1;
}
