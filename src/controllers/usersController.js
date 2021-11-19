const Users = require('../models/Users')

const createUser = async (req, res) => {
    const users = new Users(req.body)
    try {
        let doc = await users.save()
        res.redirect('/')
    } catch (err) {
        res.render('createUser', { err, body: req.body })
    }

}

const findUser = async (req, res) => {
    try {
        const users = await Users.find({})
        res.render('index', { body: users , title:'Management Users'})
    } catch (err) {
        res.status(404).send(err)
    }

}

const deleteUser = async (req, res) => {
    let id = req.params.id
    try {
        await Users.findByIdAndDelete(id)
        res.send(id)
    } catch (err) {
        res.status(404).send(err)
    }
}

const loadUser = async (req, res) => {
    let id = req.params.id
    try {
        const users = await Users.findById(id)
        res.render('editUser', {err: false, body: users, title:'Edit User'})
    } catch (err) {
        res.status(404).send(err)
    }
}

const editUser = async (req, res) => {
    let user = {};
    user.name = req.body.name;
    user.age = req.body.age;
    user.email= req.body.email;
    let id = req.params.id

    try{
        let doc = await Users.updateOne({_id: id}, user)
        res.redirect('/')
    }catch(err){
        res.render('editUser', {err, body: req.body})
    }
}

module.exports = { createUser, findUser, deleteUser, loadUser, editUser }
