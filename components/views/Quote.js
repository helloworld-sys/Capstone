import html from "html-literal";

export default () => html`
  <section id="quote">
    <h1>Client Info</h1>
    <p>* = required</p>
    <form id="quote" method="POST" action="">
      <div>
        <label for="name">Name*</label>
        <input type="text" id="name" name="name" placeholder="Full Name" />
      </div>
      <div>
        <label for="address">Street Address*</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Street Address"
        />
      </div>
      <div>
        <label for="city">City*</label>
        <input type="text" id="city" name="city" placeholder="" />
      </div>
      <div>
        <label for="state">State*</label>
        <input type="text" id="state" name="state" placeholder="" />
      </div>
      <div>
        <label for="email">Email*</label>
        <input type="text" id="email" name="email" placeholder="" />
      </div>
      <div>
        <label for="state">Phone*</label>
        <input type="text" id="fone" name="fone" placeholder="" />
      </div>
    </form>
  </section>
`;
