document.querySelector('#btnSaveFriend').addEventListener('click', saveFriend);
document.querySelector('#btnAssignPet').addEventListener('click',addPet);
drawFriendsTable();
drawPetsTable();


function saveFriend(){
  var sId = document.querySelector('#txtId').value,
      sName = document.querySelector('#txtName').value,
      sCountry = document.querySelector('#txtCountry').value,
      dBirthday = document.querySelector('#txtBirthday').value,
      sEmail = document.querySelector('#txtEmail').value;

  addFriendToSystem(sId,sName,sCountry,dBirthday,sEmail);
  drawFriendsTable();

}

function drawFriendsTable(){
  var list = getFriendList(),
      tbody = document.querySelector('#friendsTable tbody');

  tbody.innerHTML = '';

  for(var i = 0; i < list.length; i++){
    var row = tbody.insertRow(i),
        idCell = row.insertCell(0),
        nameCell = row.insertCell(1),
        countryCell = row.insertCell(2),
        birthdayCell = row.insertCell(3),
        emailCell = row.insertCell(4),
        selectCell = row.insertCell(5);


    idCell.innerHTML = list[i].id;
    nameCell.innerHTML = list[i].name;
    countryCell.innerHTML = list[i].country;
    birthdayCell.innerHTML = list[i].birthday;
    emailCell.innerHTML = list[i].email;

    var inputSelect = document.createElement('input');
    inputSelect.type ='radio';
    inputSelect.value = list[i].id;
    inputSelect.name="rbtFriend";
    selectCell.appendChild(inputSelect);



    tbody.appendChild(row);
  }


}

function addPet(){
  var sName = document.querySelector('#txtPetName').value,
      sType = document.querySelector('#txtAnimal').value,
      sGender = document.querySelector('#txtGender').value,
      sOwnerId = document.querySelector('#friendsTable tbody input[type=radio]:checked').value;
  var friendObj = findFriend(sOwnerId);

  addPetToFriend(friendObj,sName,sType,sGender);
  drawPetsTable();
}

function drawPetsTable(){
  var list = getFriendList(),
      tbody = document.querySelector('#petsTable tbody');
  tbody.innerHTML = '';
  /*Ciclo que recorre la lista de amigos*/
  for(var i = 0; i < list.length; i++){
    /* Ciclo que recorre la lista de mascotas de cada amigo */
    for(var j = 0; j < list[i].petList.length; j++){
      var row = tbody.insertRow(j),
      ownerCell = row.insertCell(0),
      nameCell = row.insertCell(1),
      typeCell = row.insertCell(2),
      genderCell = row.insertCell(3);

      ownerCell.innerHTML = list[i].name;
      nameCell.innerHTML = list[i].petList[j].name;
      typeCell.innerHTML = list[i].petList[j].type;
      genderCell.innerHTML = list[i].petList[j].gender;
    }
  }
}
