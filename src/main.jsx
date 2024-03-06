import React from 'react'
import {createRoot} from 'react-dom/client'
import "./style.css"
import Header from './component/Header'
import Footer from './component/Footer'
import Center from './component/Center'


const root = document.getElementById("root")
createRoot(root).render(
  <div>
  <Header />
  <Center />
  <Footer />

  </div>


)
