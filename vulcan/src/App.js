import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
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
