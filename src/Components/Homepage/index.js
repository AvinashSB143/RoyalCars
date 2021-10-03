import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navigation";
import RecommendedCars from "../Recommendation";
import AssuredBenifits from "../AssuredBenefits";
import Working from "../Working";
import LifeStyle from "../LifeStyle";


const HomePage = (props) => {
  const { validateUser } = props;
  return (
    <>
      <Header />
      <NavBar />
      <RecommendedCars />
      <AssuredBenifits />
      <Working />
      <LifeStyle />
      <Footer />
    </>
  );
};

export default HomePage;
