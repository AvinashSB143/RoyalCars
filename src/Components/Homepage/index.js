import Header from "../Header";
import Footer from "../Footer";
import NavBar from "../Navigation";
import RecommendedCars from "../Recommendation";
import AssuredBenifits from "../AssuredBenefits";
import Working from "../Working";


const HomePage = (props) => {
  const { validateUser } = props;
  return (
    <>
      <Header />
      <NavBar />
      <RecommendedCars />
      <AssuredBenifits />
      <Working />
      <Footer />
    </>
  );
};

export default HomePage;
