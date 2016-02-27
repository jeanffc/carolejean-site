$("#rsvp1form").submit(function(event){
  event.preventDefault();
  var name = $("#inputname").val();
  var email = $("#inputemail").val();
  // var phone = $("section.popup-car .content ul li input[name=phone]").val();
  // var subject = $("section.popup-car .content ul li input[name=subject]").val();
  var message = $("#inputmessage").val();
  // var receive = $("section.popup-car .content ul li input[name=receive]").val();
  if(name != "" && email != ""){
    var data = {
        name: name,
        email: email,
        message: message
    }
    var mandrill = {
        "key": "eRsiqtam5KlI4V4eMTA3og",
        "message": {
            "html": 
              "<p>Nome: " + name.toUpperCase() + "</p></br>" +
              "<p>E-mail: " + email.toLowerCase() + "</p></br>" +
              "<p>Mensagem: " + message + "</p>",
            "subject": "CAROLEJEAN - Presença - " + name.toUpperCase(),
            "from_email": "contato@carolejean.com.br",
            "from_name": "CAROLEJEAN.COM.BR",
            "to": [
                {
                    "email": "jeanffc@gmail.com",
                    "type": "to"
                }
            ],
            "bcc_address":"cmlucchetta@gmail.com",
            "headers": {
               "Reply-To": email.toLowerCase()
            }
        }
    };
    $.ajax({ method: "POST", dataType: "json",
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: mandrill,
        async: false,
        success: function(response){
         alert('Sucesso!');
         $('form')[0].reset();
        }
    });
  }else{
   alert("Preencha todos os campos com *");
  }
});