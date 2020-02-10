function ValidateUser() {
         var emailID = document.myform.mail.value;
		 var password=document.myform.password.value;
		 re = /[0-9]/;
		 rl= /[a-z]/;
		 ru= /[A-Z]/;
		 
		 
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) {
            alert("Please enter correct email ID")
            document.myform.mail.focus() ;
            return false;
         }
		 
		 if(password=="")
		 {
			 alert("Password field is empty")
			 document.myform.password.focus();
			 return false;
		 }
		 
		 if(password.length<6)
		 {
			 alert("Password must be more than 6 characters")
			 document.myform.password.focus();
			 return false;
		 }
		 
		 if(!re.test(password)){
			 alert("Password must have atleast 1 number")
			 document.myform.password.focus();
			 return false;
		 }
		 if(!rl.test(password)){
			 alert("Password must have atleast 1 lowercase")
			 document.myform.password.focus();
			 return false;
		 }
		  if(!ru.test(password)){
			 alert("Password must have atleast 1 UpperCase")
			 document.myform.password.focus();
			 return false;
		 }
         return( true );
      }


  