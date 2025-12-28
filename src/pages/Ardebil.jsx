import React from "react";
import { Helmet } from "react-helmet-async";
import HomePage from "../components/home";
import "./css/city.css"

const Ardabil = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "تیم طراحی سایت و برنامه نویسی ای اچ ام دوز",
    "image": "https://bright-pegasus-dbc666.netlify.app/static/media/logo.a700cd2e7ad84196c159.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "اردبیل، شهرک کارشناسان",
      "addressLocality": "اردبیل",
      "addressRegion": "IR-24",
      "postalCode": "5615821319",
      "addressCountry": "IR"
    },
    "telephone": "09227189079",
    "url": "https://ahmdevs.ir/ardabil"
  };

  return (
    <div>
      <Helmet>
        <title>طراحی سایت در اردبیل | فروشگاهی و بیزنسی</title>
        <meta
          name="description"
          content="طراحی سایت فروشگاهی و بیزنسی در اردبیل با React، سئو اصولی و سرعت بالا برای کسب‌وکارها"
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <HomePage />

      <section className="seo-only">
        <h1>طراحی سایت فروشگاهی و بیزنسی در اردبیل</h1>
        <p>
          ارائه خدمات طراحی سایت حرفه‌ای در اردبیل، مناسب کسب‌وکارهای محلی،
          با تمرکز بر سئو و سرعت بالا.
        </p>
      </section>
    </div>
  );
};

export default Ardabil;
