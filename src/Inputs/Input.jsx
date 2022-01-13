import React,{useState} from 'react'
import './input.css'
const Input = (props) => {
    const [focused,setFocuse]=useState(false)
    return (
        <div className='input-container'>
            <div style={{display:'flex'}}>
            <label className='label'>{props.label}</label> 
            <div className='after'>{props.after}</div>
            </div>
            <input className='input' name={props.name} placeholder={props.placeholder} type={props.type } onChange={props.onChange} required={props.required} pattern={props.pattern} onBlur={(e)=>setFocuse(true)} focused={focused.toString()}/>
            <span >{props.errorMessage}</span>
        </div>
    )
}

export default Input

         
         