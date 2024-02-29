import AboutMe from "../AboutMe/AboutMe";
import AboutProject from "../AboutProject/AboutProject";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Navigate from "../Navigate/Navigate";
import Portfolio from "../Portfolio/Portfolio";
import Promo from "../Promo/Promo";
import Techs from "../Techs/Techs";

function Main({onEditMenu}) {
  return (
    <>
      <header>
        <Header onEditMenu={onEditMenu}/>
      </header>
      <main>
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Main;