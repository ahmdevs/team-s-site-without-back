import React from "react";
import "./projectDetails.css";

import heroImg from "../photos/project2.jpg";
import mobileImg from "../photos/mobile2 (1).jpg";
import productImg from "../photos/shop-product.jpg";
import cartImg from "../photos/shop-cart1.jpg";

const Project2 = () => {
  return (
    <section className="project-details">
      {/* عنوان */}
      <h1 className="project-title">پروژه طراحی فروشگاه اینترنتی</h1>

      {/* معرفی کوتاه */}
      <p className="project-intro">
        این پروژه با هدف طراحی و پیاده‌سازی یک فروشگاه اینترنتی مدرن انجام شد.
        تمرکز اصلی بر تجربه کاربری، دسترسی سریع به محصولات و فرآیند خرید ساده
        و قابل‌اعتماد بوده است.
      </p>

      {/* گالری تصاویر */}
      <div className="project-gallery">
        <div className="project-image">
          <img src={heroImg} alt="صفحه اصلی فروشگاه" />
          <span>نمای اصلی فروشگاه با چیدمان منظم محصولات</span>
        </div>

        <div className="project-image">
          <img src={productImg} alt="صفحه محصول" />
          <span>صفحه جزئیات محصول با اطلاعات کامل و خوانا</span>
        </div>

        <div className="project-image">
          <img src={cartImg} alt="سبد خرید" />
          <span>طراحی ساده و کاربردی سبد خرید</span>
        </div>

        <div className="project-image">
          <img src={mobileImg} alt="نسخه موبایل فروشگاه" />
          <span>طراحی کاملاً ریسپانسیو برای موبایل</span>
        </div>
      </div>

      {/* ویژگی‌ها */}
      <div className="project-features">
        <h3>ویژگی‌های پروژه</h3>
        <ul>
          <li>طراحی فروشگاه اینترنتی با تمرکز بر تجربه کاربری</li>
          <li>نمایش منظم محصولات و دسته‌بندی‌ها</li>
          <li>فرآیند خرید ساده و قابل فهم</li>
          <li>طراحی کاملاً ریسپانسیو (موبایل، تبلت، دسکتاپ)</li>
          <li>کدنویسی تمیز با استفاده از CSS، Flexbox و Grid</li>
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
        <h3>فروشگاه اینترنتی می‌خواهید؟</h3>
        <p>
          برای طراحی فروشگاه آنلاین اختصاصی و متناسب با نیاز کسب‌وکار شما،
          با ما تماس بگیرید.
        </p>
        <a href="/contact" className="contact-btn">
          تماس با ما
        </a>
      </div>
    </section>
  );
};

export default Project2;
