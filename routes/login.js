if (
  document.cookie &&
  JSON.parse(document.cookie)["kind"] ===
    "identitytoolkit#VerifyPasswordResponse"
) {
  window.location.pathname = "/routes/home.html";
}

document.addEventListener("DOMContentLoaded", () => {
  let login = document.getElementById("login");
  login.addEventListener("click", () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let remember = document.getElementById("remember").checked;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAGNsJgNex8jNb6BgJiiZPiupoC_al0yU4",
      {
        method: "POST",
        mode: "cors",
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (Object.keys(data)[0] !== "error") {
          if (remember) {
            const d = new Date();
            d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = `${JSON.stringify(data)};${expires};path=/`;
          } else {
            document.cookie = `${JSON.stringify(data)};path=/`;
          }

          window.location.pathname = "/routes/home.html";
        }
      });
  });
});
