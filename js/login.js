// check empty field validation 
$("#input_submit").click(function () {
    var Username = $.trim($("#field_email").val());
    var Password = $.trim($("#field_password").val());

    if (Username === "") {
        $("#lblUsername").removeAttr("hidden");
        $("#lblUsername").css("display", "inline-block");
        $("#field_email").css("border-color", "red");
        $("#field_email").focus(function () {
            clearValidationLabel();
            $("#field_email").css("border-color", "#ccc");
        });
        return false;
    } else if (Password === "") {
        $("#lblPassword").removeAttr("hidden");
        $("#lblPassword").css("display", "inline-block");
        $("#field_password").css("border-color", "red");
        $("#field_password").focus(function () {
            clearValidationLabel();
            $("#field_password").css("border-color", "#ccc");
        });
        return false;
    } else {
        login();
    }
});

// function login user
function login() {
    console.log("Inside login");
    window.location = "../pages/home.html";
}

// function to search key press event
function searchKeyPress(e) {
    e = e || window.event;
    if (e.keyCode == 13) {
        $("#input_submit").click();
        return false;
    }
    return true;
}

// function to clear validation
function clearValidationLabel() {
    $(".validation").hide();
}