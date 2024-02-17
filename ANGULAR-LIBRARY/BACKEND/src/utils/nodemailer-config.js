const nodemailer = require("nodemailer");
   
   let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "luis.david.campos.pousa@gmail.com", // generated ethereal user
          pass: "C*sfigueiro1978", // generated ethereal password
        },
      });

module.exports = {
    transporter
}