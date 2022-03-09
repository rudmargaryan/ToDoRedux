import React from 'react'
import { useDispatch } from 'react-redux'
import { checkIs, Del } from '../redux/features/todoReducer'

export function Todoitem({item}){
    const dispatch = useDispatch()
    return(
       <div className="item">
            <input type="checkbox" value={item.isComplected} onChange={e=>{
                dispatch(checkIs(item))
            }}/>
            {item.title}
            <button onClick={()=>{
                dispatch(Del(item))
            }}>x</button>
       </div>
    )
}