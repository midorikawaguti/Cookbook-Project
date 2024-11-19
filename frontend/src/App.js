import Header from "./components/Header";
import { Container, ToastContainer } from 'react-bootstrap'
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";


function App() {
  return <>
      <Header/>
      <main className='py-3'>
        <Container>
          <Outlet/>
        </Container>
      </main>
      <Footer/>
      <ToastContainer/>
    </>
}

export default App;
