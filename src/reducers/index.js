
const tasks=[]
export default function task(state={tasks},action){
   const {payload}=action
   console.log(payload)
     switch(action.type){
        case 'CREATE_TASK':
        return {
            tasks:state.tasks.concat(payload)
        }
        case 'EDIT_TASK':
        return{
            tasks:state.tasks.map(task=>{
                if(task.id==parseInt(payload.id)){
                    return {...task,status:payload.status}
                }
                return task
            })
        }
        default:
        return state
    }
    
}