function calculateBMI() {
 
  let cm = parseInt(document
          .querySelector("#cm").value);

  let kg = parseInt(document
          .querySelector("#kg").value);

          const gender = document.getElementById('gender').value;
  let result = document.querySelector("#result");

  if (cm === "" || isNaN(cm)) 
      result.innerHTML = "Provide a valid Height!";
  else if (kg === "" || isNaN(kg)) 
      result.innerHTML = "Provide a valid Weight!";

  else {
      let bmi = (kg / ((cm * cm) 
                          / 10000)).toFixed(2);
      if (bmi < 18.6) result.innerHTML =
          `Kekurangan Berat Badan : <span>${bmi}</span>`;
      else if (bmi >= 18.6 && bmi < 24.9) 
          result.innerHTML = 
              `Ideal : <span>${bmi}</span>`;
      else result.innerHTML =
          `Kelebihan Berat Badan : <span>${bmi}</span>`;
  }
}
