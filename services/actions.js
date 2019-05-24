const sendAPI = require("./graphAPI");


const repliesSurvey = {
    texto:'Por favor llena esta encuesta para que podamos mejorar',
    replies:[
    {
        content_type:"text",
        title:'Servicio',
        payload:'servicio',
    },
    {
        content_type:"text",
        title:'Rapidez',
        payload:'rapidez',
    },
    {
        content_type:"text",
        title:'Ubicaciones',
        payload:'ubicacion',
    },
]};

exports.survey = (webhookEvent, replies) => {
    if(!replies){
        replies = repliesSurvey;
    }
    let response = {
        recipient:{
          id: webhookEvent.sender.id
        },
        message:{
          text:repliesSurvey.texto,
          quick_replies:repliesSurvey.replies
      }   
    };
    sendAPI.callSendAPI(response);
}