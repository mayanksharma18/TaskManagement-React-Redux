
let id=1;

function uniqueID(){
    return id++
}
    export  function createTask({title,description}){
        return {
            type:'CREATE_TASK',
            payload:{
                id:uniqueID(),
                title,
                description,
                status:'Unstarted'
                
            }
        }
    }

    export  function editTask({id,status}){

     return{
         type:"EDIT_TASK",
         payload:{
             id,
             status
         }
     }

    }