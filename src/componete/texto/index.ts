export function init() {
  class Text extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const div = document.createElement("div");
      const style = document.createElement("style");

      div.classList.add("root");

      div.innerHTML = `
      <p class = "p">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum molestias debitis. Suscipit expedita facere velit quam assumenda iure consequatur? Nobis dolor reprehenderit quas ratione ducimus possimus id deleniti mollitia? Corrupti sit natus sed deserunt porro iste odit eum commodi accusantium nam voluptas dolore aliquam ipsa sapiente culpa, vero nesciunt.
      </p>
      `;

      style.innerHTML = `
      
    .p{
      font-size: 18px;
      font-weight: 400;
      color:  #000000;
      text-align: left;
      margin: auto;
      width: 50%;
      margin-bottom: 50px;
    }
        `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("text-custon", Text);
}
