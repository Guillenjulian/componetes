export function init() {
  class SubTitle extends HTMLElement {
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
     
        <h3 class = "h3">
       Subtitulo</h3>
     
      `;
      style.innerHTML = `
  .h3{
  
    font-size: 38px;
    font-weight: 700;
    color:  #000000;
    text-align: center;
  }
      `;
      shadow.appendChild(style);
      shadow.appendChild(div);
    }
  }
  customElements.define("subtitle-field", SubTitle);
}
