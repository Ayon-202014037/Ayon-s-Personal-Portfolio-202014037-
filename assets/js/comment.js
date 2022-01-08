function Comment()
 {
   var name=document.getElementById("name").value;
   var email=document.getElementById("email").value;
   var message=document.getElementById("message").value;
   var subject=document.getElementById("subject").value;

   firebase.database().ref('Comment_Blog/'+name).set({
     name:name,
     email:email,
     subject:subject,
     message:message
   },function(error){
     if(error){

     } else{
       alert("আপনার মূল্যবান মতামত দেবার জন্য ধন্যবাদ!");
      
       
     }
   }

   );
 }



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
      alert("Your response has been recorded. Thanks for your valuable time!");
     
    }
  }

  );
}