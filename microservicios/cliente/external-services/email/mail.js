const nodemailer = require('nodemailer');

class Mailer{

    constructor(){

        this.transporter = nodemailer.createTransport({
            service: 'Gmail',
            secure:false,
            ssl: true,
            port : 3000,
            auth: {
                user: 'sapareja2@gmail.com',
                pass: '##123Pareja2'
            }
        });


    }

    sendMail(mailOptions){
        this.transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
    }
}

module.exports= new Mailer();