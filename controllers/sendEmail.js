'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var nodemailer = require("nodemailer");

var router = express.Router();

router.post('/', bodyParser.urlencoded({ extended: false }), 
	function (req, res, next) {
	

 var transporter = nodemailer.createTransport({
        auth: {
            pass: process.env.EMAIL_PASS,
            user: process.env.EMAIL_ADDRESS,
        },
        host: "smtp.zoho.com",
        port: 465,
        secure: true,
    });
    var mailOptions = {
        from: "Contacto <facundod@sdfbarriouno.com.ar>",
        html: "Nombre: " + req.body.fullName + "</br> Email: " + req.body.email + "</br> Direccion: " + req.body.address + "</br> Telefono: " + req.body.tel + "</br> Mensaje: " + req.body.message , 
        subject: "Nueva consulta desde el Website",
        to: "contacto@sdfbarriouno.com.ar",
    };


    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.redirect('/');
        }
        console.log("Message sent: " + info.response);
    });
	
	res.redirect('/');


});


module.exports = router;