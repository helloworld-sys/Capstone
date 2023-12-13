import html from "html-literal";
export default () => html`
  <nav>
    <i class="fa-bars" aria-hidden="true"></i>
    <ul class="hidden--mobile nav-links">
      <li><a href="index.html">Home</a></li>
      <li><a href="quote.html">Get Quote</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </nav>
`;
