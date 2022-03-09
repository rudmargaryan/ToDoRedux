import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Dellet, GetList } from '../redux/features/todoReducer'
export function TodoFooter(){
    const list = useSelector(GetList)
    const dispatch = useDispatch()
    const checkeds = list.filter(e=>e.isComplected).length
    return(
        <div>
            {checkeds}/{list.length}
            <button onClick={()=>{
                dispatch(Dellet(list))
            }}>dellet</button>
        </div>
    )
}