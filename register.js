

$(document).ready(function(){
  localStorage.setItem('k','k')
$(function() {
    $("form[name='registration']").validate({
      rules: {
        firstname: "required",
        lastname: "required",
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6,
          pwcheck: true   

        },
        date:{
          date:true
        }
      },
      messages: {
        firstname: "Please enter your firstname",
        lastname: "Please enter your lastname",
        password: {
          required: "Please provide a password",
          minlength: "Your password must be at least 5 characters long",
          pwcheck: "Your password must contain numbers and letters"
        },  
        email: "Please enter a valid email address"
      },
      submitHandler: function() {
        submit()
        document.getElementById('Register').style.display = "none"
      }
    });
  });

  $.validator.addMethod("pwcheck", function(value) {
    return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) && /[a-z]/.test(value) && /\d/.test(value);
  });

  function submit(){
    let username = document.getElementById('firstname')
    let password = document.getElementById('password')
    if (!localStorage.getItem(username.value)){
      console.log(username.value)
      localStorage.setItem(username.value,password.value)
      window.alert("Successful registration")
    }
    else{
      window.alert("Already signed in")
    }
  }
})



