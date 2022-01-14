const firebaseConfig2 = {
    apiKey: "AIzaSyACMQ_i_-J9RLUwr9_oMRhiMsd0q5_7SFQ",
    authDomain: "personal-portfolio-f9d70.firebaseapp.com",
    databaseURL: "https://personal-portfolio-f9d70-default-rtdb.firebaseio.com",
    projectId: "personal-portfolio-f9d70",
    storageBucket: "personal-portfolio-f9d70.appspot.com",
    messagingSenderId: "219643579005",
    appId: "1:219643579005:web:ea10a2829caa46c2e4ff14",
    measurementId: "G-4577VCMWRQ"
};
firebase.initializeApp(firebaseConfig2);
let contactInfo2 = firebase.database().ref("Comment_Blog_2");
document.querySelector(".blog-form-2").addEventListener("submit",Comment_2);





function Comment_2(e)
{
  e.preventDefault();
  //console.log();

  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let subject = document.querySelector("#subject").value;
  let message = document.querySelector("#message").value;

  // console.log(name,email,subject,message);

  saveContactInfo_2(name,email,subject,message);

  document.querySelector(".blog-form-2").reset();
}

function saveContactInfo_2(name,email,subject,message)
{
  let newContactInfo = contactInfo.push();



  newContactInfo.set({
    name: name,
    email: email,
    subject: subject,
    message: message
  });
  retrieveInfos_2();
  window.location.reload();
}


function retrieveInfos_2()
{
  let ref = firebase.database().ref("Comment_Blog_2");
  ref.on("value",gotData);
}



function gotData_2(data)
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
      
      let infosResults = document.querySelector(".infosResults2");

    infosResults.innerHTML += `<div>
    <p><strong>Name: <strong/>${name} <br/>
    <a><strong>Email: <strong/>${email}</a> <br/>
    <a><strong>Subject: <strong/>${subject}</a> <br/>
    <a><strong>Message: <strong/>${message}</a> 
    </p>
    </div>`;
  }
}

retrieveInfos_2();


