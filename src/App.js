import Header from './Components/Header'
import Footer from './Components/Footer'
import './bootstrap.min.css'
import {Container} from 'react-bootstrap'
function App() {
  return (
    
      <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to Merchandize</h1>
        </Container>
      </main>
      <Footer />
    </>

   
  );
}

export default App;
