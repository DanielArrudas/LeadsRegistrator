const database = require('../database/connection');

class ListLeadController {
    listLeads(request, response){
        database.select('*').table('leads').then(tarefas=>{
            console.log(tarefas)
            response.json(tarefas)
        }).catch(error=>{
            console.log(error)
        })
    }
}

module.exports = new ListLeadController();