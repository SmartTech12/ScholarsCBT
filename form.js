const myForm = document.getElementById("myForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
myForm.addEventListener("submit", (e)=>{
    e.preventDefault();

    if (username.value.length === 0 || password.value.length === 0 ){
        alert("fields cannot be empty");    
    }
    else{
        alert("login successful");
        window.location.href ="instruction.html"
    }

});

console.log(myForm)
console.log(username)
console.log(password)