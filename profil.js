var url=new URLSearchParams(document.location.search.substring(1));
var userid = url.get("ID");
var UserList = Liste;


console.log(userid);
function checkIndex(elem, ind, array){
  // console.log(elem);
  if (parseInt(userid) === elem.ID) {
    return true
  }else {
    return false
  }
}

var index = UserList.findIndex(checkIndex);
console.log(index);

var goodUser = Liste[index];
document.getElementById("name").innerHTML = "<span>" + goodUser.Nom.toUpperCase() + "\u0020" + goodUser.Prenom.capitalize() + "</span>";
var contentDesc = document.getElementById("contentDesc");
for(key in goodUser){

	if(key !== 'Nom' && key !== "Prenom"){
		// console.log(key);
		// console.log(item.key);
		// console.log(item[key]);
		var contentLi = document.createElement('li');
		contentLi.innerHTML = key + "\u0020" + ":" + "\u0020" + goodUser[key];

		contentDesc.appendChild(contentLi);

	}
}
