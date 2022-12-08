export function init() {
  class Span extends HTMLElement {
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
     
        <span class = "span">
        Esta página sin dudas es la mejor</span>
     
      `;
      style.innerHTML = `
      .root {
        display: flex;
        align-items: center;
        justify-content: center;
      }
  .span{
    font-size: 22px;
    font-weight: 500;
    color:  #000000;
    text-align: center;
  }
    
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("span-field", Span);
}
