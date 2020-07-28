console.log("bonjour 34");


let messages = document.getElementById("messages").querySelectorAll("h3");
console.log(messages);

messages.forEach((mess) => {
  mess.addEventListener("click", (event) => {

  if (event.currentTarget.nextElementSibling.classList.value === "message active") {
    event.currentTarget.nextElementSibling.classList.remove("active");
  }
  else {
    document.querySelectorAll(".message").forEach((item) =>{
      item.classList.remove("active");
    });
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  });
});
