
const clientResetPassword = (to, temporaryPassword, token) => {
        return {
        to: to,
        from: 'sapareja2@gmail.com',
        subject: '[Soccer-Stats] Cambio de contraseña',
        html:
        "<br><h1>Socer Stats a tu servicio.</h1>" +
        "<br>" + "<h3>Presiona el siguiente link para gestionar tu cambio de constraseña</h3>" + "<br>" +
        "<br>" + "<h4>Contraseña Provisional: </h4>" + temporaryPassword + "<br>" +
        "<br><a  target=\"_blank\"><img width=\"100px\" height=\"45px\" src=\"https://pngimage.net/wp-content/uploads/2018/05/click-here-arrow-png.png\"/></a>"+
        "<a href=\"http://35.239.131.136:4200/usuario/forgotemail/" + token + "\"><buttonhref=\"http://35.239.131.136:4200/usuario/forgotemail/" + token + "\"  style=\"background-color:blue; border-color:black; color:white\" width=\"100\"; height=\"50\">  Recuperar mi contraseña</button></a>" +
        "<br>",
    }
}

module.exports = {
    clientResetPassword,
}