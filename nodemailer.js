var nodemailer = require('nodemailer');

myid = "oorihostel@gmail.com"
mypass = "oori1234"
hisid = "aa8819@srmist.edu.in"

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: myid,
    pass: mypass
  }
});

var mailOptions = {
  from: myid,
  to: hisid,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});