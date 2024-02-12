import Link from "next/link"
import Todi from "../components/Todi"

export default async function  PostsPage (){
  const response= await fetch('https://jsonplaceholder.typicode.com/posts',
  
  {
    cache:"no-store" //SSG static side generation :no store means no cashing for api 
  }
  //next: {
    //  revalidate :50  ISG increament side generation : cache for database of api for only 50sec and then ican rendering 
//  }
  
  )
  const posts = await  response.json()
  const mapping =  posts.map((post)=>{
    return(
      <Link href={`/Posts/${post.id}`}style={{background:"teal",padding:"20px",color:"wheat",marginTop:"20px" ,display:"block"}} key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </Link>
    )
  })   

  return(
    <div>
      <h1>posts page</h1>
  <div>
    {mapping}
  </div>
  <Todi/>
    </div>
  )
}