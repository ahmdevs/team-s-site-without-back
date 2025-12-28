import "./home.css";
// import heroImg from "../photos/hero.png"; 
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home">

      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        {/* H1 سئویی برای گوگل، مخفی برای کاربران */}
        <h1 style={{ display: "none" }}>
          طراحی سایت فروشگاهی و بیزنسی در اردبیل و تبریز
        </h1>

        <div className="hero-content">
          <h1>آینده دیجیتال کسب‌وکارت از اینجا شروع می‌شود</h1>
          <p>
            ما با طراحی مدرن، توسعه حرفه‌ای و استراتژی دقیق، بهترین تجربه
            دیجیتال را برای برند شما می‌سازیم.
          </p>

          {/* متن سئویی زیر Hero */}
          <p>
            ما خدمات طراحی سایت فروشگاهی و بیزنسی را با استفاده از React و تکنولوژی‌های روز
            برای کسب‌وکارهای اردبیل و تبریز ارائه می‌دهیم. تمرکز ما بر سرعت، سئو اصولی
            و طراحی حرفه‌ای است تا سایت شما در نتایج گوگل دیده شود.
          </p>

          <div className="hero-btns">
            <Link to="/services" className="btn">مشاهده خدمات</Link>
            <Link to="/contact" className="btn-outline">ارتباط با ما</Link>
          </div>
        </div>

        <div className="hero-img">
          {/* <img src={heroImg} alt="digital" /> */}
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about1">
        <h2>طراحی سایت و خدمات دیجیتال حرفه‌ای</h2>
        <p>
          یک تیم خلاق و حرفه‌ای هستیم که در زمینه طراحی سایت، توسعه نرم‌افزار،
          برندینگ و دیجیتال مارکتینگ فعالیت می‌کنیم. هدف ما ساختن تجربه‌ای
          حرفه‌ای و متفاوت برای رشد دیجیتال شما در اردبیل و تبریز است.
        </p>
      </section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section className="services1">
        <h2>خدمات طراحی سایت ما</h2>

        <div className="service-grid">
          <div className="service-box">
            <h3>طراحی و توسعه وب</h3>
            <p>طراحی سایت‌های مدرن، ریسپانسیو و سازگار با جدیدترین استانداردها.</p>
          </div>

          <div className="service-box">
            <h3>دیجیتال مارکتینگ</h3>
            <p>افزایش دیده‌شدن برند با استراتژی تبلیغاتی هدفمند و حرفه‌ای.</p>
          </div>

          <div className="service-box">
            <h3>طراحی UI / UX</h3>
            <p>طراحی تجربه کاربری جذاب و رابط کاربری چشم‌نواز با رویکرد تولید محتوا.</p>
          </div>
        </div>
      </section>

      {/* ---------- WHY US SECTION ---------- */}
      <section className="whyus">
        <h2>چرا انتخاب ما؟</h2>

        <div className="whyus-grid">
          <div className="why-box">تحویل سریع پروژه</div>
          <div className="why-box">پشتیبانی کامل</div>
          <div className="why-box">طراحی کاملاً اختصاصی</div>
          <div className="why-box">تجربه و تخصص بالا</div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="cta">
        <h2>آماده‌ای کسب‌وکارت رو ارتقا بدی؟</h2>
        <p>همین حالا با ما تماس بگیر تا بهترین پیشنهاد متناسب با نیازت رو بدیم.</p>

        <Link to="/contact" className="btn cta-btn">شروع همکاری</Link>
      </section>

    </div>
  );
};

export default HomePage;
