import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { ToastContainer } from 'react-toastify';
import Header from "./Components/Header"

function App() {

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />
    </>
  )
}

export default App
