const btnEl = document.querySelector(".btn");
const inputEl = document.getElementById("input");

btnEl.addEventListener("click", () => {
  createPassword();
});

function createPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrsruvwxyz!@#$%^&*?<>{}[]ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const passwordLength = 14;
  let password = "";
  for (let index = 0; index < passwordLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNum, randomNum + 1);
  }
  inputEl.value = password;
}
