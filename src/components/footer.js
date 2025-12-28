import React from "react";
import "./footer.css";
import logo from "../photos/logo.png";


const Footer = () => {
  const srcLogo = "https://your-site.com/logo.png"; 
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">

        {/* ستون 1: لوگو و درباره ما */}
        <div className="footer-col about">
          <a href="/" className="footer-logo" aria-label="Homepage">
            <img src={logo} alt="لوگو" />
          </a>
          <h3>درباره ما</h3>
          <p>
            تیم ما از توسعه‌دهندگان و طراحان باتجربه تشکیل شده است. ما در طراحی
            رابط کاربری مدرن، توسعه فرانت‌اند و بک‌اند و خدمات سئو تخصص داریم.
            هدف‌مان ساخت وب‌سایت‌هایی سریع، قابل توسعه و کاربرپسند است که
            نتیجه‌گرا باشند.
          </p>
          <div className="footer-cta">
            <a className="btn-primary" href="/contact">درخواست مشاوره</a>
          </div>
        </div>

        {/* ستون 2: خدمات */}
        <div className="footer-col services">
          <h4>خدمات ما</h4>
          <ul>
            <li>طراحی و توسعه فرانت‌اند</li>
            <li>توسعه بک‌اند و API</li>
            <li>طراحی سایت با وردپرس</li>
            <li>پشتیبانی و نگهداری</li>
            <li>سئو و بهینه‌سازی</li>
          </ul>
        </div>

        {/* ستون 3: لینک‌ها */}
        <div className="footer-col links">
          <h4>لینک‌های مفید</h4>
          <ul>
            <li><a href="/">خانه</a></li>
            <li><a href="/services">خدمات</a></li>
            <li><a href="/samplework">نمونه‌کارها</a></li>
            <li><a href="/academy">آکادمی</a></li>
            <li><a href="/contact">تماس با ما</a></li>
          </ul>
        </div>

        {/* ستون 4: تماس و شبکه */}
        <div className="footer-col contact">
          <h4>تماس با ما</h4>
          <address>
            <div><strong>تلفن:</strong> <a className="ltr-number" href="tel:+989123456789">+98 922 718 9079</a></div>
            <div><strong>ایمیل:</strong> <a href="mailto:info@example.com">Ahmdevvs@gmail.com</a></div>
            <div><strong>آدرس:</strong> ایران ، تبریز ، شهرک اندیشه</div>
          </address>

          <div className="socials">
            {/* نمونه آیکون SVG های ساده — آدرس‌ها را عوض کن */}
            <a href="https://www.instagram.com/ahmdevs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" aria-label="Instagram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5zM18.5 6a1 1 0 11-1 1 1 1 0 011-1z"/></svg>
            </a>
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0zM7.5 8.5h4.7v2.1h.1c.7-1.3 2.4-2.6 4.9-2.6C22 8 24 10 24 14.3V24h-5v-8.1c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1V24h-5V8.5z"/></svg>
            </a>
            <a href="https://github.com/ahmdevs" aria-label="GitHub" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.6 3 8.5 7.2 9.9.5.1.7-.2.7-.5 0-.3 0-1 0-2-2.9.6-3.6-1.3-3.6-1.3-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1 1.5-.8 1.5-.8.9-1.6 2.4-1.1 3-.8.1-.8.4-1.1.7-1.3-2.3-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.8-.1-.3-.4-1.4.1-2.8 0 0 .8-.3 2.8 1a9.4 9.4 0 015 0c2 1.3 2.8 1 2.8 1 .5 1.4.2 2.5.1 2.8.6.8 1 1.7 1 2.8 0 3.9-2.4 4.6-4.7 4.9.3.3.6.9.6 1.8 0 1.3 0 2.3 0 2.6 0 .3.2.6.7.5 4.2-1.4 7.2-5.3 7.2-9.9C23.1 5.3 18.3.5 12 .5z"/></svg>
            </a>
            <a href="https://t.me/AHMdeevs" aria-label="Telegram" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 3L2 10.5 7.5 13 9 20l3.9-11L22 3z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} AHMdevs Team. تمامی حقوق محفوظ است.</p>
        <nav className="footer-bottom-links" aria-label="Footer secondary">
          <p href="/privacy">حریم خصوصی</p>
          <p href="/terms">قوانین و مقررات</p>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
