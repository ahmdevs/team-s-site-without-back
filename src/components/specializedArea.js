import React from "react";
import "./specializedArea.css";

const specializedAreas = [
  {
    id: 1,
    title: "توسعه وب",
    description:
      "طراحی و پیاده‌سازی وبسایت‌های مدرن و واکنشگرا با استفاده از جدیدترین تکنولوژی‌ها. از تجربه کاربری تا بهینه‌سازی سرعت و امنیت، همه چیز تحت پوشش است.",
    icon: "💻",
    bgColor: "#E3F2FD", // رنگ ملایم پس‌زمینه هر بلوک
  },
  {
    id: 2,
    title: "طراحی گرافیک",
    description:
      "ایجاد هویت بصری قوی برای برندها، طراحی لوگو، بروشور و محتواهای گرافیکی جذاب که چشم کاربر را جذب می‌کند.",
    icon: "🎨",
    bgColor: "#FCE4EC",
  },
  {
    id: 3,
    title: "بازاریابی دیجیتال",
    description:
      "کمک به رشد برند شما از طریق تبلیغات آنلاین، مدیریت شبکه‌های اجتماعی و کمپین‌های هدفمند.",
    icon: "📈",
    bgColor: "#FFF3E0",
  },
  {
    id: 4,
    title: "SEO و بهینه‌سازی",
    description:
      "بهینه‌سازی وبسایت برای موتورهای جستجو و افزایش بازدید و رتبه سایت به شکل طبیعی و پایدار.",
    icon: "🔍",
    bgColor: "#E8F5E9",
  },
];

const SpecializedArea = () => {
  return (
    <section className="specialized-hero-section">
      <h2 className="specialized-title">حوزه‌های تخصصی ما</h2>
      <div className="specialized-hero-container">
        {specializedAreas.map((area) => (
          <div
            key={area.id}
            className="specialized-hero-card"
            style={{ backgroundColor: area.bgColor }}
          >
            <div className="specialized-hero-icon">{area.icon}</div>
            <div className="specialized-hero-content">
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </div>
          </div>
        ))}
        <a href="/samplework" className="bottom-btn">
          مشاهده نمونه کارها
        </a>
      </div>
    </section>
  );
};

export default SpecializedArea;
