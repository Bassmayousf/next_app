

export const metadata = {
  title: " next.js nested routing",
  description: "Generated by create next app",
};

export default function layout ({children}){
  
  return(
    <>
    <h1>Layout for artcles</h1>
    <div style={{background:"blue",marginTop:'20px',padding:'20px'}}>
      {children}
    </div>
    </>
  )
}