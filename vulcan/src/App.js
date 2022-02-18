import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import About from './components/About';
import Video from './components/Video';
import Form from './components/Form';
import UserEngage from './components/UserEngage';

import './App.css';

function App() {
  return (
    <div className="wrapper">
       <Header /> 
       <Nav /> 

      <About />
      <Video />
      <Form />
      <UserEngage />
      <Footer />
    </div>
  ); 
}

export default App;
