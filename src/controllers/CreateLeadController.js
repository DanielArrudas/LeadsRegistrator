const database = require('../database/connection');

class CreateLeadController {
    newLead(request, response){
        const {nome, email, cargo, empresa, telefone} = request.body;

        console.log(nome, email, cargo, empresa, telefone);

        database.insert({nome, email, cargo, empresa, telefone}).table('leads').then(data=>{
            console.log(data)
            response.json({message:'Lead inserido com sucesso!'})
        }).catch(error=>{
            console.log(error)
        });
    }
}

module.exports = new CreateLeadController();