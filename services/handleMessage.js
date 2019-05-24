const sendAPI = require("./graphAPI");
const actions = require("./actions");

//Método para manejar todas los distintos tipos de mensajes que recibimos
exports.handleMessage = (webhookEvent) => {
    let responses;
    try {
      if (webhookEvent.message) {
        let message = webhookEvent.message;
        if (message.quick_reply) {
          handleQuickReplies(webhookEvent);
        } else if (message.attachments) {
          handleCoordinates(webhookEvent);
        } else if (message.text) {
          console.log("Recibiendo mensaje de texto");
          handleTextMessage("Enviaste Texto",webhookEvent);
        }
      } else if (webhookEvent.postback) {
        handlePostback(webhookEvent);
        console.log("postback");
      }
    } catch (error) {
      console.error(error);
      responses = {
        text: `An error has occured: '${error}'. We have been notified and \
        will fix the issue shortly!`
      };
    }
    
  }
//Método para el manejo de mensajes de texto
 handleTextMessage = (texto,webhookEvent)=>{
    let response = {
        messaging_type: "RESPONSE",
        recipient:{
          id: webhookEvent.sender.id
        },
        message:{
          text:texto
      }   
    };
    sendAPI.callSendAPI(response);
  }
//Método para el manejo de Quick Replies
  handleQuickReplies = (webhookEvent)=>{
      let reply = webhookEvent.message.quick_reply.payload;
      const response = {
        texto:'¿Recomendarias nuestro servicio?',
        replies:[
        {
            content_type:"text",
            title:'Si',
            payload:'siRecomienda',
        },
        {
            content_type:"text",
            title:'No',
            payload:'noRecomienda',
        }]};
      if(reply == 'rapidez' || reply == 'ubicacion' || reply == 'servicio'){
        console.log(`Reply ${reply}`);
        actions.quickReplies(webhookEvent, response);
      }else{
        handleTextMessage("Gracias por ayudarnos a mejorar", webhookEvent);
      }
  }
//Método para la detección del envío de postbacks
handlePostback = (webhookEvent) => {
    let evento = webhookEvent.postback.payload; 
    switch(evento){
      case 'survey':
        actions.quickReplies(webhookEvent);
      break;
      case 'find':
          handleLocation(webhookEvent);
      break;
      case 'iniciar':
          sendAPI.getPorfile(webhookEvent.sender.id);
          handleTextMessage("Bienvenido al ChatBot de Platzi y Developer Circle", webhookEvent);
      break;
    }
}

handleCoordinates = (webhookEvent)=>{
  let coordenadas = webhookEvent.message.attachments[0].payload.coordinates;
  console.log(`Las coordenadas del usuario son: ${JSON.stringify(coordenadas)}`);
  actions.stores(webhookEvent);
}

//Método para recibir ubicación
handleLocation = (webhookEvent) => {
  const repliesLocation = {
    texto:'Por favor compartenos tu ubicación para encontrar sucursales cercanas a ti',
    replies:[
    {
        content_type:"location",
        title:'Enviar ubicación',
        payload:'ubicacion',
    }
  ]};
  actions.quickReplies(webhookEvent,repliesLocation); 
}
