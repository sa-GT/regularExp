document.getElementById("userForm").addEventListener('input',function(event){
    event.preventDefault();
    let fname = document.getElementById("fname").value
    let lname = document.getElementById("lname").value
    let bdate = document.getElementById("bdate").value
    let email = document.getElementById("email").value
    let ce = document.getElementById("confirmEmail").value
    let ps = document.getElementById("password").value
    let cp = document.getElementById("confirmPassword").value

    let namev = /^[a-zA-Z\s]+$/
    let bv = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
    let ev = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let pss = /^(?=.*[a-z])?(?=.*[A-Z])?(?=.*\d)?(?=.*[!@#$%^&*()_+{}":;.,?/-])?(?!.*[\(\)]).{6,}$/
    if(fname.trim() === ""){
        document.getElementById("fnameError").innerHTML = " "
    }else if(!namev.test(fname)){
        document.getElementById("fnameError").innerHTML = "Wrong name"
    }else{
        document.getElementById("fnameError").innerHTML = " "
    }
    if(lname.trim() === ""){
        document.getElementById("lnameError").innerHTML = " "
    }else if(!namev.test(lname)){
        document.getElementById("lnameError").innerHTML = "Wrong Lname"
    }else{
        document.getElementById("fnameError").innerHTML = " "
    }
    if(bdate.trim() === ""){
        document.getElementById("bdateError").innerHTML = " "
    }else if(!bv.test(bdate)){
        document.getElementById("bdateError").innerHTML = "Wrong Bdate"
    }else{
        document.getElementById("bdateError").innerHTML = " "
    }

    if(email.trim() === ""){
        document.getElementById("emailError").innerHTML = " "
    }else if(!ev.test(email)){
        document.getElementById("emailError").innerHTML = "Email Bdate"
    }else{
        document.getElementById("emailError").innerHTML = " "
    }

    if(ce.trim() === ""){
        document.getElementById("confirmEmailError").innerHTML = " "
    }else if(!ev.test(ce)){
        document.getElementById("confirmEmailError").innerHTML = "Email Bdate"
    }else{
        document.getElementById("confirmEmailError").innerHTML = " "
    }
    if(ps.trim() === ""){
        document.getElementById("confirmEmailError").innerHTML = " "
    }else if(!pss.test(ps)){
        document.getElementById("passwordError").innerHTML = "Password Worng"
    }else{
        document.getElementById("passwordError").innerHTML = " "
    }
    if(cp.trim() === ""){
        document.getElementById("confirmEmailError").innerHTML = " "
    }else if(!pss.test(cp)){
        document.getElementById("confirmPasswordError").innerHTML = "Password wrong"
    }else{
        document.getElementById("confirmPasswordError").innerHTML = " "
    }
})