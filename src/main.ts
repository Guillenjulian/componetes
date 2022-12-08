import { init as headerEl } from "./componete/header";
import { init as FooterEl } from "./componete/footer";
import { init as TextField } from "./componete/text-field";
import { init as custonButton } from "./componete/button";
import { init as custonA } from "./componete/outlined";
import { init as custonTitle } from "./componete/title";
import { init as custonsubTitle } from "./componete/subtitulo";
import { init as custonsubSpan } from "./componete/spam";
import { init as custonText } from "./componete/texto";
import { init as custonFooterTitel } from "./componete/footer-titel";

(function main() {
  console.log(custonTitle);
  headerEl();
  TextField();
  custonButton();
  custonA();
  custonTitle();
  custonsubSpan();
  custonsubTitle();
  custonText();
  FooterEl();
  custonFooterTitel();
})();
