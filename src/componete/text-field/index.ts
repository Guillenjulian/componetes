export function init() {
  class TextField extends HTMLElement {
    constructor() {
      super();
      this.render();
    }
    render() {
      const shadow = this.attachShadow({ mode: "open" });

      const label = this.getAttribute("label");
      const div = document.createElement("div");
      const style = document.createElement("style");

      div.classList.add("root");

      div.innerHTML = `
   
      <label class=" labe">${label}</label>
      <input class="input" type="text" placeholder="ingresa ${label}"/>
   
    `;
      style.innerHTML = `
      .root{
      display: flex;
      flex-direction: column;
    }
    .label{
      font-size:18px;
    }
    .input{
      font-size:18px;
     padding: 17px 13px;
     margin-top: 3px;
     border :3px solid black;
     border-radius 4px

    }
    `;

      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("text-field", TextField);
}
