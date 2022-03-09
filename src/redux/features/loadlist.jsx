import { useDispatch } from "react-redux"

export function loadCurrentUser(){
    const list = [
        {
            id:Math.random(),
            title:'learn html',
            isComplected:false
        },
        {
            id:Math.random(),
            title:'learn css',
            isComplected:false
        }
    ]
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve({
                todo:list
            })
        },1500)
    })
}