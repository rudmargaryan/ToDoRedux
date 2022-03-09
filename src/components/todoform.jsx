import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../redux/features/todoReducer'

export function ToDoForm({onadd}){
    const [text,setText] = useState('')
    const add = useDispatch()
    return(
        <form onSubmit={
            e=>{
                e.preventDefault()
                add(addtodo(text))
            }
        }>
            <input type="text" value={text} onChange={e=>setText(e.target.value)} />
            <button>add</button>
        </form>
    )    
}