// =========================
// LOGIN SYSTEM
// =========================


function openLogin(){

    document.getElementById("homePage")
    .classList.add("hidden");


    document.getElementById("loginPage")
    .classList.remove("hidden");


}





function login(){


    let username =
    document.getElementById("username").value.trim();


    let password =
    document.getElementById("password").value.trim();




    if(username === "LSPD" && password === "LSPD00078"){



        document.getElementById("loginPage")
        .classList.add("hidden");



        document.getElementById("app")
        .classList.remove("hidden");



        document.getElementById("loginError")
        .innerHTML="";



    }

    else{


        document.getElementById("loginError")
        .innerHTML =
        "Username یا Password اشتباه است.";


    }


}








// =========================
// DEPARTMENT SYSTEM
// =========================



function selectDept(name){


    document.getElementById("deptTitle")
    .innerHTML=name;



}








// =========================
// CALL GENERATOR
// =========================



function generateCall(){



    let from =

    document.getElementById("from")
    .value;



    let to =

    document.getElementById("to")
    .value;



    let code =

    document.getElementById("code")
    .value;





    let result =


    "FROM "

    + from.toUpperCase()


    + " TO "

    + to.toUpperCase()


    + " | "

    + code;





    document.getElementById("result")
    .value=result;



}








function copyText(){



    let text =

    document.getElementById("result");



    navigator.clipboard.writeText(
        text.value
    );



    alert("Copied!");



}










// =========================
// CUSTOM MESSAGE SYSTEM
// =========================



let messages =

JSON.parse(
localStorage.getItem("messages")
) || [];







function saveMessages(){



    localStorage.setItem(

        "messages",

        JSON.stringify(messages)

    );



}








function addMessage(){



    let title =

    document.getElementById("msgTitle")
    .value.trim();



    let text =

    document.getElementById("msgText")
    .value.trim();





    if(title=="" || text==""){


        alert("Please fill all fields.");

        return;


    }







    messages.push({


        title:title,


        text:text



    });





    saveMessages();


    renderMessages();





    document.getElementById("msgTitle")
    .value="";



    document.getElementById("msgText")
    .value="";



}










function renderMessages(){



    let list =

    document.getElementById("messageList");



    if(!list) return;



    list.innerHTML="";





    messages.forEach((msg,index)=>{



        list.innerHTML += `


        <div class="message-card">


        <h4>

        ${msg.title}

        </h4>



        <p>

        ${msg.text}

        </p>




        <button onclick="copyMessage(${index})">

        📋 Copy

        </button>




        <button onclick="editMessage(${index})">

        ✏ Edit

        </button>




        <button onclick="deleteMessage(${index})">

        🗑 Delete

        </button>



        </div>



        `;



    });



}









function copyMessage(index){



    navigator.clipboard.writeText(

        messages[index].text

    );



    document.getElementById("result")
    .value =
    messages[index].text;



    alert("Message Copied!");



}









function editMessage(index){



    document.getElementById("msgTitle")
    .value =
    messages[index].title;



    document.getElementById("msgText")
    .value =
    messages[index].text;





    messages.splice(index,1);



    saveMessages();


    renderMessages();



}









function deleteMessage(index){



    if(confirm("Delete this message?")){



        messages.splice(index,1);



        saveMessages();



        renderMessages();



    }



}









// LOAD SAVED MESSAGES

renderMessages();