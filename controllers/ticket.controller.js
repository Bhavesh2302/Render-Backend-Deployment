
const {Router} = require("express")
const { authentication } = require("../middlewares/authentication")
const { TicketModel } = require("../models/ticket.model")

const ticketController = Router()

ticketController.get("/getTicket",authentication,async (req,res)=>{
   
   try {
    const { userId } = req.body;
    const tickets = await TicketModel.find({ userId });
    console.log(tickets)
    res.status(201).send({ "msg": "success", tickets:tickets });
    
   } catch (error) {
    res.status(401).send({"msg": "something went wrong"})
   }
   
})

ticketController.post("/createTicket",authentication,async (req,res)=>{
const {userId} =req.body
// console.log(userId)
try {
    const new_ticket = new TicketModel({...req.body,userId})
console.log(new_ticket)


await new_ticket.save();
res.status(201).send({"msg": "Ticket has been created" });

} catch (error) {
    res.status(401).send({"msg": "something went wrong"})
}

})


module.exports= {ticketController}