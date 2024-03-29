"use strict";

(function (window) {
  console.log("connected to checkout script window", window);
  const hosts =
    "https://account-dev.wafi.cash,https://connect-dev.wafi.cash,https://sandbox-checkout.wafi.cash,https://sandbox-account.wafi.cash,http://localhost:3000,http://localhost:3001".split(
      ","
    );

  const WafiCheckout = {
    launch: (url) => {
      // const { success, cancel, error } = options;
      // let popUp;
      // let height = 500;
      // let width = 700;
      // var left = (( screen.width - width ) / 2);
      // var top = ( (screen.height - height ) / 2);

      // let btn = document.createElement("button");
      // btn.addEventListener('click',()=>{
      //   popUp = window.open(
      //     url,
      //     "popUpWindow",
      //     'resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no,width=' + width + ', height=' + height + ', top='+ top + ', left=' + left +',status=yes'
      //   );

      //   if (!popUp || popUp.closed || typeof popUp.closed == "undefined") {
      //     //...
      //     sessionStorage.setItem("wafi-merchant", window.location.href);
      //     window.location.replace(url)
      //   }
      // })
      // btn.click()


      window.location.replace(url)
      
     
      // window.addEventListener(
      //   "message",
      //   function (messageEvent) {
      //     if (!hosts.includes(messageEvent.origin)) return;
      //     const { event, data } = messageEvent.data;

      //     if (event === "success" && success) {
      //       success(data);
      //       popUp.close();
      //     }
      //     if (event === "error" && error) error(data);
      //     if (event === "cancel" && cancel) {
      //       cancel(data);
      //       popUp.close();
      //     }
      //   },
      //   false
      // );
    },
  };
  window["WafiCheckout"] = WafiCheckout;
  return window;
})(window);
