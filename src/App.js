import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import Container from "react-bootstrap/Container";
import AppHeader from "./components/header/header";
import HomeContainer from "./components/home/home";
import TrustedBrand from "./components/trustedBrand/trustedBrand";

function App() {
  return (
    <Container fluid>
      <header id="header">
        <AppHeader />
      </header>
      <main>
        <HomeContainer />
        <TrustedBrand />
      </main>
    </Container>
  );
}

export default App;
