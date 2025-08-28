import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from "./Components/Header"
import HomePage from './Components/HomePage'

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
      <HomePage  />
    </>
  )
}

export default App
