import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import Footer from '../src/components/Footer';
import './App.css';
import ProductAdvisor from './components/ProductAdvisor';
import CustomizePerOrder from './components/CustomizePerOrder';

function App() {
  return (
    <div className="App">
        <Header />
        <Nav />
        <ProductAdvisor />
        <CustomizePerOrder />
        <Footer />
    </div>
  );
}

export default App;
