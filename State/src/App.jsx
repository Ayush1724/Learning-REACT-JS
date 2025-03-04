import { useState } from "react"

function App() {
 let [name,setName] =useState("Ayush Shrivastava") 
 let [age,setAge]=useState(25)
 let [city,setCity]=useState("Bhopal")
 let [color,setColor]=useState("lightblue")
function fun(){
setName("Anuj Shrivastava")
}
function fun1(){
  setAge(28)
  }
  // function fun2(){
  //   setCity("Rajgarh")
  // }
  return (
    <>
     <div style={{height:"100vh",backgroundColor:color}}>
           <h1>My name is {name}</h1>
      <button onClick={fun}>Change Name</button>

      <h1>My age is {age} </h1>
      <button onClick={fun1}>Change Age</button>

      <h1>My city is {city}</h1>
      <button onClick={()=>setCity("Rajgarh")}>Change city</button>

      <button onClick={()=>setColor('red')}>red</button>
      <button onClick={()=>setColor('yellow')}>yellow</button>
      <button onClick={()=>setColor('blue')}>blue</button>
      <button onClick={()=>setColor('pink')}>pink</button>

     </div>

    </>
  )
}

export default App
