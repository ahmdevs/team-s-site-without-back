import React, { useState } from "react";
import "./services.css";

const servicesData = [
  {
    id: 1,
    title: "طراحی و توسعه فرانت‌اند (Front-End Development)",
    description:
      "طراحی رابط کاربری مدرن، واکنش‌گرا و سریع با استفاده از React، Tailwind، JavaScript، HTML و CSS.",
    details: [
      "طراحی UI/UX اختصاصی",
      "پیاده‌سازی سایت‌های واکنش‌گرا (Responsive)",
      "بهینه‌سازی سرعت و عملکرد فرانت‌اند",
      "طراحی داشبوردهای مدیریتی",
    ],
  },
  {
    id: 2,
    title: "توسعه بک‌اند (Back-End Development)",
    description:
      "ساخت هسته قدرتمند و امن برای وب‌سایت با استفاده از Node.js یا PHP.",
    details: [
      "طراحی دیتابیس (MySQL / MongoDB)",
      "ساخت APIهای اختصاصی",
      "مدیریت کاربران و نقش‌ها",
      "امنیت و بهینه‌سازی بک‌اند",
    ],
  },
  {
    id: 3,
    title: "طراحی سایت با وردپرس (WordPress Development)",
    description:
      "اگر به سایت سریع، زیبا و اقتصادی نیاز دارید، وردپرس بهترین انتخاب است.",
    details: [
      "طراحی سایت شرکتی، فروشگاهی، شخصی",
      "ساخت صفحات اختصاصی با المنتور",
      "بهینه‌سازی سئو و سرعت",
      "اتصال درگاه پرداخت",
    ],
  },
  {
    id: 4,
    title: "پشتیبانی و نگهداری سایت",
    description:
      "رفع خطاها، آپدیت مداوم، بکاپ‌گیری و بهینه‌سازی امنیتی.",
    details: [
      "رفع خطاها (Bug Fixing)",
      "آپدیت مداوم سایت",
      "بکاپ‌گیری منظم",
      "بهینه‌سازی امنیتی و سرعت",
    ],
  },
  {
    id: 5,
    title: "سئو و بهینه‌سازی سایت (SEO Service)",
    description:
      "بهینه‌سازی سایت برای موتورهای جستجو و افزایش رتبه.",
    details: [
      "تحقیق کلمات کلیدی و استراتژی محتوا",
      "بهینه‌سازی سرعت و ساختار سایت",
      "آنالیز سئو",
      "بهبود UX",
    ],
  },
];

const ServicePage = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section className="services-section">
      <h2 className="services-title">خدمات ما</h2>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>

              <ul>
                {service.details.slice(0, 2).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <button onClick={() => setSelectedService(service)}>
              بیشتر بدانید
            </button>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.description}</p>

            <ul>
              {selectedService.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <button className="font-ir" onClick={() => setSelectedService(null)}>بستن</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicePage;
