
const sendCredencials = (to, password) => {
        return {
        to: to,
        from: 'sapareja2@gmail.com',
        subject: '[Soccer-Stats] Confirmación de correo electrónico',
        html:
        "<br><h1>Bienvenido a Soccer Stats!</h1>" +
        "<br> <h3>Credenciales de ingreso: </h3> <br>" +
        "<br> <h3>Correo: </h3>" + to + "<br>" +
        "<br> <h3>Password: </h3>" + password + "<br>" +
        "<br> <h5>Si usted no se registró puede ignorar este mensaje</h5> <br>" +
        "<br> <h5>Nota:</h5>" + "No se podrá iniciar sesión en tu cuenta sin haber verificado la propiedad de correo electrónico"+ "<br>" +
        "<br>",
    }
}

module.exports = {
    sendCredencials,
}