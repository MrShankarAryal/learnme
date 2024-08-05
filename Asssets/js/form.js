  function validation(){
     let x =document.form;
     

     if(x.name.value,x.age.value,x.age.value,x.email.value,x.password1.value,x.password2.value==""){
      alert("Please fill the blanks");
      return false;
   }
     
     if(x.password1.value.length != 6){
               alert("Password must have 6 digit");
               return false;
     }
     if(x.password1.value != x.password2.value){
              alert("password conformation failed");
              return false;
     }
     if(x.email.value.indexOf('@')<=0 ){
      alert("Email invalid");
          return false;
     }
     
     if(x.age.value < 18){
      alert("website is for adult only ");
      return false;
  }
    }
   
 