import './App.css';
import Header from "./Header";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
// import { Route } from 'react-router-dom';

function App() {
  return (
    <body>
      <meta name="description" content="Little Lemon is a local Mediterranean restaurant focused on traditional recipes" />
      <meta property="og:title" content="Little Lemon Restaurant" />
      <meta property="og:description" content="Little Lemon is a local Mediterranean restaurant focused on traditional recipe" />
      <meta property="og:image" content="" />
      {/* <BrowserRouter>
        <Route path="/" element={<App/>}></Route>
        <Route path="/menu" element = {<Menu/>}></Route>
        <Route path="/booking" element={<ReservationPage/>}></Route>
        <Route path="/order" element={<Order/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </BrowserRouter> */}
      {/* <Nav/> */}
      <Header/>
      <Hero/>
      <Specials/>
      <Testimonials/>
      <Footer />
    </body>

  );
}

export default App;
