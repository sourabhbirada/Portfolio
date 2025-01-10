import { useState } from 'react'
import './index.css'
import Header from './componet/Header.jsx';
import Body from './componet/Body.jsx'
import Footer from './componet/Footer.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Body/>
      <Footer/>
    </>
  )
}

export default App
