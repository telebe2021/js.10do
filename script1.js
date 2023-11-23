function showSelectedValue() {
    let radioButtons = document.getElementsByName("ageGroup");

    let selectedRadioButton;
    for (let i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        selectedRadioButton = radioButtons[i];
        break;
      }
    }

    if (selectedRadioButton) {
      console.log("Seçilen yaş grubu: " + selectedRadioButton.value);
    } else {
      console.log("Herhangi bir yaş grubu seçilmedi.");
    }
  }

         // ======================


  let textInput = document.getElementById("textInput");
  let openButton = document.getElementById("openButton");
  let closeButton = document.getElementById("closeButton");

  function enableInput() {
    textInput.removeAttribute("disabled");
    openButton.setAttribute("disabled", true);
    closeButton.removeAttribute("disabled");
  }

  function disableInput() {
    textInput.setAttribute("disabled", true);
    openButton.removeAttribute("disabled");
    closeButton.setAttribute("disabled", true);
  }