const password_box=document.getElementById("password");
const length =12;

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lower="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let special="!@#$%^&*()_+-={}:<>?";

const all = lower + upper + numbers + special;

function create(){
    let password="";

    // password += upper[Math.floor(Math.random() * upper.length)];
    // password += lower[Math.floor(Math.random() * lower.length)];
    // password += numbers[Math.floor(Math.random() * numbers.length)];
    // password += special[Math.floor(Math.random() * special.length)];

    while(length > password.length)
    {
        password += all[Math.floor(Math.random() * all.length)];
    }
    password_box.value = password;
}


function copy(){
    password_box.select();
    document.execCommand('copy');
}