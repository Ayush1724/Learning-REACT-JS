import { useState } from 'react'


function App() {
  let [frmdata, setFrmdata] = useState({
    username:"",age:"",contact:""
  })

  function Inputvalue(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
  }

  return (
    <>
      <h1>Hello : {frmdata.username} age : {frmdata.age} Contact : {frmdata.contact} </h1>

      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" name="username" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name="age" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name="contact" onChange={Inputvalue} />
        <br /><br />

        <input type="submit" />
      </form>
    </>
  )
}

export default App
