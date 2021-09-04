import { Container, Owner, Loading, BackButton, IssueSList } from "./style.js"
import { useState, useEffect} from "react"
import { api } from "../../services/api"
import carregando from "./loadNaruto.gif"
import { FaArrowLeft } from "react-icons/fa"

export default function Repository({match}){
    const [repository, setRepository]= useState({})
    const [commits, setCommits]= useState([])
    const [loading, setLoading]= useState(true)

    useEffect(()=>{

        async function load(){
            const nameRepo = decodeURIComponent(match.params.repository)
            const [repositoryData, commitsData] = await Promise.all([
                api.get(`/repos/${nameRepo}`),
                api.get(`repos/${nameRepo}/commits`, {
                    params:{
                        state: 'open',
                        per_page: 5
                    }
                })
            ])
            setRepository(repositoryData.data)
            setCommits(commitsData.data)
            setLoading(false)

        }
        load()
    },[match.params.repository])

    if(loading){
        return(
            <Loading>
                <img src={carregando} alt="carregando"/>
                <h1>Loading...</h1>
            </Loading>
        )

    }

    return(
        <Container>
            <BackButton to="/">
                  <FaArrowLeft style={{color: "#ffffff"}} size={20}/>
            </BackButton>
              <Owner>
                  <img 
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                  />
                  <h1>{repository.name}</h1>
                  <p>{repository.description ? repository.description : "Repository without description"}</p>
              </Owner>
              <IssueSList>
                  {commits.map(commit=>(
                      <li key={commit.sha}>
                          <img src={commit.author.avatar_url} alt={commit.author.login}/>
                          <p>{commit.commit.message}</p>
                          
                      </li>
                  ))}
              </IssueSList>
        </Container>
        
    )
}