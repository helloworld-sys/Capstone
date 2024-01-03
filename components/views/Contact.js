import html from "html-literal";
import commercial from "../../assets/img/Commercial.jpg";

export default () => html`
  <section id="contact">
    <h2>Contact Us</h2>
    <img src=${commercial} alt="Commercial buildings" />
    <p>
      We look forward to the opportunity to discuss your tax sales needs. Feel
      free to reach out to Global International LLC. at [Your Email Address] or
      [Your Phone Number]. Let's embark on a journey together to achieve your
      financial goals through strategic tax sales endeavors!
    </p>
  </section>
`;
