function validate() {
    const email = document.getElementById("email");
    const errEmail = document.getElementById("err-email");
    const regexEmail = "^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$";
    if (email.value == "") {
        errEmail.innerHTML = "Vui lòng nhập email!"
        return false;
    } else if (!email.value.match(regexEmail)) {
        errEmail.innerHTML = "Email sai dịnh dạng!"
        return false;
    }
     else {
        errEmail.innerHTML = ""
    }
    const password = document.getElementById("password");
    const errPassword = document.getElementById("err-password")
    const regexPassword = "^(?=.*?[A-Z])(?=.*?[a-z]).{8,32}$"
    if (password.value == "") {
        errPassword.innerHTML = "Vui lòng nhập mật khẩu!"
        return false;
    } else if (!password.value.match(regexPassword)) {
        errPassword.innerHTML = "Mật khẩu tối thiểu 8 và tối đa 32 ký tự, ít nhất một chữ cái viết hoa, một chữ cái viết thường!"
        return false;
    } else {
        errPassword.innerHTML = ""
    }
    const checkPassword = document.getElementById("check-password");
    const errCheckPassword = document.getElementById("err-check-password")
    if (checkPassword.value == "") {
        errCheckPassword.innerHTML = "Vui lòng xác nhận mật khẩu!"
        return false;
    } else if (checkPassword.value !== password.value) {
        errCheckPassword.innerHTML = "Mật khẩu không khớp"
        return false;
    } else {
        errCheckPassword.innerHTML = "";
    }
    alert("Đăng ký thành công")
    return true;

}
