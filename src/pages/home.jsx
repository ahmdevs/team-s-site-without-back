import HomePage from "../components/home";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>طراحی سایت فروشگاهی و بیزنسی | اردبیل و تبریز</title>
        <meta
          name="description"
          content="طراحی سایت فروشگاهی و بیزنسی با React، مناسب کسب‌وکارها در اردبیل و تبریز با سئو اصولی، سرعت بالا و طراحی حرفه‌ای"
        />
        <meta
          name="google-site-verification"
          content="nXLHH6mMNJxt44VDVAVwmV2jBUqoJYR10YhMDOzcVPw"
        />
      </Helmet>

      <HomePage />
    </div>
  );
};

export default Home;
