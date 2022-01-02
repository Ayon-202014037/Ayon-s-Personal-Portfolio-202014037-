var database = firebase.database();

function sendMessage(){
    var today = new Date();
    var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;
    dateTime=dateTime.toString();


    //getting the values to send to the firebase database
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("Message").value;
    var subject = document.getElementById("subject").value;
console.log(email+name+comment+dateTime)
    var newMessagekey = database.ref().child('comments').push().key;
    database.ref('comments/'+newMessagekey+'/Name').set(name);
    database.ref('comments/'+newMessagekey+'/Email').set(email);
    database.ref('comments/'+newMessagekey+'/Subject').set(subject);
    database.ref('comments/'+newMessagekey+'/Comment').set(message); 
    database.ref('comments/'+newMessagekey+'/Date').set(dateTime);
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
       alert("DONE");
     }
   }

   );


  
 }


