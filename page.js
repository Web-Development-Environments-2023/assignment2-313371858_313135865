var divs = 
    ['Welcome', 'Register', 'Login', 'About', 'Settings'] ;
  
function alternateDivs(div_id) {
    
    var x = document.getElementById(div_id);
    if (x.style.display === "none") {
        x.style.display = "block";
        
        }
    else {
        x.style.display = "none";
        }
    for (var index = 0; index < divs.length; index++){
        if (div_id != divs[index]){
            var y = document.getElementById(divs[index]);
            y.style.display = "none";
        }
    }
}


function validate_login(){
    var username = document.getElementById("usernameLogin").value;
    var password = document.getElementById("passwordLogin").value;
    //user window.localStorage.getItem('user');
    if (username == "k"){ // TODO: change to search in local storage
        if (password == "k"){
            alternateDivs("Settings")
        }
        else{
        alert("Wrong password");
        }
    }
    else{
        alert("User name not exist");
    }
    document.getElementById("login_form").reset();
}



