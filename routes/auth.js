const express = require('express');
const pool = require('../data/config');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = "capabhi20190205";

const findUserById = (id, cb) => {
    return pool.query('SELECT * FROM users WHERE id = ?', [id], (error, result) => {
        cb(error, result)
    });
}

const createUser = (user, cb) => {
    return pool.query('INSERT INTO users (id, name, password) VALUES (?,?,?)', user, (err) => {
        cb(err)
    });
}

router.post('/register', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const password = bcrypt.hashSync(req.body.password);

    createUser([id, name, password], (err) => {
        if (err) return res.status(500).send("Server error!");
        findUserById(id, (err, user) => {
            if (err) return res.status(500).send('Server error!');
            const expiresIn = 24 * 60 * 60;
            const accessToken = jwt.sign({ id: user.id }, SECRET_KEY, {
                expiresIn: expiresIn
            });
            res.status(200).send({
                "user": user, "access_token": accessToken, "expires_in": expiresIn
            });
        });
    });
});

router.post('/login', (req, res) => {
    const  id  =  req.body.id;
    const  password  =  req.body.password;
    findUserById(id, (err, user)=>{
        if (err) return  res.status(500).send('Server error!');
        if (!user) return  res.status(404).send('User not found!');
        const  result  =  bcrypt.compareSync(password, user.password);
        if(!result) return  res.status(401).send('Password not valid!');

        const  expiresIn  =  24  *  60  *  60;
        const  accessToken  =  jwt.sign({ id:  user.id }, SECRET_KEY, {
            expiresIn:  expiresIn
        });
        res.status(200).send({ "user":  user, "access_token":  accessToken, "expires_in":  expiresIn});
    });
});