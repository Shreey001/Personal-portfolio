
    function SendMail(){
        let params = {
            name : document.getElementById("Name").value,
            email_id : document.getElementById("email").value,
            message : document.getElementById("Message").value 
        };
       const serviceID = "service_j2jrsdl";
       const templateID="template_5umnd5e";

       emailjs.send(serviceID,templateID,params)
       .then( (res) => {
        if(res.status == 200){
            document.getElementById("Name").value="";
            document.getElementById("email").value="";
            document.getElementById("Message").value="";
            console.log(res);
            alert("your message sent successfully");
        }
        else{
            console.log("gayana text")
        }
            
        }).catch((err)=>{
            console.log(err)
            
        });
    }