function sendRequestLogin(login, password) {
    const request = new XMLHttpRequest()
    request.open('POST', '../../api/auth/login.php');
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            const resultCode = parseInt(request.responseText);
            if (resultCode === 1) {
                window.location.href = 'profil.php';
            } else if (resultCode === 2) {
                window.location.href = 'profil.php';

            }else if (resultCode === 0) {
                window.location.href = 'admin/index.php';

            }
            else {
                alert("identifiant incorrect")
            }


        }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const body = `login=${login}&password=${password}`;
    request.send(body);

}

function sendRequestSubscribe(login, password, email) {
    const request = new XMLHttpRequest()
    request.open('POST', '../../api/auth/subscribe.php');
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            const resultCode = parseInt(request.responseText);
            if (resultCode === 1) {
                alert('votre compte est bien créé')
            }


        }
    };
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    const body = `login=${login}&password=${password}&email=${email}`;
    request.send(body);

}

// function getInfo() {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../../api/auth/profil.php');
//     request.onreadystatechange = function () {
//         if (request.readyState === 4) {
//             const resultCode = parseInt(request.responseText);
//
//             var container = document.querySelector("#container");
//             container.innerHTML = request.responseText;
//         }
//     };
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     request.send();
// }

function getInfo() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listService"}),
        url: "../../api/auth/profil.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;
}

// function getListService() {
//     const request = new XMLHttpRequest()
//     request.open('GET', '../../api/service/list.php');
//     request.onreadystatechange = function () {
//         if (request.readyState === 4) {
//             const resultCode = parseInt(request.responseText);
//             if (resultCode === 1) {
//
//                 var container = document.querySelector("#container");
//                 container.innerHTML = request.responseText;
//
//             }
//
//         }
//     };
//     request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     request.send();
//
//
// }

function getListService() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listService"}),
        url: "../../api/service/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}

function getListCategorie() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listCategorie"}),
        url: "../../api/service/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}

function getListType() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listType"}),
        url: "../../api/service/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}

function getTarifsByIdService(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: 'getTarifsByIdService', id_service: id}),
        url: "../../api/tarif/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}

function getNameService(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "serviceById", id: id}),
        url: "../../api/service/list.php",
        success: function (data) {
            results = data;
        }

    });
    nameService = JSON.parse(results);
    nameService = nameService["name"];
    return nameService;

}

function getListGroup(idService) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listgroup"}),
        url: "../../api/group/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}


function listTypeByService(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listTypeByService", id: id}),
        url: "../../api/type_avion/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}

function CategorieById(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listCategorieByService", id: id}),
        url: "../../api/type_avion/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}

function TypeById(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "TypeById", id: id}),
        url: "../../api/type_avion/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}

function getModaliteType(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "getModaliteType", id: id}),
        url: "../../api/tarif/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}

function getModaliteCategorie(id) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "getModaliteCategorie", id: id}),
        url: "../../api/tarif/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}


function getSessionId() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "getSessionId"}),
        url: "../../api/auth/profil.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;
}


function sendRequest(idTarif, price, idUser, dateDebut) {
    $.ajax({
        async: false,
        type: "POST",
        global: false,
        dataType: 'html',
        data: ({query: "sendRequestAtterissage", id_tarif: idTarif, price: price, id_user: idUser, date: dateDebut}),
        url: "../../api/commande/create.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;


}

function initializeTabTarif() {
    result.style.display = 'none';

    for (var i = 0; i < dataTarif.length; i++) {
        var tr = document.createElement('tr');
        var td0 = document.createElement('td');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');

        td0.setAttribute('class', 'p-4');
        td1.setAttribute('class', 'p-4');
        td2.setAttribute('class', 'p-4');
        td3.setAttribute('class', 'p-4');

        var text0 = document.createTextNode(dataTarif[i]["id_type"]["name"]);
        var text1 = document.createTextNode(dataTarif[i]["categorie"]["name"]);
        var text2 = document.createTextNode(dataTarif[i]["modalite"]);
        var text3 = document.createTextNode(dataTarif[i]["price"] + ' €');

        td0.appendChild(text0);
        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        tr.appendChild(td0);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tbody.appendChild(tr);

    }

}

function initializeTabHistorique(data) {
    console.log(data)
    for (var i = 0; i < data.length; i++) {

        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');


        td1.setAttribute('class', 'p-4');
        td2.setAttribute('class', 'p-4');
        td3.setAttribute('class', 'p-4');
        td4.setAttribute('class', 'p-4');
        td5.setAttribute('class', 'p-4');
        td6.setAttribute('class', 'p-4');

        var text1 = document.createTextNode(data[i]["name"]);
        var text2 = document.createTextNode(data[i]["price"] + ' €');
        var text3 = document.createTextNode(data[i]["date"]);
        var text4 = document.createTextNode(data[i]["created"]);
        if (data[i]["status"] == 0) {
            var text5 = document.createTextNode('En attente de validation');
            var text6 = document.createElement('button');
            text6.setAttribute("onclick", "DeleteCommande(" + data[i]["id"] + ")");
            text6.setAttribute("class", "btn");
            var textButton = document.createTextNode('Supprimer');
            text6.appendChild(textButton);

        } else {
            var text5 = document.createTextNode('Validé ');
            var text6 = document.createElement('button');
            text6.setAttribute("onclick", "Download(" + data[i]["id"]+","+data[i]["id_user"] + ")");
            text6.setAttribute("class", "btn");
            var textButton = document.createTextNode('Telecharger la facture');
            text6.appendChild(textButton);

        }


        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);
        td6.appendChild(text6);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        tbody.appendChild(tr);

    }

}


function Atterissage() {


    function initalizeOptionType() {
        var listTypeByServic = listTypeByService(idService);

        for (var i = 0; i < listTypeByServic.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', listTypeByServic[i]["id"])
            var textOption = document.createTextNode(listTypeByServic[i]["name"]);
            option.appendChild(textOption);
            type.appendChild(option);
        }
    }

    type.addEventListener("input", function () {
        idTypeAvion = type.value;
        getModaliteTypeAvion(idTypeAvion);

    }, false)


    function initalizeOptionGroup() {
        for (var i = 0; i < listGroup.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', listGroup[i]["id"])
            var textOption = document.createTextNode(listGroup[i]["name"]);
            option.appendChild(textOption);
            group.appendChild(option);
        }
    }


    function initalizeOptionModalite() {

        for (var i = 0; i < dataTarif.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', dataTarif[i]["price"])
            var textOption = document.createTextNode(dataTarif[i]["modalite"]);
            option.appendChild(textOption);
            modalite.appendChild(option);
        }
    }


    function getModaliteTypeAvion(idTypeAvion) {
        var listModaliteType = getModaliteType(idTypeAvion);
        modalite.innerHTML = '';
        for (var i = 0; i < listModaliteType.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', listModaliteType[i]["id"])
            var textOption = document.createTextNode(listModaliteType[i]["modalite"]);
            option.appendChild(textOption);
            modalite.appendChild(option);
        }


    }


    initalizeOptionType();
    initalizeOptionGroup();

// initalizeOptionModalite();
}

function getId() {
    var url = new URL(window.location.href);
    var idService = url.searchParams.get("id");
    return idService;
}

function Balisage() {
    for (i = 1; i < 10; i++) {
        var option = document.createElement('option');

        option.setAttribute('value', i)
        var textOption = document.createTextNode(i * 30 + ' min');
        option.appendChild(textOption);
        choixbalisage.appendChild(option);
    }


}


function calculAtterissage() {

    if (timeInput.value == 0 || modalite.value.length == 0 || type.value.length == 0) {
        alert('remplir tous les informations');
        return 0;
    } else {
        displayAtterissage();
    }


}

function displayAtterissage() {
    result.style.display = 'initial';
    var tmp = getCoeffGroup(group.value)
    htype.innerHTML = getText(type);
    hgroup.innerHTML = getText(group);
    hmodalite.innerHTML = getText(modalite) + ' ' + modaliteById(modalite.value)['price'] + ' € ';
    montant = (modaliteById(modalite.value)['price']) * 1.2 * tmp;
    montant = montant.toFixed(2)

    htotal.innerHTML = 'Montant final : ' + modaliteById(modalite.value)['price'] + 'x' + tmp + ' = ' + montant + ' €';

}

function getCoeffGroup(id) {

    for (var i = 0; i < listGroup.length; i++) {
        if (listGroup[i]['id'] == id) {
            if (dateAtterissage < dateNuit && dateAtterissage > dateJour) {
                hresult.innerHTML = '6h-22h';
                tmp = listGroup[i]['tarifJour'];
            } else {
                hresult.innerHTML = '22h-6h';
                tmp = listGroup[i]['tarifNuit']

            }

        }
    }
    return tmp;
}

function getText(input) {
    var results;
    results = input.options[input.selectedIndex].text
    return results;
}

function modaliteById(id) {
    for (var i = 0; i < dataTarif.length; i++) {
        if (dataTarif[i]['id'] == id) {
            tmp = dataTarif[i];
        }
    }
    return tmp;

}

function getDate(d) {
    var month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    tmp = [year, month, day].join('-');
    return tmp;
}

function reserveAtterissage() {
    var idTarif = modaliteById(modalite.value)['id'];
    var price = montant;
    var idUser = user['id'];
    var dateDebut = getDate(dateAtterissage)
    // console.log(sendRequest(idTarif, price, idUser, dateDebut))
    if (sendRequest(idTarif, price, idUser, dateDebut)) {
        alert('votre demande a été bien créé')
    }
}

function calculbalisage() {
    var test = document.querySelector("#test");
    idTarif = dataTarif['0']['id'];
    priceUnite = dataTarif['0']['price'];
    price = (priceUnite * choixbalisage.value) * 1.2;
    if (timeInput.value == 0) {
        alert('remplir tous les informations');
        return 0;
    } else {
        balisage_result.style.display = 'initial';

        test.innerHTML = 'Montant final : ' + priceUnite + ' x ' + choixbalisage.value + ' = ' + price + ' €';
    }


}

function reserveBalisage() {
    var idTarif = dataTarif['0']['id'];
    var priceUnite = dataTarif['0']['price'];
    var price = (priceUnite * choixbalisage.value) * 1.2;
    var idUser = user['id'];
    var dateDebut = getDate(dateAtterissage)
    // console.log(sendRequest(idTarif, price, idUser, dateDebut))
    if (sendRequest(idTarif, price, idUser, dateDebut)) {
        alert('votre demande a été bien créé')
    }
}

function Nettoyage() {

    surface.addEventListener('input', function () {
        price = dataTarif['0']['price'] * surface.value;
        price = price.toFixed(2)

        nettoyage_title.innerHTML = 'Prix final:' + dataTarif['0']['price'] + ' x ' + surface.value + ' = ' + price + ' €';

    }, false)
}

function reserveNettoyage() {
    if (timeInput.value == 0) {
        alert('Remplir la date')
        return 0;
    } else {
        var idTarif = dataTarif['0']['id'];
        var idUser = user['id'];
        var dateDebut = getDate(dateAtterissage)
        if (sendRequest(idTarif, price, idUser, dateDebut)) {
            alert('votre demande a été bien créé')
        }
    }

}

function Stationnement() {

    for (i = 1; i < 10; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', i)
        var textOption = document.createTextNode(i + ' semaine');
        option.appendChild(textOption);
        choixStationnement.appendChild(option);
    }


    surfaceStationnement.addEventListener('input', function () {
        if (choixStationnement.value == 1 || choixStationnement.value == 2) {
            price = 0;
        } else {
            price = dataTarif['0']['price'] * surfaceStationnement.value * (choixStationnement.value - 2);
            price = price.toFixed(2)

        }

        stationnement_title.innerHTML = 'Prix final:' + dataTarif['0']['price'] + ' x ' + surfaceStationnement.value + ' x ' + choixStationnement.value + ' = ' + price + ' €';
    }, false)

    choixStationnement.addEventListener('input', function () {
        if (choixStationnement.value == 1 || choixStationnement.value == 2) {
            price = 0;
        } else {
            price = dataTarif['0']['price'] * surfaceStationnement.value * (choixStationnement.value - 2);
            price = price.toFixed(2)

        }
        stationnement_title.innerHTML = 'Prix final : ' + dataTarif['0']['price'] + ' x ' + surfaceStationnement.value + ' x ' + choixStationnement.value + ' = ' + price + ' €';
    }, false)


}

function reserveStationnement() {
    if (timeInput.value == 0) {
        alert('Remplir la date')
        return 0;
    } else {
        var idTarif = dataTarif['0']['id'];
        var idUser = user['id'];
        var dateDebut = getDate(dateAtterissage)
        if (sendRequest(idTarif, price, idUser, dateDebut)) {
            alert('votre demande a été bien créé')
        }
    }
}

function Abri() {

    function initalizeOptionType() {
        var listTypeByServic = listTypeByService(idService);

        for (var i = 0; i < listTypeByServic.length; i++) {
            var option = document.createElement('option');
            option.setAttribute('value', listTypeByServic[i]["id"])
            var textOption = document.createTextNode(listTypeByServic[i]["name"]);
            option.appendChild(textOption);
            typeAbri.appendChild(option);
        }
    }

    initalizeOptionType();
}

function getModaliteCategorieAvion(cat) {
    var listModaliteType = getModaliteType(cat);
    modalite.innerHTML = '';
    for (var i = 0; i < listModaliteType.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', listModaliteType[i]["id"])
        var textOption = document.createTextNode(listModaliteType[i]["modalite"]);
        option.appendChild(textOption);
        modalite.appendChild(option);
    }
}


function calculAbri() {
    var longueur = longueurInput.value;
    var envergure = envergureInput.value;
    var masse = masseInput.value;

    if (longueur == 0 || envergure.length == 0 || masse.length == 0 || timeInput.value == 0) {
        alert('Remplir tous les champs')
        return 0;
    } else {
        var S = longueur * envergure;
        var cat = 2;
        var masseEnT = masse / 1000;
        if (masseEnT < 0.5) {
            if (S < 60) {
                cat = 1;
            }
            if (S < 100 && S >= 60) {
                cat = 1;
            }

        } else if (masseEnT < 1 && masseEnT >= 0.5) {
            if (S < 60) {
                cat = 1;
            }

        } else if (masseEnT > 1) {
            if (S > 100) {
                cat = 3;
            }
        }
        abri_title.innerHTML = 'Vous etes dans la categorie N:' + cat;

        var listModaliteByCategorie = getModaliteCategorie(cat)


        for (i = 0; i < listModaliteByCategorie.length; i++) {
            if (typeAbri.value == listModaliteByCategorie[i]['id_type']['id']) {
                var option = document.createElement('option');
                option.setAttribute('value', listModaliteByCategorie[i]["id"])
                var textOption = document.createTextNode(listModaliteByCategorie[i]["modalite"]);
                option.appendChild(textOption);
                modaliteAbri.appendChild(option);
            }

        }


    }


}

function reserveAbri() {
    var idTarif = modaliteAbri.value;
    var tarif = modaliteById(idTarif);
    var idUser = user['id'];
    var price = tarif['price']
    var dateDebut = getDate(dateAtterissage)
    if (sendRequest(idTarif, price, idUser, dateDebut)) {
        alert('votre demande a été bien créé')
    }
}

function Produit() {
    for (i = 0; i < dataTarif.length; i++) {
        var option = document.createElement('option');
        option.setAttribute('value', dataTarif[i]['id'])
        var textOption = document.createTextNode(dataTarif[i]['modalite']);
        option.appendChild(textOption);
        choix_produit.appendChild(option);
    }

    choix_produit.addEventListener("input", function () {
        price = quantite_produit.value * modaliteById(choix_produit.value)['price'];
        price = price.toFixed(2)

        produit_title.innerHTML = 'Montant final : ' + modaliteById(choix_produit.value)['price'] + 'x' + quantite_produit.value + ' = ' + price + ' €';

    }, false)

    quantite_produit.addEventListener("input", function () {
        price = quantite_produit.value * modaliteById(choix_produit.value)['price'];
        price = price.toFixed(2)

        produit_title.innerHTML = 'Montant final : ' + modaliteById(choix_produit.value)['price'] + 'x' + quantite_produit.value + ' = ' + price + ' €';

    }, false)


}

function reserveProduit() {
    if (timeInput.value == 0) {
        alert('Saissiez l\'heure et la date');
        return 0;
    } else {
        price = quantite_produit.value * modaliteById(choix_produit.value)['price'];
        price = price.toFixed(2)
        idTarif = choix_produit.value;
        var dateDebut = getDate(dateAtterissage)
    }


    if (sendRequest(idTarif, price, idUser, dateDebut)) {
        alert('votre demande a été bien créé')
    }
}


function getListOrder(idUser) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "commandeByIdUser", idUser: idUser}),
        url: "../../api/commande/list.php",
        success: function (data) {
            results = data;
        }
    });
    if (results) {

        results = JSON.parse(results);
    }

    return results;

}


function getListOrderAdmin() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listOrderAdmin"}),
        url: "../../api/commande/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;

}

function countOrderValid(listOrder) {
    var count = 0;
    for (var i = 0; i < listOrder.length; i++) {
        if (listOrder[i]['status'] == 1) {
            count = count + 1;
        }
    }
    return count;
}

function countOrderNonValid(listOrder) {
    var count = 0;

    for (var i = 0; i < listOrder.length; i++) {
        if (listOrder[i]['status'] == 0) {
            count = count + 1;
        }
    }
    return count;

}

function Download(idCommande,idUser) {

    window.location.href = '../../fpdf/invoice/ex.php?query=commandeById&idCommande=' + idCommande+'&idUser='+idUser;
    // console.log(idCommande)
    // $.ajax({
    //     async: false,
    //     type: "GET",
    //     global: false,
    //     dataType: 'html',
    //     data: ({query: "commandeById", idCommande:idCommande}),
    //     url: "../fpdf/invoice/ex.php",
    //     success: function (data) {
    //         results = data;
    //     }
    // });
    // results = JSON.parse(results);
    //
    // return results;
}


function userById(idUser) {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({idUser: idUser}),
        url: "../../api/auth/info.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);

    return results;
}

function DeleteCommande(id) {
    $.ajax({
        async: false,
        type: "DELETE",
        global: false,
        dataType: 'html',
        data: ({id: id}),
        // url: "../../../../api/service/remove.php",
        url: "../../api/commande/remove.php",

        success: function (data) {
            results = data;
        }
    });

    alert('La suppression a effectué')
}


function UpdateCommande(id) {

    $.ajax({
        async: false,
        type: "POST",
        global: false,
        dataType: 'html',
        data: ({query: 'updatestatus', id: id}),
        url: "../../api/commande/update.php",
        success: function (data) {
            results = data;
        }
    });
    return results;

}

function getListUser() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listUser"}),
        url: "../../api/user/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}
function getListRoles() {
    $.ajax({
        async: false,
        type: "GET",
        global: false,
        dataType: 'html',
        data: ({query: "listRoles"}),
        url: "../../api/roles/list.php",
        success: function (data) {
            results = data;
        }
    });
    results = JSON.parse(results);
    return results;

}