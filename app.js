const text = document.querySelector(".title");
const addlistbtn = document.querySelector(".addlist");
const userlist = document.querySelector(".name-list");
const listInput = document.querySelector(".list-input"); 

/*text.style.backgroundColor = "red";*/

/*text.classList.add("change");*/ /*we can remove it by replace add with remove*/

addlistbtn.addEventListener("click",function(){
    text.classList.toggle("change"); //this gonna add and remove the class
});

/*console.log(userlist);*/

/*for(user of userlist){
    user.addEventListener('click',function(){
       /* console.log(this);
       this.style.color = "red";
    })
}*/

/*console.log(listInput.value);*/

/*addlistbtn.addEventListener('click' , function(){
    //creat an li out of this air
    const nweLI = document.createElement("LI");
    const licontent = document.createTextNode(listInput.value);
    //add the input value insid that new li
    nweLI.appendChild(licontent);
    //attaching the li to user list
    userlist.appendChild(nweLI);
});*/
