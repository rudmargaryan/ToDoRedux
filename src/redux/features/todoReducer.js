import { loadCurrentUser } from "./loadlist"


export function todoReducer(state={},action){
    if(action.type === 'add'){
        return[
            ...state,
            {
                id:Math.random(),
                title:action.title,
                isComplected:false
            }
        ]
    }else if(action.type === 'check'){
        const newStates = state.map(e=>{
            if(e.id === action.item.id){
                return{
                    ...e,
                    isComplected:!action.item.isComplected
                }
            }else{
                return e
            }
        })
        return newStates
    }else if(action.type === 'dellElement'){
        return state.filter(e=>e.id !== action.item.id)
    }else if(action.type === 'dellet'){
       return state.filter(e=>!e.isComplected)
    }else if(action.type === 'load'){
        return action.payload.todo
    }
    return state
}
export const list = [
    {
        id:Math.random(),
        title:'learn html',
        isComplected:false
    },
    {
        id:Math.random(),
        title:'learn css',
        isComplected:false
    },
    {
        id:Math.random(),
        title:'learn js',
        isComplected:false
    }   
]

export function GetList(state){
    return state.todo
}

export function addtodo(title){
    return {
       type:'add',
       title:title
    }   
}

export function checkIs(item){
    return{
        type:'check',
        item:item
    }
}

export function Del(item){
    return{
        type:'dellElement',
        item:item
    }
}

export function Dellet(list){
    return{
        type:'dellet',
        payloads:{
            
        }
    }
}


export function loadlist(){
    return (dispatch,getState) =>{
        return loadCurrentUser().then((loadedlist)=>{
            dispatch({
                type:'load',
                payload:loadedlist
            })
        })
    }
}