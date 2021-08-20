import {Container, Form, SubmitButton} from './style'
import { FaGithub, FaPlus } from 'react-icons/fa'

export default function Main(){
    return(
        <Container>
             <h1>
              <FaGithub size={25}/>     
               My repositories
            </h1>

             <Form onSubmit={()=>{}} >
               <input type="text" placeholder="Add repository"/>
               <SubmitButton>
               
               </SubmitButton>
             </Form>
        </Container>
    )
}