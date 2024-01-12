import html from "html-literal";

export default () => html`
  <section id="contact">
    <h2>Contact Us</h2>
    <p>
      We look forward to the opportunity to discuss your tax sales needs. Feel
      free to reach out to Global International LLC. at [Your Email Address] or
      [Your Phone Number]. Let's embark on a journey together to achieve your
      financial goals through strategic tax sales endeavors!
    </p>
    <form action="https://formspree.io/f/myyrzkak" method="POST">
    <input type="text" name="first" placeholder="First Name" required />
    <input type="text" name="last" placeholder="Last Name" required />
    <input type="email" name="email" placeholder="Email Address" required />
    <textarea
      rows="5"
      cols="60"
      name="message"
      placeholder="Enter Message"
      required
    ></textarea>
    <br><button type="submit">Send Message</button>
  </section>

`;
