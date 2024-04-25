function calculateGrades() {
  const chinese = parseInt(document.getElementById('chinese').value);
  const math_select = parseInt(document.getElementById('math_select').value);
  const math_nonselect = parseInt(document.getElementById('math_nonselect').value);
  const english_reading = parseInt(document.getElementById('english_reading').value);
  const english_listening = parseInt(document.getElementById('english_listening').value);
  const social = parseInt(document.getElementById('social').value);
  const science = parseInt(document.getElementById('science').value);

  const results = {
    '國文': calculateGrade(chinese, [40, 38, 36, 32, 28, 18, 0], [42, 39, 37, 35, 31, 27, 17]),
    '數學': calculateMathGrade(math_select, math_nonselect),
    '英文': calculateEnglishGrade(english_reading, english_listening),
    '社會': calculateGrade(social, [52, 51, 47, 40, 33, 20, 0], [54, 51, 50, 46, 39, 32, 19]),
    '自然': calculateGrade(science, [47, 46, 43, 36, 29, 18, 0], [50, 46, 45, 42, 35, 28, 17])
  };

  displayResults(results);
}

function calculateGrade(score, thresholds, maxScores) {
  const grades = ['A++', 'A+', 'A', 'B++', 'B+', 'B', 'C'];
  for (let i = 0; i < thresholds.length; i++) {
    if (score >= thresholds[i]) {
      return `${grades[i]} (${thresholds[i]}~${maxScores[i]})`;
    }
  }
  return 'C (0)';
}

function calculateMathGrade(select, nonselect) {
  const totalScore = select / 25 * 85 + nonselect / 6 * 15;
  return calculateGrade(totalScore, [91.6, 85.7, 75.5, 66.2, 56.9, 37.2, 0], [100, 91.59, 85.69, 75.49, 66.19, 56.89, 37.19]);
}

function calculateEnglishGrade(reading, listening) {
  const totalScore = reading / 43 * 80 + listening / 21 * 20;
  return calculateGrade(totalScore, [96.28, 93.47, 87.88, 79.49, 66.47, 35.61, 0], [100, 96.27, 93.46, 87.87, 79.48, 66.46, 35.6]);
}

function displayResults(results) {
  const resultElement = document.getElementById('results');
  resultElement.innerHTML = '';
  for (const subject in results) {
    resultElement.innerHTML += `<div>${subject}: ${results[subject]}</div>`;
  }
}
