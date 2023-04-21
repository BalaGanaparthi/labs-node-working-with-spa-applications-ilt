import router from "./router";

(async function () {
  
  // handle user navigation
  window.addEventListener("hashchange", () => {
    router();
  });
  window.addEventListener("load", () => {
    // avoid calling router twice when handling redirect callback upon sign in
    if (!sessionStorage.getItem("reload")) {
      router();
    }
  });

  //handle user reload of browser
  if (sessionStorage.getItem("reload")) {
    await router();
    sessionStorage.setItem("reload", "true");
  }
})();
