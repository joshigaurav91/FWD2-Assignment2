import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import ProductAdvisor from '../components/ProductAdvisor';
import CustomizePerOrder from '../components/CustomizePerOrder';
import About from '../components/About';
import Video from '../components/Video';
import Form from '../components/Form';
import UserEngage from '../components/UserEngage';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Nav />
        <ProductAdvisor/>
        <CustomizePerOrder/>
        <About/>
        <Video/>
        <Form/>
        <UserEngage/>
        <Footer />
      </div>
    </BrowserRouter>
    )
}

export default AppRouter;