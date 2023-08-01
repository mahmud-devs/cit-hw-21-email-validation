let name_field = document.querySelector(".input_name");
let username_field = document.querySelector(".input_username");
let email_field =document.querySelector(".input_email")
let number_field =document.querySelector(".input_number")
let password_field = document.querySelector(".input_password")
let confirm_password_field = document.querySelector(".input_confirm_password")




let name_err = document.querySelector(".name_err");
let username_err = document.querySelector(".username_err");
let email_err = document.querySelector(".email_err");
let number_err = document.querySelector(".number_err");
let password_err = document.querySelector(".password_err");
let confirm_password_err = document.querySelector(".confirm_password_err");


let submit = document.querySelector(".submit");



submit.addEventListener("click", function(){
    // ------name------
    if(name_field.value == ""){
        name_err.innerHTML = "name required"
        name_field.style.border = "2px solid red"
        name_field.style.color = "red"
    }else{
        name_err.innerHTML = ""
        name_field.style.border = "unset"
        name_field.style.color = "unset"
    }
    // --------username-------
    if(username_field.value == ""){
        username_err.innerHTML = "username required"
        username_field.style.border = "2px solid red"
        username_field.style.color = "red"
    }else{
        username_err.innerHTML = ""
        username_field.style.border = "unset"
        username_field.style.color = "unset"
    }
    // -------email---
    if(email_field.value == ""){
        email_err.innerHTML = "email required"
        email_field.style.border = "2px solid red"
        email_field.style.color = "red"
    }else{
        email_err.innerHTML = ""
        email_field.style.border = "unset"
        email_field.style.color = "unset"
    }
    // ---------number------
    if(number_field.value == ""){
        number_err.innerHTML = "number required"
        number_field.style.border = "2px solid red"
        number_field.style.color = "red"
    }else{
        number_err.innerHTML = ""
        number_field.style.border = "unset"
        number_field.style.color = "unset"
    }
    // ---------password-------
    if(password_field.value == ""){
        password_err.innerHTML = "password required"
        password_field.style.border = "2px solid red"
        password_field.style.color = "red"
    }else{
        if(password_field.value.length < 8){
            password_err.innerHTML = "must have 8 characters"
            password_field.style.border = "2px solid red"
            password_field.style.color = "red"
        }else{
            password_err.innerHTML = ""
            password_field.style.border = "unset"
            password_field.style.color = "unset"
        }
    }
    // --------confirm password
    if(confirm_password_field.value == ""){
        confirm_password_err.innerHTML = "confirm password"
        confirm_password_field.style.border = "2px solid red"
        confirm_password_field.style.color = "red"
    }else{
        if(confirm_password_field.value.length < 8){
            confirm_password_err.innerHTML = "does not match"
            confirm_password_field.style.border = "2px solid red"
            confirm_password_field.style.color = "red"
        }else{
            confirm_password_err.innerHTML = ""
            confirm_password_field.style.border = "unset"
            confirm_password_field.style.color = "unset"
        }
    }
})





