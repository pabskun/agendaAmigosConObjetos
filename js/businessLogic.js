var friendList = [];



function addFriendToSystem(pid, pname, pcountry, pbirthday, pemail){

  var newFriend = {
    id : pid,
    name : pname,
    country : pcountry,
    birthday : pbirthday,
    email : pemail,
    petList:[]
  };
  console.log(newFriend);
  friendList.push(newFriend);
  localStorageFriendList(friendList);
}

function getFriendList(){
  var storedList = localStorage.getItem('localFriendList');
  if(storedList == null){
    friendList = [];
  }else{
    friendList = JSON.parse(storedList);
  }
  return friendList;
}

function localStorageFriendList(plist){
  localStorage.setItem('localFriendList', JSON.stringify(plist));
}



function findFriend(pid){
  var friendObj;
  for(var i = 0; i < friendList.length; i++){
    if(friendList[i].id == pid){
      friendObj = friendList[i];
    }
  }
  return friendObj;
}


function addPetToFriend(pfriendObj, ppetName,ptype,pgender){
  var newPet ={
    name : ppetName,
    type : ptype,
    gender : pgender
  }
  var index = friendList.indexOf(pfriendObj);
  pfriendObj.petList.push(newPet);

  friendList[index] = pfriendObj;
  localStorageFriendList(friendList);

}
