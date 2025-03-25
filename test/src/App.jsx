import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='sec1'>
      <nav>
        <ul>logo</ul>
        <ul className='ul1'>
          <li>home</li>
          <li>About</li>
          <li>services</li>
          <li> cart {count}</li>
          </ul>
      </nav>
    </div>
    <div className='sec2'>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo exercitationem eaque incidunt ducimus odit alias in itaque, ratione velit reprehenderit praesentium debitis doloribus dolores vitae saepe magnam beatae fuga autem.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae quas velit inventore, accusamus molestias odit neque doloremque earum, fugit iste repellat iure, incidunt culpa esse hic architecto? Quasi, odio laboriosam!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error fugit harum sit eligendi delectus accusantium impedit accusamus modi nemo praesentium culpa, deleniti, quia quod aliquam, voluptatum dolor perspiciatis natus! Ab?
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae impedit nihil ullam quibusdam expedita ratione dolor adipisci laboriosam aut, ea eius facilis? Placeat nostrum ad id laudantium sunt delectus?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eum dolores, totam accusamus numquam, tenetur, cum in maxime a perferendis enim minus? Minus ab enim tempora eveniet ea vero harum.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae tempore quasi minima quod dicta assumenda ea soluta. Magni et voluptates cum harum enim, voluptas quaerat culpa eum, quibusdam esse adipisci!
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis est nisi, dolor nulla maxime soluta hic voluptatum voluptatibus aliquid tenetur, sequi doloribus consectetur deserunt excepturi mollitia animi voluptas, illum officiis!
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex labore harum architecto unde doloremque quod, repellendus molestias officia molestiae numquam iusto natus? Exercitationem repellendus, quas quod labore necessitatibus laudantium debitis?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eligendi officiis, voluptate voluptates repellat repellendus accusamus ullam iste maiores reprehenderit obcaecati adipisci possimus incidunt dicta mollitia numquam. Nihil, quod. A.
      <img src="p1.jpg" alt=""  height="300"/>
    </div>
    <div className='sec3'>
      <h1 align="center"><button> Product list</button></h1>
    </div>
    <div className='sec5'>
      <img src="p1.jpg" alt="" height={300}/>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <button onClick={()=>setCount(count-1)}>-</button>

    </div>
    <div className='sec4'>
      <footer>
        <ul>
          <li>Help</li>
          <li>Help</li>
          <li>Help</li>
          <li>Help</li>
          <li>Help</li>
        </ul>
        <ul>
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
        </ul>
      </footer>
    </div>
    </>
  )
}

export default App
