import { incompleteTask } from "./localStorage.js"
import node from './nodes.js'
export let count =  incompleteTask().length
export function pendingTask(){
    if(count != 1){
        node.taskPending.innerHTML = `<strong>${count}<strong/> items left`
    }
    else{
        node.taskPending.innerHTML = `<strong>${count}<strong/> item left`
    }
}
export function countPendingLogic(increase = false){
    if(increase){
        count++ 
        pendingTask()
    }
    else{
        count--
        pendingTask()
    }
}