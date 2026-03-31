function calculateMarriage() {
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const birthDateInput = document.getElementById("birthDate").value;
  const exes = parseInt(document.getElementById("exCount").value);
  const result = document.getElementById("result");

  if (!firstName || !lastName) {
    result.textContent = "Please enter your full name 🙂";
    return;
  }

  if (!birthDateInput) {
    result.textContent = "Please enter your birth date 📅";
    return;
  }

  const birthDate = new Date(birthDateInput); 
  const birthYear = birthDate.getFullYear();
  const today = new Date();

  
  let age = today.getFullYear() - birthYear;
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  if (exes > 3) {
    result.textContent = ` you get pass 4 exes. watin you dey wait for? go marry joor!`;
    return;
  }

  if (birthYear < 1998) {
    result.textContent = `go marry joor! you don due!`;
    return;
  }

  const baseMarriageAge = 25;
  const delayFromExes = exes * 1.5;
  const estimatedMarriageAge = baseMarriageAge + delayFromExes;

  let yearsLeft = estimatedMarriageAge - age;
  if (yearsLeft < 0) yearsLeft = 0;

  result.textContent =
    yearsLeft === 0
      ? ` ${firstName}, go marry joor! you don due!`
      : ` ${firstName}, enjoy dey go you still get: ${yearsLeft.toFixed(
          1
        )} years`;
}
