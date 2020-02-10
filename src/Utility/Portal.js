import { useEffect } from "react";
import ReactDOM from "react-dom";

const portalRoot = document.getElementById("portal");

export const Portal = props => {
  useEffect(() => {
    portalRoot.appendChild(el);
    return () => portalRoot.removeChild(el);
  });

  const el = document.createElement("div");
  const { children } = props;

  return ReactDOM.createPortal(children, el);
};
