import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import AppProvider from './context'
function App() {
  return (
    <>
    <Home />
    <Modal />
    <Sidebar />
    </>
  )
}

export default App
