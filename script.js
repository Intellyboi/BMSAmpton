let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status = document.getElementById('status');
status.innerText = "";

 generate = () => {
let first = alphabets[Math.floor(Math.random() * alphabets.length)];
let second = Math.floor(Math.random() * 10);
let third = Math.floor(Math.random() * 10);
let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
let sixth = Math.floor(Math.random() * 10);
captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+fifth.toString()+sixth.toString();
document.getElementById('generated-captcha').value = captcha;
document.getElementById("entered-captcha").value = '';
}

 check = () => {
    const dbref = ref(db);

    get(child(dbref, "Register/")).then((snapshot)=>{
        if(snapshot.exists()){
            var findPassword = snapshot.val().Password;
            var findUsername = snapshot.val().Username;
            let check1=document.getElementById(Password).value;
            let check2=document.getElementById(Username).value;
        } else {
            alert("No data found");
        }
    })
    .catch((error)=>{
        alert(error)
    })
let userValue = document.getElementById("entered-captcha").value;
if(userValue == captcha){
        if(check3){
                    document.getElementById("submit2").setAttribute("href", "index_login.html"); 
    }
else{
    alert("Invalid Username or Password or UID")
}
}
else{
    document.getElementsByTagName('a')[0].removeAttribute('href');
    status.innerText = "Try Again!"
    document.getElementById("entered-captcha").value = '';
    
}
}
