import {Container, Form, SubmitButton, List, DeleteButton} from './style'
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa'
import { useState, useCallback } from 'react'

import { api } from '../../services/api'

export default function Main(){
const [newRepo, setNewRepo]= useState('')
const [repositories, setRepositories]= useState([])
const [loading, setLoading]= useState(false)

const handleSubmit = useCallback((e)=>{
   e.preventDefault()
   async function submit(){
    setLoading(true)

    try{

    const response = await api.get(`repos/${newRepo}`)
    const data = {
      name: response.data.full_name
    }
    setRepositories([...repositories, data])
    setNewRepo('')
    }catch(error){
      console.log(error)
    }finally{
      setLoading(false)
    }
    
   }
  submit()
}, [newRepo, repositories])

function handleChangeInput(e){
  setNewRepo(e.target.value)
}

const handleDeleteRepository = useCallback((name)=>{
  const allRepositories = repositories.filter(repo => repo.name !== name)
  setRepositories(allRepositories)
},[repositories])
 
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
               <SubmitButton loading={loading ? 1 : 0 } >
                 {
                   loading ? ( 
                   <FaSpinner
                   color="#FFF"
                   size={14}
                   />
                   ) : (
                   <FaPlus 
                   color="#FFF" 
                   size={14}
                   />
                   )} 
               </SubmitButton>
             </Form>
             <List>
               {repositories.map(repo =>(
                   <li key={repo.name}>
                      <span>
                        <DeleteButton onClick={()=> handleDeleteRepository(repo.name)}>
                           <FaTrash color="#ff0303" size={14}/>
                        </DeleteButton>
                        {repo.name}
                      </span> 
                      <a href="*">
                        <FaBars size={20}/>
                      </a>
                   </li>
               ))}

             </List>
        </Container>
    )
}