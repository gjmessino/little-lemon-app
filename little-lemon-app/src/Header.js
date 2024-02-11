
import Nav from "./Nav"
function Header() {
    return (
      <header class = "container" id = "header">
        <img src="public/lemonlogo.jpg" alt="Little Lemon Logo"/>
        <Nav/>
      </header>
    );
  }

  export default Header;