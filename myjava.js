function showElement(y,z){
  var x = document.getElementById(y);
  var btn = document.getElementById(z)
  if (x.style.display=== "none"){
    x.style.display = "block";

    btn.innerHTML= "HIDE DETAILS";
    btn.style.backgroundColor= "white";
    btn.style.border = "solid 1px gray";
    btn.style.color="gray"
  }
  else {
    x.style.display = "none";
    btn.innerHTML= "VIEW DETAILS";

    btn.style.backgroundColor= "#C09CD1";
    btn.style.border = "none";
    btn.style.color="white";
}
}
// To let toggle button show nav link
const toggleButton = document.getElementsByClassName("toggle-btn")[0]
const navlink = document.getElementsByClassName("nav-menu")[0]

toggleButton.addEventListener('click',()=>{
  navlink.classList.toggle('active')
})

/*
function shownav(){
const navlist = document.getElementsByClassName('navbar')
if (navlist.style.display=== 'none'){
  navlist.style.display = 'flex'
}
else{
  navlist.style.display = 'none'
}
}
*/

//To show contact form
function openForm(){
  var x = document.getElementById("leave-msg");
  if (x.style.display=== "none"){
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
}
}

//To send email
function sendemail(){
  const name = getElementById("name")
  const tel = getElementById("tel")
  const mail = getElementById("mail")
  const msg = getElementById("msg")


  Email.send({ Host: "smtp.gmail.com", 
  Username: "scake.server@gmail.com",
  Password : "scake12345678",
  To : "Sivanart.t@gmail.com", 
  From : mail.value, 
  Subject : name.value & " has left message to you", 
  Body : "test", }).then( message => alert("mail sent successfully") );

}

