import Event from "./events"
function App() {
  let name ="Ayush"
  // let name =prompt("Enter your name")
  let ob ={
    fname:"Anuj",
    lname:"Shrivastava",
    age:25,
    course:"FSD",
    Position:"Developer"
  }

  let arr =[
    "Ayush","Anuj","Ram","Sham","Shivam","Uday","Guddu"
  ]
  return (
    <>
    <h1>welcome {name}</h1>
    <h1>my name is {ob.fname} {ob.lname} my age is {ob.age} and course {ob.course} and my position is {ob.Position}</h1>
    <h1>my name is {arr[0]}</h1>
    <h1>my name is {arr[1]}</h1>
    <h1>my name is {arr[2]}</h1>
    <h1>my name is {arr[3]}</h1>
    <h1>my name is {arr[4]}</h1>
    <h1>my name is {arr[5]}</h1>
    <h1>my name is {arr[6]}</h1>
    <Event/>
    </>
  )
}

export default App
