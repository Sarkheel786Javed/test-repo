
import Layout from './layout/Layout'
import HomePage from './Components/Homepage/HomePage'
import Skills from './Components/Skills/Skills'
import About from './Components/Aboutus/About'
import Contact from './Components/Contactus/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <div className=''>
      <BrowserRouter
      //  basename="/Sarkheel786Javed/Portfolio/"
       >
      <Routes>
        <Route  path='/' element={<Layout><HomePage/></Layout>}/>
        <Route  path='/skills' element={<Layout><Skills/></Layout>}/>
        <Route  path='/about-us' element={<Layout><About/></Layout>}/>
        <Route  path='/contact-us' element={<Layout><Contact/></Layout>}/>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
