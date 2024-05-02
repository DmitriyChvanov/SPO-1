const uuid = require('uuid') 
const path = require('path')
const{Messages, ItemInfo} = require('../models/models')
const apiError = require('../error/apiError')
const {Sequelize} = require('sequelize')


class MessagesController {
    async getUserMessages(req,res, next){
        try {
            const {from_hex, to_hex} = req.body
            
            let messages = await Messages.findAll({
                where: Sequelize.and(
                    Sequelize.or(
                      { from_hex: from_hex, to_hex: to_hex },
                      { from_hex: to_hex, to_hex: from_hex },
                    )
                )
            })

            return res.json(messages)
        } catch (e) {
            console.log(e)
            next(apiError.badRequest(e.message))
        }
    }

    async addUserMessage(req,res, next){
        try {
            const {from_hex, to_hex, message} = req.body

            const resMessage = await Messages.create({from_hex,to_hex, message})
            return res.json(resMessage)
        } catch (e) {
            next(apiError.badRequest(e.message))
        }
    }
}

module.exports = new MessagesController()