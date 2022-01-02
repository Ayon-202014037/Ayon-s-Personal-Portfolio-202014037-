 function show()
 {
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var message=document.getElementById("message").value;
   var subject=document.getElementById("subject").value;

   firebase.database().ref('User/'+name).set({
     name:name,
     email:email,
     message:message,
     subject:subject
   },function(error){
     if(error){

     } else{
       alert("DONE");
     }
   }

   );


  
 }


