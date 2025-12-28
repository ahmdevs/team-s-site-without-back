import React from "react";
import "./projectDetails.css";

import heroImg from "../photos/project3.jpg";
import mobileImg from "../photos/mobile3.jpg";
import servicesImg from "../photos/service3.jpg";
import aboutImg from "../photos/about3.jpg";

const Project3 = () => {
  return (
    <section className="project-details">
      {/* عنوان */}
      <h1 className="project-title">پروژه طراحی وبسایت معرفی خدمات</h1>

      {/* معرفی کوتاه */}
      <p className="project-intro">
        این پروژه با هدف معرفی خدمات یک مجموعه و ایجاد یک حضور آنلاین حرفه‌ای
        طراحی و پیاده‌سازی شد. تمرکز اصلی بر سادگی، وضوح محتوا و هدایت درست
        کاربر به بخش‌های کلیدی سایت بوده است.
      </p>

      {/* گالری تصاویر */}
      <div className="project-gallery">
        <div className="project-image">
          <img src={heroImg} alt="صفحه اصلی سایت" />
          <span>طراحی صفحه اصلی با تمرکز بر معرفی خدمات</span>
        </div>

        <div className="project-image">
          <img src={servicesImg} alt="بخش خدمات" />
          <span>چیدمان منظم بخش خدمات برای دسترسی سریع کاربران</span>
        </div>

        <div className="project-image">
          <img src={aboutImg} alt="درباره ما" />
          <span>صفحه درباره ما با ساختار ساده و خوانا</span>
        </div>

        <div className="project-image">
          <img src={mobileImg} alt="نسخه موبایل سایت" />
          <span>طراحی ریسپانسیو و بهینه برای موبایل</span>
        </div>
      </div>

      {/* ویژگی‌ها */}
      <div className="project-features">
        <h3>ویژگی‌های پروژه</h3>
        <ul>
          <li>طراحی وبسایت معرفی خدمات با ساختار حرفه‌ای</li>
          <li>تمرکز بر تجربه کاربری و دسترسی آسان به محتوا</li>
          <li>رابط کاربری ساده و مدرن مطابق اصول UI/UX</li>
          <li>طراحی کاملاً ریسپانسیو برای تمام دستگاه‌ها</li>
          <li>پیاده‌سازی با CSS، Flexbox و Grid</li>
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
        <h3>وبسایت معرفی خدمات می‌خواهید؟</h3>
        <p>
          برای طراحی یک وبسایت حرفه‌ای و متناسب با کسب‌وکار شما،
          از طریق بخش تماس با ما در ارتباط باشید.
        </p>
        <a href="/contact" className="contact-btn">
          تماس با ما
        </a>
      </div>
    </section>
  );
};

export default Project3;
