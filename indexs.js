"use strict";
import wafiLogoWhite from "./assets/wafiLogoWhite.png";
import wafiLogo from "./assets/wafiLogo.png";
import Octarine from "./assets/fonts/Octarine-Bold.otf";
import "./style.css";

(function (window) {
  console.log("connected to checkout script window++", window);

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

      window.location.replace(url);

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

// *******************************
// Wafi checkout Buttons
// *******************************
const wafiBtnTypes = {
  pay: "Pay with ",
  "pay-now": "Pay now with ",
  checkout: "Checkout with ",
  continue: "Continue with ",
  donate: "Donate with ",
  subscribe: "Subscribe with ",
  reload: "Reload with ",
  "top-up": "Top up with ",
  buy: "Buy with ",
  "buy-now": "Buy now with ",
  order: "Order with ",
  tip: "Tip with ",
  book: "Book with ",
  "add-money": "Add money with ",
};
const wafiBtnStyles = { black: "white", white: "black" };

class WafiBtn extends HTMLElement {
  connectedCallback() {
    let outline = this.attributes?.outline?.value;
    let btnType = this.attributes?.btnType?.value;
    const btnText = wafiBtnTypes[btnType] || "";

    let btnstyle = this.attributes?.btnstyle?.value;
    console.log("you have selected type: ", btnType, btnText, btnstyle);

    if (!Object.values(wafiBtnStyles).includes(btnstyle)) {
      // defaults to black style
      console.log("Does not exist");
      btnstyle = "black";
    }

    this.style.width = "280px";
    this.style.height = "50px";
    this.style.margin = "5px";
    this.style.display = "flex";

    this.innerHTML = `

    <button style="
    color: ${wafiBtnStyles[btnstyle]};
        background-color: ${btnstyle};
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        border: 0px;
        cursor: pointer;
        border: ${outline !== undefined ? "4px solid black" : "0px"};
        font-family: OctarineBold; ">
       <p> ${btnText}</p>
        <span style="margin-left: 10px; width: 30%;">
      <img width="100%" src=${
        btnstyle == "black" ? wafiLogoWhite : wafiLogo
      } alt="" />
      </span>
      </button>
      `;
  }
}
customElements.define("wafi-btn", WafiBtn);

// *******************************
// Wafi Checkout Learn More
// *******************************
const LearnMoreModal = `
<div
class="learn-more-container"
style="
  position: fixed;
  overflow-y: scroll;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #000000a3;
  display: none;
  align-items: center;
  justify-content: center;
  z-index: 100000;
"
>

<div
  style="
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 0 0 0;
    width: 400px;
    background-color: white;
    border-radius: 10px;
    opacity: 1;
    font-family: Cochin;
  "
>
  <span
    style="
      position: absolute;
      right: 15px;
      font-family: cursive;
      cursor: pointer;
      z-index: 100;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      font-weight: bold;
      background: #00000029;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
    "
    class="wafi-learn-more-close"
    >X</span
  >

  <div
    style="
      width: 100%;
      border-bottom: 2px solid black;
      display: flex;
      align-items: center;
      flex-direction: column;
    "
  >
    <span>
      <img src=${wafiLogo} width="80px" alt="wafi logo" />
    </span>
    <span style="padding-bottom: 5px; font-size: 14px">
      In partnership with <b>Cerebelly.</b>
    </span>
  </div>
  <div
    style="
      padding: 15px;
      text-align: left;
      font-size: 16px;
      font-weight: bold;
    "
  >
    <div>
      Cerebelly has partnered with Wafi to enable you to pay securely with
      your bank account and earn loyalty cash backs.
    </div>
    <div
      style="
        margin: 10px 0;
        border-top: 1px solid grey;
        padding: 10px 0;
        border-bottom: 1px solid grey;
      "
    >
      <span> Benefits of paying with Wafi: </span>
      <div style="padding-left: 15px; padding-top: 10px;">

        <div style="display: flex; margin: 5px 0;">
          <div
            style="display: flex; align-items: center; margin-right: 10px"
          >
            <span style="width: 10px; height:10px; background: black"></span>
            </span>
          </div>
          <div>
            <span style="display: block; font-weight: bold">
            Earn loyalty cash backs forever: 
            </span>
            <span style="font-weight: 100; font-size: 14px; color: #5d5d5d;">
              Earn loyalty cash back rewards on transactions. Cash backs never expire.
            </span>
          </div>
        </div>
       
        <div style="display: flex; margin: 5px 0;">
          <div
            style="display: flex; align-items: center; margin-right: 10px"
          >
            <span style="width: 10px; height:10px; background: black"></span>
            </span>
          </div>
          <div>
            <span style="display: block; font-weight: bold">
              Enhance security at all times:
            </span>
            <span style="font-weight: 100; font-size: 14px; color: #5d5d5d;">
              Your data is protected end to end with bank grade
              encryption.
            </span>
          </div>
        </div>
        
        <div style="display: flex; margin: 5px 0;">
          <div
            style="display: flex; align-items: center; margin-right: 10px"
          >
            <span style="width: 10px; height:10px; background: black"></span>
            </span>
          </div>
          <div>
            <span style="display: block; font-weight: bold">
              Pay with one click everywhere: 
            </span>
            <span style="font-weight: 100; font-size: 14px; color: #5d5d5d;">
              Once your bank is connect, you can pay automatically everywhere with one click.
            </span>
          </div>
        </div>

      </div>
    </div>

    <div>
      <div style="margin-bottom:15px;"> How it works: </div>
      <div style="padding-left: 10px;">
          <div style="display: flex; margin: 5px 0; align-items: center;">
              <span style=" display: flex; align-items: center; margin-right: 10px; width: 10px; height:10px; background: black"></span>
              <div style="display: flex; font-weight: 400; align-items: center;">
                  At Checkout select 
                  <button style="
                  color: black;
                      background-color: white;
                      width: 67px;
                      height: 32px;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      font-size: 16px;
                      font-weight: bold;
                      border-radius: 5px;
                      border: 2.5px solid black;
                      margin-left: 8px;
                      cursor: pointer;">
                      <img width="50px" src=${wafiLogo} alt="" />
                      </button>
              </div>
          </div>
          <div style="display: flex; margin: 5px 0; align-items: center;">
              <span style=" display: flex; align-items: center; margin-right: 10px; width: 10px; height:10px; background: black"></span>
              <div style="display: block; font-weight: 400">
                  Connect your bank securely
              </div>
          </div>
          <div style="display: flex; margin: 5px 0; align-items: center;">
              <span style=" display: flex; align-items: center; margin-right: 10px; width: 10px; height:10px; background: black"></span>
              <div style="display: block; font-weight: 400">
                  Pay automatically and earn cash back rewards
              </div>
          </div>
      </div>
        
   
    </div>
    <button
    class="wafi-learn-more-close"
      style="
        width: 100%;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: bold;
        border-radius: 5px;
        border: 0;
        height: 40px;
        margin-top: 20px;
        cursor: pointer;
      "
    >
      Got it!
    </button>
  </div>
</div>
</div>`;


class WafiCheckoutLearnMore extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <p style="
    color: black;
    font-size: 16px;
    font-family: OctarineLight;
    text-align: left;
    margin: 0px 0px;"
    
    >
      
      <span class="wafi-learn-more-open"
      style="margin-left: 4px; cursor: pointer; text-decoration: underline;">
      Learn more
      </span>
      </p>
      ${LearnMoreModal}
    `;
  }
}

customElements.define("wafi-checkout-learn-more", WafiCheckoutLearnMore);

function OpenWafiLearnMore(params) {
  console.log("TOGGLING LEARN MORE OPEN");
  document.getElementsByClassName("learn-more-container")[0].style.display =
    "flex";
}

function closeWafiLearnMore(params) {
  console.log("TOGGLING LEARN MORE CLOSE");
  document.getElementsByClassName("learn-more-container")[0].style.display =
    "none";
}

window.addEventListener("load", (event) => {
  let moreClose = document.getElementsByClassName("wafi-learn-more-close");
  for (let item of moreClose) {
    item.addEventListener("click", closeWafiLearnMore);
  }

  let moreOpen = document.getElementsByClassName("wafi-learn-more-open");
  for (let item of moreOpen) {
    item.addEventListener("click", OpenWafiLearnMore);
  }
});

// *******************************
// Wafi checkout Buttons
// *******************************
const wafiMarkStyles = { black: "white", white: "black" };

class WafiMark extends HTMLElement {
  connectedCallback() {
    let styleType = this.attributes?.styleType?.value;
    let width = this.attributes?.width?.value;
    let height = this.attributes?.height?.value;
    console.log("you have selected type: ", styleType);

    if (!Object.values(wafiMarkStyles).includes(styleType)) {
      // defaults to black styleType
      console.log("Does not exist");
      styleType = "black";
    }

    if (height !== undefined && width !== undefined) {
      // if both with and height is provided then we should just use only the width
      console.warn(
        "Provide either width or height but not both to the 'wafi-mark' element"
      );
      height = undefined;
    }

    if (height === undefined && width === undefined) {
      // if both were not provided then we use a default value of 100px for the height
      width = 100;
    }

    // this ensures that the aspect ratio is intact
    if (width === undefined) {
      width = (height * 100) / 45;
    }
    if (height === undefined) {
      height = (width * 45) / 100;
    }

    this.style.width = `${width}px`;
    this.style.height = `${height}px`;
    this.style.margin = "8px";

    this.innerHTML = `
    <button style="
    color: ${wafiMarkStyles[styleType]};
    font-family: OctarineLight;
        background-color: ${styleType};
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        font-weight: bold;
        border-radius: 5px;
        border: ${styleType === "white" ? "4px solid black" : "0px"};
        cursor: pointer;">
        <img width="90%" src=${
          styleType == "black" ? wafiLogoWhite : wafiLogo
        } alt="" />
        </button>
      `;
  }
}
customElements.define("wafi-mark", WafiMark);

// *******************************
// Wafi promotion text
// *******************************

class wafiPromotionText extends HTMLElement {
  async connectedCallback() {
    let wafiSecretKey = this.attributes?.wafiSecretKey?.value;


    let merchantPromotions;
    // call api here to get merchants promotion
    async function getPromotions() {
      let url = `https://dev-api.wafi.cash/api/v1/checkout/client/best-promotion`;
      try {
        let res = await fetch(url, {
          // mode: "no-cors",
          headers: { Authorization: "Bearer " + wafiSecretKey },
        });
        if (res.status == 200){
          return await res.json();
        }
        return null
      } catch (error) {
        console.log(error);
      }
    }
    let promotion
    if (wafiSecretKey) {
      promotion = await getPromotions();
      console.log(promotion)
    }
    let promotionText;

    if (promotion) {
      promotionText =
        promotion?.type === "percent"
          ? `Get ${promotion?.percent}% cash back with Wafi.`
          : `Get $${promotion?.amount} cash back with Wafi.`;
      if (promotion?.min_spend_amount) {
        promotionText = promotionText.substring(0, promotionText.length-1) + `, when you spend $${promotion?.min_spend_amount}`;
      }
    } else {
      promotionText = "Get 0.75% cash back with Wafi.";
    }

    console.log("merchantPromotions", merchantPromotions);

    this.innerHTML = `
    <div style="display: flex; align-items: center; font-family: OctarineLight; font-size: 16px;">
      <span style="cursor:pointer; margin-left:3px;"> ${promotionText}</span>
    </div>
    `;
  }
}

customElements.define("wafi-promotion-text", wafiPromotionText);
