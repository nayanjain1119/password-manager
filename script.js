console.log("working");
document.querySelector(".btn").addEventListener("click",(e)=>{
e.preventDefault()
console.log("clicked...")
console.log(username.value,password.value)
localStorage.getItem("passwords")
console.log(passwords)
if(passwords==null){
let json=[]
json.push=({username:username.value, password:password.value})
alert("password saved");
localStorage.setItem("password",json.stringify(json))
}
else{
    let json=json.parse(localStorage.getitem("passwords"))
    json.push=({username:username.value, password:password.value})
    alert("password saved");
    localStorage.setItem("password",json.stringify(json))
}

})
