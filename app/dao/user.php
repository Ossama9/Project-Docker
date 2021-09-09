<?php


require_once __DIR__ . '/../utils/database.php';


function hashmdp($pwd){
    $hashpwd = hash('sha512', $pwd);
    return $hashpwd;
}

/**
 * Cette fonction permet d'inserer un user en base
 * @param string $login Le login du user
 * @param string $pwd Le mdp user en clair
 * @param string $email Son email
 * @return string|null L'id de l'utilsiateur ou null en cas d'erreur
 */

function userInsert(string $login, string $pwd, string $email): ?string
{
    $db = getDatabaseConnection();
    $sql = "INSERT INTO User (login, password, email) VALUES (?, ?, ?)";

    $params = [
        $login,
        hashmdp($pwd),
        $email
    ];
    return databaseInsert($db, $sql, $params);
}

/**
 * Fonction permettant de recuperer un utilisateur a partir d'un id
 * @param string $id L'id de la recherche
 * @return array|null L'utilisateur ou null en cas d'erreur
 */
function userById(string $id): ?array {
    $db = getDatabaseConnection();
    $sql = "SELECT User.id as userId, User.login as userLogin, User.email as userEmail, Role.id as roleId, Role.name as roleName FROM User
            LEFT JOIN UserRole ON User.id = UserRole.userId
            LEFT JOIN Role ON Role.id = UserRole.roleId
            WHERE User.id = ?";
    $params = [$id];
    $rows = databaseFindAll($db, $sql, $params);
if(count($rows)) {
        $user = [
            "id" => $rows[0]["userId"],
            "login" => $rows[0]["userLogin"],
            "email" => $rows[0]["userEmail"]
        ];
        $roles = [];
        foreach ($rows as $row) {
            if(isset($row["roleId"])) {
                $roles[] = [
                    "id" => $row["roleId"],
                    "name" => $row["roleName"]
                ];
            }
        }
        $user["roles"] = $roles;
        return $user;
    }
    return null;
}


/**
 * Fonction permettant de recuperer un utilisateur a partir de son login
 * et de son mdp
 * @param string $login Le login de l'utilisateur
 * @param string $pwd Le mdp de l'utilisateur (en clair)
 * @return array|null L'utilisateur ou null si introuvable
 */
function userUsingCredentials(string $login, string $pwd): ?array
{
    $db = getDatabaseConnection();
    $sql = "SELECT * FROM User WHERE login = ? AND password = ?";


    $params = [
        $login,
        hashmdp($pwd)
    ];
    return databaseFindOne($db, $sql, $params);
}


function UserRoleInsert($idUser): ?string
{
    $db = getDatabaseConnection();
    $sql = "INSERT INTO UserRole (RoleId, userId) VALUES (?, ?)";

    $params = [
        3,
        $idUser
    ];

    return databaseInsert($db, $sql, $params);
}
function listUser(): ?array {
    $db = getDatabaseConnection();
    $sql = "SELECT * FROM User";
    $params = [];
    return databaseFindAll($db, $sql, $params);
}


function UserRoleUpdate($idRole,$idUser): ?string
{
    $db = getDatabaseConnection();
    $sql = "UPDATE UserRole SET roleId = ? WHERE userId = ?";

    $params = [
        $idRole,
        $idUser
    ];

    $affectedRows = databaseExec($db, $sql, $params);
    return $affectedRows === 1;

}
