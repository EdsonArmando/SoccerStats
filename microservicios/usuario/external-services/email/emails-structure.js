
const verifyAccount = (to, id) => {
        return {
        to: to,
        from: 'sapareja2@gmail.com',
        subject: '[Soccer-Stats] Confirmación de correo electrónico',
        html:
        "<br><h1>Bienvenido a Soccer Stats!</h1>" +
        "<br>" + "<h3>Para confirmar tu registro por favor haz click en el siguiente enlace</h3>" + "<br>" +
        "<br><a  target=\"_blank\"><img width=\"100px\" height=\"45px\" src=\"https://pngimage.net/wp-content/uploads/2018/05/click-here-arrow-png.png\"/></a>"+
        "<a href=\"http://35.239.131.136:4200/usuario/" + id + "\"><buttonhref=\"http://35.239.131.136:4200/usuario/" + id + "\"  style=\"background-color:blue; border-color:black; color:white\" width=\"100\"; height=\"50\">  Ingresar a Soccet Stats</button></a>" +
        "<br>" + "<h5>Si usted no se registró puede ignorar este mensaje</h5>" + "<br>" +
        "<br>" + "<h5>Nota:</h5>" + "No se podrá iniciar sesión en tu cuenta sin haber verificado la propiedad de correo electrónico"+ "<br>" +
        "<br>",
    }
}

module.exports = {
    verifyAccount,
}