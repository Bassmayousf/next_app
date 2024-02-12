"use client"
import { useState, useEffect} from "react"


import React from 'react';

const Todi = () => {
  const [todo,setTodo] = useState({})
  const get =async()=>{
    const response =await  fetch('https://jsonplaceholder.typicode.com/todos/3')
    const data = await response.json()
    setTodo(data)
  }
  useEffect(()=>{
  get()
  
  
  },[])
    return(
      <>
      <h1>{todo.title}</h1>
      </>
    )
}

export default Todi;
