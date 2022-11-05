
const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({

Category:{ type: String, required: true },
Title:{ type: String, required: true },
Message:{ type: String, required: true },
userId:{type:String},
Date: {type:Date,default: Date.now()},

},{timestamps : true}
)

const TicketModel = mongoose.model("masaiTicket",ticketSchema)

module.exports ={TicketModel}