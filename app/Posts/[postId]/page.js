
import PostDetails from "@/app/components/PostDetails"
import { Suspense } from "react"
export default  function targtPost({params}){
  // Id = params.postId
  const loadingjsx = <div><h2>loading...</h2></div>
  return(
    <>

    <h2>PostDetailes</h2>
<Suspense fallback ={loadingjsx}>
<PostDetails postId={params.postId}/>

  </Suspense>    
    </>
  )
}