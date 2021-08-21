import {Container, Form, SubmitButton} from './style'
import { FaGithub, FaPlus } from 'react-icons/fa'
import { useState, useCallback } from 'react'

import { api } from '../../services/api'

export default function Main(){
const [newRepo, setNewRepo]= useState('')
const [repositories, setRepositories]= useState([])
console.log(repositories)

const handleSubmit = useCallback((e)=>{
   e.preventDefault()
   async function submit(){
    
    const response = await api.get(`repos/${newRepo}`)
    const data = {
      name: response.data.full_name
    }
    setRepositories([...repositories, data])
    setNewRepo('')
   }
  submit()
}, [newRepo, repositories])

function handleChangeInput(e){
  setNewRepo(e.target.value)
}

    return(
        <Container>
             <h1>
              <FaGithub 
               size={25}
              />     
               My repositories
            </h1>

             <Form onSubmit={handleSubmit} >
                 <input
                 type="text" 
                 placeholder="Add repository"
                 value={newRepo}
                 onChange={handleChangeInput}
               />
               <SubmitButton>
                   <FaPlus 
                   color="#FFF" 
                   size={14}
                   />
               </SubmitButton>
             </Form>
        </Container>
    )
}