import React from "react";
import "./sample.css";
import { portfolioItems } from "./portfolio";
import { Link } from "react-router-dom";

const Sample = () => {
return (
<section className="portfolio-section">
<h2 className="portfolio-title">نمونه کارهای ما</h2>


<div className="portfolio-grid">
{portfolioItems.map((item) => (
<div key={item.id} className="portfolio-card">
<div className="portfolio-image">
<img src={item.image} alt={item.title} />
</div>


<div className="portfolio-content">
<h3>{item.title}</h3>
<p>{item.description}</p>
<Link to={item.link} className="portfolio-btn">
  مشاهده جزئیات
</Link>

</div>
</div>
))}
</div>
</section>
);
};


export default Sample;