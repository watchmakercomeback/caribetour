import './App.css';
import Participants  from './components/Participants';
import TextBanner from './components/TextBanner';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import PrizeZone from './components/PrizeZone';

const textInfo = `El Caribe Tour es un evento cultural que se celebra en la ciudad de Barranquilla, donde los restaurantes participantes se reúnen para presentar sus mejores propuestas gastronómicas. Los organizadores de Caribe Tour son propietarios de restaurantes comprometidos en exponer de manera significativa la esencia e individualidad de cada uno de los participantes.`
function App() {
  return (
    <div className='App'>
        <Header/>
        <Banner webImage='/assets/banner_principal.jpg' mobileImage='/assets/banner_principal_mobil.jpg' maxHeight='450px'/>
        <Participants/>
        <TextBanner text={textInfo} bgColor='#cea637' textColor='#224e67'/>
        {
          //<Banner webImage='/assets/banner_participantes.png' maxHeight='250px'/>
        }
        <PrizeZone/>
        <Footer/>
    </div>
  );
}

export default App;
