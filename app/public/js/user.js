var tbody = document.querySelector("#tbody");


var data = getListUser();
console.log(data)
function initializeTab(data) {

    for (var i = 0; i < data.length; i++) {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');

        td1.setAttribute('class','p-4');
        td2.setAttribute('class','p-4');
        td3.setAttribute('class','p-4');
        td4.setAttribute('class','p-4');
        td5.setAttribute('class','p-4');




        var text1 = document.createTextNode(data[i]['id']);
        var text2 = document.createTextNode(data[i]['login']);
        var text3 = document.createTextNode(data[i]['email']);
        var text4 = document.createElement('button');
        var text5 = document.createElement('button');



        text4.setAttribute("onclick", "DeleteUser(" + data[i]["id"] + ")");
        text4.setAttribute("class", "btn");
        var textButton4 = document.createTextNode('Supprimer');
        text4.appendChild(textButton4);

        text5.setAttribute("onclick", "DisplayUser(" + data[i]["id"] + ")");
        text5.setAttribute("class", "btn");
        var textButton5 = document.createTextNode('Voir');
        text5.appendChild(textButton5);




        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        td5.appendChild(text5);


        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        tbody.appendChild(tr);

    }
}

function DeleteUser(id){
    $.ajax({
        async: false,
        type: "DELETE",
        global: false,
        dataType: 'html',
        data: ({query:"user",id: id}),
        url: "../../api/commande/remove.php",
        success: function (data) {
            results = data;
        }
    });

    alert('La suppression a été effectué')
}


function DisplayUser(id){
    window.location.href = 'userdetail.php?id='+id;
}

initializeTab(data);