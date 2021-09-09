<?php

/*
include: si le fichier n'exite pas, il leve une erreur de type notice, mais rien de grave
require: si le fichier n'exite pas, il crash completement
include_once: eq. include + le fichier est inclus qu'une seul fois
require_once:  eq. require  + le fichier est inclus qu'une seul fois
*/

// __DIR__ permet de récuperer le chemin exact du fichier

ini_set('display_errors', 1);

require_once __DIR__ . '/../utils/database.php';

$db = getDatabaseConnection();

$statement = $db->query("SELECT * FROM users");
if($statement) {
    $res = $statement->fetchAll(PDO::FETCH_ASSOC);
    print_r($res);
} else {
    echo "db error";
}