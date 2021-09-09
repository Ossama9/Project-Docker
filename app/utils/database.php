<?php

/**
 * Ouvre une connexion a la base
 * @return PDO la bdd
 */
function getDatabaseConnection(): PDO {
    $host = "db";
    $port = "3306"; // 3306 default
    $driver = "mysql";
    $dbname = "Projet";
    $user = "root";
    $pwd = "root"; // "" sur wamp
    return new PDO("$driver:host=$host;port=$port;dbname=$dbname;charset=utf8", $user, $pwd);
//    return $bdd=new PDO('mysql:host=172.21.0.4;dbname=Projet;charset=utf8', 'root', 'root');

}

/**
 * Permet d'executer la requete en parametre et de recuperer un resultat unique
 * @param PDO $db La base de donnée
 * @param string $sql La requete
 * @param array $params Les parametres à bind (remplacement des ?)
 * @return array|null La ligne de la base recuperee ou null en cas d'erreur
 */
function databaseFindOne(PDO $db, string $sql, array $params): ?array {
    $statement = $db->prepare($sql);
    if($statement) {
        $success = $statement->execute($params);
        if($success) {
            $res = $statement->fetch(PDO::FETCH_ASSOC);
            if($res) {
                return $res;
            }
        }
    }
    return null;
}

/**
 * Permet d'executer la requete en parametre et de recuperer tous les resultats
 * @param PDO $db La base de donnée
 * @param string $sql La requete
 * @param array $params Les parametres à bind (remplacement des ?)
 * @return array|null Les lignes de la base ou null en cas d'erreur
 */
function databaseFindAll(PDO $db, string $sql, array $params): ?array {
    $statement = $db->prepare($sql);
    if($statement) {
        $success = $statement->execute($params);
        if($success) {
            return $statement->fetchAll(PDO::FETCH_ASSOC);
        }
    }
    return null;
}

/**
 * Permet d'inserer une ligne base
 * @param PDO $db La base
 * @param string $sql La requete
 * @param array $params Les parametres
 * @return string|null L'id de l'élement inséré ou null en cas d'erreur
 */
function databaseInsert(PDO $db, string $sql, array $params): ?string {
    $statement = $db->prepare($sql);
    if($statement) {
        $success = $statement->execute($params);
        if($success) {
            return $db->lastInsertId();
        }
    }
    return null;
}

/**
 * Permet de faire requete de modification de table
 * @param PDO $db La base
 * @param string $sql La requete
 * @param array $params les parametres
 * @return int|null Le nombre de ligne affecte ou null en cas d'erreur
 */
function databaseExec(PDO $db, string $sql, array $params): ?int {
    $statement = $db->prepare($sql);
    if($statement) {
        $success = $statement->execute($params);
        if($success) {
            return $statement->rowCount();
        }
    }
    return null;
}