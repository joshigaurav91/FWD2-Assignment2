import Header from './components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import ProductAdvisor from './components/ProductAdvisor';
import CustomizePerOrder from './components/CustomizePerOrder';
import About from './components/About';
import UserEngage from './components/UserEngage';
import Video from './components/Video';
import Form from './components/Form';
import './App1.css';
import './App.css';
import './About.css'
import './Form.css'
import './UserEngage.css'
import './Video.css'

function App() {
  return (
    <div className="App">     
        <Header />
        <Nav />
        <ProductAdvisor />
        <CustomizePerOrder />
        <About />
        <Video />
        <Form />
        <UserEngage />               
        <Footer />
    </div>
  );
}

export default App;
