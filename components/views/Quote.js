import html from "html-literal";

export default () => html`
  <section id="quote">
    <h1>Client Info</h1>
    <p>* = required</p>
    <form id="quote" method="POST" action="">
      <div>
        <label for="customer">First Name*</label>
        <input
          type="text"
          id="customer"
          name="customer"
          placeholder="First Name"
        />
      </div>
      <div>
        <label for="address">Street Address*</label>
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Street Name"
        />
      </div>
      <div>
        <label for="state">State*</label>
        <input type="text" id="state" name="state" placeholder="" />
      </div>
      <div>
        <label for="state">Phone*</label>
        <input type="text" id="fone" name="fone" placeholder="" />
      </div>
      <input type="submit" name="submit" value="Submit Quote" />
    </form>
  </section>
`;
