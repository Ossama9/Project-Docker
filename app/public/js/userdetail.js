var valid = document.querySelector('#valid');
valid.style.display = 'none';
var iduser = getId();
var User = userById(iduser);


var login = document.querySelector('#login');
var mail = document.querySelector('#mail');
var role = document.querySelector('#role');
var historique = document.querySelector('#historique');

login.innerHTML = 'Login: ' + User['login']
mail.innerHTML = 'Email: ' + User['email']

if (User['roles'].length == 0) {
    roles = 'Utilisateur normal';
} else {
    roles = User['roles']['0']['name'];
}
role.innerHTML = 'Role: ' + roles;




function initializeTab(data) {

    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');


        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        var td7 = document.createElement('td');
        var td8 = document.createElement('td');
        var td9 = document.createElement('td');


        td3.setAttribute('class', 'p-4');
        td2.setAttribute('class', 'p-4');
        td4.setAttribute('class', 'p-4');
        td5.setAttribute('class', 'p-4');
        td6.setAttribute('class', 'p-4');
        td7.setAttribute('class', 'p-4');
        td8.setAttribute('class', 'p-4');


        var text2 = document.createTextNode(i);
        var text3 = document.createTextNode(data[i]["price"] + ' €');
        var text4 = document.createTextNode(data[i]["date"]);
        var text5 = document.createTextNode(data[i]["created"]);

        var text7 = document.createElement('button');
        var text8 = document.createElement('button');

        if (data[i]['status'] == 0) {
            var text6 = document.createElement('button');

            text6.setAttribute("onclick", "UpdateCommande(" + data[i]["id"] + ")");
            text6.setAttribute("class", "btn");
            var textButton6 = document.createTextNode('Valider');
            text6.appendChild(textButton6);

        } else {
            var text6 = document.createTextNode('Validé');

        }

        text7.setAttribute("onclick", "DeleteCommande(" + data[i]["id"] + ")");
        text7.setAttribute("class", "btn");
        var textButton7 = document.createTextNode('Supprimer');
        text7.appendChild(textButton7);


        text8.setAttribute("onclick", "Download(" + data[i]["id"] + ")");
        text8.setAttribute("class", "btn");

        var textButton8 = document.createTextNode('Telecharger la facture');
        text8.appendChild(textButton8);

        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);
        td7.appendChild(text7);
        td8.appendChild(text8);

        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tr.appendChild(td7);
        tr.appendChild(td8);
        tbody.appendChild(tr);

    }
}

var listrole = getListRoles();

function Modify() {
    valid.style.display = 'initial';

    role.innerHTML = 'Role: ';
    initalizeOptionRole(listrole)
}


function initalizeOptionRole(data) {
    var type = document.createElement('select');
    type.setAttribute('id', 'typeRole')
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', data[i]["id"])
        var textOption = document.createTextNode(data[i]["name"]);
        option.appendChild(textOption);
        role.appendChild(type);
        type.appendChild(option);
    }
}

function Valid() {
    var typeRole = document.querySelector('#typeRole');


    UpdateRole(typeRole.value,iduser)



}

function UpdateRole(idRole,idUser) {

    $.ajax({
        async: false,
        type: "POST",
        global: false,
        dataType: 'html',
        data: ({query: 'updaterole', idRole: idRole,idUser:idUser}),
        url: "../../api/roles/update.php",
        success: function (data) {
            results = data;
        }
    });
    return results;

}
