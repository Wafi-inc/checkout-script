"use strict";

const hosts =
  "https://account-dev.wafi.cash,https://connect-dev.wafi.cash,https://sandbox-checkout.wafi.cash,https://sandbox-account.wafi.cash,http://localhost:3000,http://localhost:3001".split(
    ","
  );

const WafiCheckout = {
  launch: (url, options) => {
    const { selector, success, cancel, error } = options;
    // const el = document.getElementById(selector);
    // el.setAttribute("src", url);
    window.open(
      url,
      "popUpWindow",
      "height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
    );
    window.addEventListener(
      "message",
      function (messageEvent) {
        console.log("message got here - index");

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
