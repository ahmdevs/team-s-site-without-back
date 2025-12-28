import React from "react";
import { Helmet } from "react-helmet-async";
import HomePage from "../components/home";
import "./css/city.css"

const Tabriz = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "تیم طراحی سایت و برنامه نویسی ای اچ ام دوز",
    "image": "https://ahmdevs.ir/static/media/logo.a700cd2e7ad84196c159.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "تبریز شهرک اندیشه",
      "addressLocality": "تبریز",
      "addressRegion": "IR-03",
      "postalCode": "5115831319",
      "addressCountry": "IR"
    },
    "telephone": "09227189079",
    "url": "https://ahmdevs.ir/tabriz"
  };

  return (
    <div>
      <Helmet>
        <title>طراحی سایت در تبریز | فروشگاهی و بیزنسی</title>
        <meta
          name="description"
          content="طراحی سایت فروشگاهی و بیزنسی در تبریز با React، سئو حرفه‌ای و سرعت بالا برای کسب‌وکارها"
        />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <HomePage />

      <section className="seo-only">
        <h1>طراحی سایت فروشگاهی و بیزنسی در تبریز</h1>
        <p>
          ارائه خدمات طراحی سایت حرفه‌ای در تبریز، مناسب کسب‌وکارهای محلی،
          با تمرکز بر سئو و تجربه کاربری عالی.
        </p>
      </section>
    </div>
  );
};

export default Tabriz;
