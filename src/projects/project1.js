import React from "react";
import "./projectDetails.css";



import heroImg from "../photos/project1.jpg";
import sectionImg from "../photos/service1.jpg";
import mobileImg from "../photos/section1.jpg";



const Project1 = () => {
return (
<section className="project-details">
{/* عنوان */}
<h1 className="project-title">پروژه طراحی وبسایت شرکتی</h1>


{/* معرفی کوتاه */}
<p className="project-intro">
این پروژه با هدف طراحی یک رابط کاربری مدرن، ساده و کاربرپسند انجام شد.
تمرکز اصلی بر تجربه کاربری، ریسپانسیو بودن و ساختار استاندارد صفحات بوده است.
</p>


{/* گالری تصاویر */}
<div className="project-gallery">
<div className="project-image">
<img src={heroImg} alt="نمای اصلی سایت" />
<span>نمای اصلی صفحه با تمرکز بر سادگی و خوانایی</span>
</div>


<div className="project-image">
<img src={mobileImg} alt="نسخه موبایل" />
<span>طراحی کاملاً ریسپانسیو در نسخه موبایل</span>
</div>


<div className="project-image">
<img src={sectionImg} alt="بخش خدمات" />
<span>چیدمان بخش خدمات با استفاده از CSS Grid</span>
</div>
</div>


{/* ویژگی‌ها */}
<div className="project-features">
<h3>ویژگی‌های پروژه</h3>
<ul>
<li>طراحی کاملاً ریسپانسیو (موبایل، تبلت، دسکتاپ)</li>
<li>رابط کاربری مدرن بر اساس اصول UI/UX</li>
<li>استفاده از CSS، Flexbox و Grid</li>
<li>ساختار کدنویسی تمیز و قابل توسعه</li>
<li>تمرکز بر تجربه کاربری و خوانایی محتوا</li>
</ul>
</div>


{/* تکنولوژی‌ها */}
<div className="project-tech">
<h3>تکنولوژی‌ها و مهارت‌ها</h3>
<p>CSS / Flexbox / Grid</p>
<p>UI/UX Design</p>
<p>Responsive Design</p>
</div>


{/* CTA */}
<div className="project-cta">
<h3>پروژه مشابه می‌خواهید؟</h3>
<p>برای مشاوره و ثبت سفارش با ما تماس بگیرید.</p>
<a href="/contact" className="contact-btn">تماس با ما</a>
</div>
</section>
);
};


export default Project1;