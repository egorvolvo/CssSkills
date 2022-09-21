const element = document.querySelector(".select_div");
  const choices = new Choices(element, {
    searchEnabled: false
    
  });

  selectEr = document.querySelectorAll(".is-highlighted");
console.log(selectEr)
  selectEr.dataset.selectText = "1";