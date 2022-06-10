"use strict";

window.addEventListener(
  "message",
  function (event) {
    // if (event.origin !== "http://scriptandstyle.com") return;
    // if (!event.origin.includes("localhost")) return;
    console.log("received response:  ", event.data, event.origin);
  },
  false
);

const WafiCheckout = {
  launch: (url, options) => {
    const { selector } = options;
    document.getElementById(selector).setAttribute("src", url);
  },
};

export default WafiCheckout;
