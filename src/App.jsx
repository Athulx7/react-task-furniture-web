
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Featured from './components/Featured'
import Footer from './components/Footer'
import FooterEnd from './components/FooterEnd'
import FromBlog from './components/FromBlog'
import Header from './components/Header'
import Home from './components/Home'
import Image from './components/Image'
import PurchaseOnline from './components/PurchaseOnline'

function App() {
  

  return (
    <>
    

     <Header />
     <Routes >
      <Route path='/' element={<Home />} />
     </Routes>
     
     <Featured />
     <Image />
     <PurchaseOnline />
     <FromBlog />
     <Footer />
     <FooterEnd />
    </>
  )
}

export default App
