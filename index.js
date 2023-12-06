let name = prompt("Enter your name");
let age = prompt("Enter your age");

function ageAlert(ageValue, nameValue) {
  if (!ageValue || !nameValue) {
    nameValue = prompt("Enter your name");
    ageValue = prompt("Enter your age");
  } else if (ageValue === "" || isNaN(ageValue)) {
    ageValue = prompt("Enter your age");
  } else {
    if (ageValue < 18) {
      alert("You are not allowed to visit this website");
    } else if (ageValue >= 18 && ageValue <= 22) {
      let didAgree = confirm("Are you sure you want to continue?");
      if (didAgree) {
        alert("Welcome");
      } else {
        alert("You are not allowed to visit this website");
      }
    } else {
      alert("Welcome");
    }
  }
}

ageAlert(age, name);
