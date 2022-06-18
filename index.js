"use strict";

const hosts =
  "https://account-dev.wafi.cash,https://connect-dev.wafi.cash,https://sandbox-checkout.wafi.cash,https://sandbox-account.wafi.cash,http://localhost:3000,http://localhost:3001".split(
    ","
  );

const WafiCheckout = {
  launch: (url, options) => {
    const { selector, success, cancel, error } = options;
    const el = document.getElementById(selector);
    el.setAttribute("src", url);
    window.addEventListener(
      "message",
      function (messageEvent) {
        if (!hosts.includes(messageEvent.origin)) return;
        const { event, data } = messageEvent.data;

        if (event === "success" && success) {
          success(data);
          el.parentElement.removeChild(el);
        }
        if (event === "error" && error) error(data);
        if (event === "cancel" && cancel) {
          cancel(data);
          el.parentElement.removeChild(el);
        }
      },
      false
    );
  },
};

export default WafiCheckout;
