import { useState } from 'react'


function App() {
  let [frmdata, setFrmdata] = useState({
    username:"",age:"",contact:"",course:"",tech:""
  })

  function Inputvalue(e){
    const {name,value}=e.target
    setFrmdata({...frmdata,[name]:value})
  }

  function finalsubmit(e){
    e.preventDefault()
    console.log(frmdata)
    localStorage.setItem("userdata",JSON.stringify(frmdata))
  }

  return (
    <>
       <h1>Hello : {frmdata.username} age : {frmdata.age} Contact : {frmdata.contact} course : {frmdata.course} tech : {frmdata.tech}</h1>

      <form onSubmit={finalsubmit}>
        <label htmlFor="">Name</label>
        <input type="text" name="username" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Age</label>
        <input type="text" name="age" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" name="contact" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Course</label>
        <input type="text" name="course" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Technology</label>
        <input type="text" name="tech" onChange={Inputvalue} />
        <br /><br />

        <input type="submit" />
      </form>
    </>
  )
}

export default App
