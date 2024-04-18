import { Helmet } from "react-helmet-async";
import Bannar from "./Bannar";
import EstateCards from "./EstateSection/EstateCards";


const Home = () => {
    return (
        <div>
            <Helmet>
              <title>
                Luxury estate/Home
              </title>
            </Helmet>
            <Bannar></Bannar>
            <EstateCards></EstateCards>
        </div>
    );
};

export default Home;