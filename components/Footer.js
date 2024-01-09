import html from "html-literal";
export default () => html`
  <footer>
    <div class="footerContainer">
      <div class="row">
        <div class="footer-col">
          <h4>company</h4>
          <ul>
            <li><a href="./Contact">contact us</a></li>
            <li><a href="./About">about us</a></li>
            <li><a href="./About">our services</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>appraisals</h4>
          <ul>
            <li><a href="./Quote">commercial</a></li>
            <li><a href="./Quote">residential</a></li>
            <li><a href="./Quote">scheduling</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">our team</a></li>
            <li><a href="#">request consultation</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>follow us</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <span id="copywrite">
        &copy; 2023 <a href="./Home"> Global International LLC</a>
      </span>
    </div>
  </footer>
`;
