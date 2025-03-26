import { useState } from "react"

let name
function App() {
  let [frmdata,setFrmdata] = useState()
  let [cou,setCou] = useState()
  let [con,setCon] = useState()
  let [age,setAge] = useState()
  let [tech,setTech] = useState()
  let [day,setDay] = useState()
 function Inputvalue(e){
console.log(e.target.value)
setFrmdata(e.target.value)
 }
 function Coursevalue(e){
  console.log(e.target.value)
  setCou(e.target.value)
 }
 function Contactvalue(e){
  console.log(e.target.value)
  setCon(e.target.value)
 }
 function Agevalue(e){
  console.log(e.target.value)
  setAge(e.target.value)
 }
 function Techvalue(e){
  console.log(e.target.value)
  setTech(e.target.value)
 }
 function Dayvalue(e){
  console.log(e.target.value)
  setDay(e.target.value)
 }

  return (
    <>
      <h1>Hello My name is : {frmdata} and my course is {cou} and my contact number is {con} and my age is {age} and my current technology is {tech} and today is {day}.</h1>
      <form action="">
        <label htmlFor="">Name</label>
        <input type="text" onChange={Inputvalue} />
        <br /><br />
        <label htmlFor="">Course</label>
        <input type="text" onChange={Coursevalue} />
        <br /><br />
        <label htmlFor="">Contact</label>
        <input type="text" onChange={Contactvalue}/>
        <br /><br />
        <label htmlFor="">age</label>
        <input type="text" onChange={Agevalue} />
        <br /><br />
        <label htmlFor="">Technology</label>
        <input type="text" onChange={Techvalue} />
        <br /><br />
        <label htmlFor="">Day</label>
        <input type="text" onChange={Dayvalue} />
        <br />
      </form>
    </>
  )
}

export default App
