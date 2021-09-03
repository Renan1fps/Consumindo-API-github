
export default function Repository({match}){
    return(
        <div>
              <h1>Repository</h1>
              <h1>{decodeURIComponent(match.params.repository)}</h1>
        </div>
        
    )
}