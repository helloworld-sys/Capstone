import html from "html-literal";

export default state => html`
  <div id="container">
    <section id="jumbotron">
      <h2 id="logo">Global International LLC</h2>
      <a href="Quote"
        ><button id="getQuoteButton" class="buttonMain" type="button">
          Request Quote
        </button></a
      >
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${state.weather.temp}F, and it feels like
        ${state.weather.feelsLike}F.
      </h3>
    </section>
  </div>
`;
