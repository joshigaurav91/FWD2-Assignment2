import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <Footer />
      </div>
    </BrowserRouter>
    )
}

export default AppRouter;