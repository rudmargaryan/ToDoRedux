import React from 'react'
import { useSelector } from 'react-redux';
import { GetList } from '../redux/features/todoReducer';
import { Todoitem } from './todoitem'


export function Todolist(){
    const list = useSelector(GetList)
    return(
        <div>
            {list.map(e=>{
                return <Todoitem key={e.id} item={e}/>
            })}
        </div>
    )
}