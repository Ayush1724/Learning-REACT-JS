import Myimg from './p4.jpg'
import './App.css'
function App() {
let name="Ayush"
let age = 25
let st ={
  color:"yellow",
  backgroundColor:"Black",
  padding:"30px"
}
  return (
    <div>
      <nav className='nav'>
        <ul>home</ul>
        <ul>contact</ul>
        <ul>address</ul>
        <ul>help</ul>
      </nav>
      <h1 style={{backgroundColor:"blue",color:"white",padding:20}}>Welcome to React class</h1>
      <p style={{backgroundColor:"orange",color:"Blue"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique laboriosam minima maxime architecto voluptatibus. Magnam repudiandae odio, aut voluptas suscipit obcaecati illum velit! Commodi natus fuga praesentium at minima officiis.
      </p>
      <div className='im'>
      <img src={Myimg} alt="" height="300px" />
      <img src={Myimg} alt="" height="300px" />
      <img src={Myimg} alt="" height="300px" />
      <img src={Myimg} alt="" height="300px" />

      </div>
      
      <h1 style={st}>My name is {name}</h1>
      <h1 className='ex'>My age is {age}</h1>
    </div>
  )
}

export default App
