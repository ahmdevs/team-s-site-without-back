import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./contact.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneRegex = /^(\+98|0)?9\d{9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast.error("لطفاً شماره تلفن معتبر وارد کنید!");
      return;
    }

    emailjs
      .send(
        "service_AHMdevs",
        "template_oi8tutw",
        {
          fullName: formData.fullName,
          phone: formData.phone,
          message: formData.message,
        },
        "Nw7FtkMGLExVD1lWu"
      )
      .then(() => {
        toast.success("پیام شما با موفقیت ارسال شد 🌱");
        setFormData({ fullName: "", phone: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        toast.error("خطا در ارسال پیام ❌");
      });
  };

  return (
    <div className="contact-container">
      {/* بخش بالا: اطلاعات تماس و فرم کنار هم */}
      <div className="contact-top">
        {/* اطلاعات تماس */}
        <div className="contact-info">
          <h2>ارتباط با ما</h2>
          <p>
            ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. لطفاً از
            یکی از روش‌های زیر با ما در تماس باشید:
          </p>

          <h3>ایمیل</h3>
          <p>
            برای ارتباط مستقیم می‌توانید به ایمیل ما پیام بفرستید:{" "}
            <strong className="font-ir">Ahmdevvs@gmail.com</strong>
          </p>

          <h3>تلفن</h3>
          <p>
            برای کسب اطلاعات بیشتر با ما تماس بگیرید:{" "}
            <a href="tel:+989227189079" className="ltr-number num-project">
              +۹۸ ۹۲۲ ۷۱۸ ۹۰۷۹
            </a>{" "}
            (شنبه تا پنجشنبه 9 صبح تا 7 شب)
          </p>
        </div>

        {/* فرم تماس */}
        <div className="contact-form">
          <h3>فرم تماس</h3>
          <p>
            می‌توانید از فرم زیر برای ثبت مشکل خودتون استفاده کنید تا با شما
            تماس گرفته بشه:
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="font-ir"
              type="text"
              name="fullName"
              placeholder="نام و نام خانوادگی"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
            <input
              className="phone-input font-ir"
              type="tel"
              name="phone"
              placeholder="شماره تماس"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <textarea
              className="font-ir"
              name="message"
              placeholder="مشکل یا توضیحات"
              value={formData.message}
              onChange={handleChange}
              required
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />

            <button className="font-ir" type="submit">
              ثبت درخواست
            </button>
          </form>
        </div>
      </div>

      {/* بخش پایین: شبکه‌های اجتماعی */}
      <div className="contact-bottom">
        <h3>شبکه‌های اجتماعی</h3>
        <p>
          برای دنبال کردن ما و دریافت آخرین اخبار و محتوای سایت، می‌توانید ما را
          در شبکه‌های اجتماعی دنبال کنید:
        </p>

        <div className="social-links">
          <a
            href="https://www.instagram.com/ahmdevs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/instagram.svg" alt="اینستاگرام" />
          </a>
          <a
            href="https://t.me/AHMdeevs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/icons/telegram.svg" alt="تلگرام" />
          </a>
        </div>
        <p>ما به تمام پیام‌ها پاسخ می‌دهیم و خوشحال می‌شویم از شما بشنویم!</p>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contacts;
