const filterInput = document.querySelector("input");

const filterFunc = () => {
  const container = document.querySelectorAll(".container");
  for (let i = 0; i < container.length; i++) {
    let p = container[i].querySelector(".name");
    if (
      p.innerHTML.toUpperCase().indexOf(filterInput.value.toUpperCase()) > -1
    ) {
      container[i].style.display = "";
    } else {
      container[i].style.display = "none";
    }
  }
};

filterInput.addEventListener("keyup", filterFunc);
