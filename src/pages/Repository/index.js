import { Container } from "./style.js"
import { useState, useEffect} from "react"
import { api } from "../../services/api"

export default function Repository({match}){
    const [repository, setRepository]= useState({})
    const [issues, setIssues]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{

        async function load(){
            const nameRepo = decodeURIComponent(match.params.repository)
            const [repositoryData, issuesData] = await Promise.all([
                api.get(`/repos/${nameRepo}`),
                api.get(`repo/${nameRepo}/issues`, {
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ])
            setRepository(repositoryData.data)
            setIssues(issuesData.data)
            setLoading(false)

        }
        load()
    },[match.params.repository])

    return(
        <Container>
              <h1>Repository</h1>
              <h1>{decodeURIComponent(match.params.repository)}</h1>
        </Container>
        
    )
}