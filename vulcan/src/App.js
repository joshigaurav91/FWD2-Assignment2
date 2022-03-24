import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import './App1.css';
import ProductAdvisor from './components/ProductAdvisor';
import CustomizePerOrder from './components/CustomizePerOrder';
import About from './components/About';
import Video from './components/Video';
import Form from './components/Form';
import UserEngage from './components/UserEngage';

import './App.css';

function App() {
  return (
    <div className="wrapper">
      {/* <Header />
      <Nav />
      <Footer /> */}
    {/* <div className="App"> */}
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
