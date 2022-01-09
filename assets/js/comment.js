const firebaseConfig = {
  apiKey: "AIzaSyBFm2fi238vkBaJNZCF8EX4C3sSu6b2tuQ",
  authDomain: "data-store-15f74.firebaseapp.com",
  databaseURL: "https://data-store-15f74-default-rtdb.firebaseio.com",
  projectId: "data-store-15f74",
  storageBucket: "data-store-15f74.appspot.com",
  messagingSenderId: "207345801127",
  appId: "1:207345801127:web:e6ce220b341f1017b30882",
  measurementId: "G-51J2VRR8HK"
};

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("Comment_Blog");

document.querySelector(".blog-form").addEventListener("submit",Comment);


function Comment(e)
{
  e.preventDefault();
  //console.log();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  // console.log(name,email,subject,message);

  saveContactInfo(name,email,subject,message);

  document.querySelector(".blog-form").reset();
}

function saveContactInfo(name,email,subject,message)
{
  let newContactInfo = contactInfo.push();



  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
  retrieveInfos();
}


function retrieveInfos()
{
  let ref = firebase.database().ref("Comment_Blog");
  ref.on("value",gotData);
}



function gotData(data)
{
  let info = data.val();
  let keys = Object.keys(info);

  for(let i = 0; i < keys.length; i++)
  {
      let infoData = keys[i];
      let name = info[infoData].name;
      let email = info[infoData].email;
      let subject = info[infoData].subject;
      let message = info[infoData].message;

      console.log(name,email,subject,message);
      
      let infosResults = document.querySelector(".infosResults");

    infosResults.innerHTML += ` <div>
    <p><strong>Name: <strong/>${name} <br/>
    <a><strong>Email: <strong/>${email}</a> <br/>
    <a><strong>Subject: <strong/>${subject}</a> <br/>
    <a><strong>Message: <strong/>${message}</a> 
    </p>
    </div> `;
  }
}

retrieveInfos();






 




let contactInfo2 = firebase.database().ref("User");
  
  document.querySelector(".contact-comment").addEventListener("submit",show);
  
  
  function show(e2)
  {
    e2.preventDefault();
    //console.log();
  
    let name2 = document.querySelector("#name").value;
    let email2 = document.querySelector("#email").value;
    let subject2 = document.querySelector("#subject").value;
    let message2 = document.querySelector("#message").value;
  
    // console.log(name,email,subject,message);
  
    saveContactInfo2(name2,email2,subject2,message2);
  
    document.querySelector(".contact-comment").reset();
  }
  
  function saveContactInfo2(name2,email2,subject2,message2)
  {
    let newContactInfo2 = contactInfo2.push();
  
  
  
    newContactInfo2.set({
      name: name2,
      email: email2,
      subject: subject2,
      message: message2
    });
    retrieveInfos2();
  }
  
  
  function retrieveInfos2()
  {
    let ref2 = firebase.database().ref("User");
    ref2.on("value",gotData2);
  }
  
  
  
  function gotData2(data2)
  {
    let info2 = data2.val();
    let keys2 = Object.keys(info2);
  
    for(let i = 0; i < keys2.length; i++)
    {
        let infoData2 = keys2[i];
        let name2 = info2[infoData2].name;
        let email2 = info2[infoData2].email;
        let subject2 = info2[infoData2].subject;
        let message2 = info2[infoData2].message;
  
        console.log(name2,email2,subject2,message2);
        
        let infosResults2 = document.querySelector(".infosResults2");
  
      infosResults2.innerHTML += `<div>
      <p><strong>Name: <strong/>${name2} <br/>
      <a><strong>Email: <strong/>${email2}</a> <br/>
      <a><strong>Subject: <strong/>${subject2}</a> <br/>
      <a><strong>Message: <strong/>${message2}</a> 
      </p>
      </div>`;
    }
  }
  
  
  
  
  
  
  
   
  
  
  
  
  
  
  
  
   






 /*function show()
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
}*/