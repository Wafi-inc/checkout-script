"use strict";

(function (window) {
  console.log("connected to checkout script window", window);
  const hosts =
    "https://account-dev.wafi.cash,https://connect-dev.wafi.cash,https://sandbox-checkout.wafi.cash,https://sandbox-account.wafi.cash,http://localhost:3000,http://localhost:3001".split(
      ","
    );

  const WafiCheckout = {
    launch: (url, options) => {
      const { success, cancel, error } = options;

      const popUp = window.open(
        url,
        "popUpWindow",
        "height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes"
      );

      window.addEventListener(
        "message",
        function (messageEvent) {
          if (!hosts.includes(messageEvent.origin)) return;
          const { event, data } = messageEvent.data;

          if (event === "success" && success) {
            success(data);
            popUp.close();
          }
          if (event === "error" && error) error(data);
          if (event === "cancel" && cancel) {
            cancel(data);
            popUp.close();
          }
        },
        false
      );
    },
  };
  window["WafiCheckout"] = WafiCheckout;
  return window;
})(window);
