export default async function PostDetails({postId}){
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
  {
    cache:"no-store" //SSG static side generation :no store means no cashing for api 
  }
  )
  const postData = await post.json()
  return(
    <>
    <div style={{background:"teal",padding:"20px",color:"wheat",marginTop:"20px" ,display:"block"}}>

    <h2>{postData.title}</h2>
    <h3>{postId}</h3>
    <p>{postData.body}</p>
    </div>
    </>
  )
}