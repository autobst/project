const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static(`${__dirname}/client/dist/client/browser`));
 
// create application/json parser
const jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// //MongoDb
// const {connect, Users, Sections, Posts} = require('./mongodb');
// connect()
//     .then(() => { console.log('MongoDb connected') })
//     .catch((err) => { console.log(err) });

// //API
// app.post('/user', jsonParser, function(req, res) {
//     Users.find(req.body,(err, users) => {
//         if (err || users.length == 0) {
//             res.status(200).send({message: 'Користувача не знайдено'});
//         } else {
//             res.status(200).send({user: users[0]});
//         }
//     })
// });

// app.post('/remind', jsonParser, function(req, res) {
//     Users.find(req.body,(err, users) => {
//         if (err || users.length == 0) {
//             res.status(200).send({message: 'Користувача не знайдено'});
//         } else {
//             res.status(200).send({message: `Ваш пароль - ${users[0].userPwd}`});
//         }
//     })
// });

// app.post('/registerUser', jsonParser, function(req, res) {
//     Users.find({userName: req.body.userName},(err, users) => {
//         if (err || users.length == 0) {
//             Users.create(req.body);
//             res.status(200).send({message: 'Користувача успішно створено', success: true});
//         } else {
//             res.status(200).send({message: 'Користувач вже зареєстрований'});
//         }
//     })
// });

// app.get('/sections', jsonParser, function(req, res) {
//     Sections.find({}, (err, sections) => {
//         delete sections[0]._doc._id;
//         res.status(200).send(sections[0]);
//     });
// });

// app.post('/add-post', jsonParser, function(req, res) {
//     Users.find({userName: req.body.user.userName, userPwd: req.body.user.userPwd},(err, users) => {
//         if (err || users.length == 0) {
//             res.status(200).send({message: 'Користувача не знайдено', success: false});
//         } else {
//             if (!users[0].isAdmin) {
//                 res.status(200).send({message: 'Користувач не може добавляти пост', success: false});
//             } else {
//                 delete req.body.user;
//                 Posts.create(req.body);
//                 res.status(200).send({message: 'Пост успішно додано', success: true});
//             }
            
//         }
//     })
// });

app.get('*', function(req, res) {
    res.sendFile(`${__dirname}/client/dist/client/browser/index.html`);
});

const port = process.env.port || 8080;
app.listen(port, () => {
    console.log(`Express server listening on port ${port}`);
});
