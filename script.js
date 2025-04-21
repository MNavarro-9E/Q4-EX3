function gradingSystem() {
    let name = document.getElementById('n-value').value;
    let grade = parseInt(document.getElementById('g-value').value);
  
    if (isNaN(grade) || grade <= 65  || grade > 100) {
      alert("Your input is invalid. ");
      return;
    }
  
    let message;
  
    if (grade >= 94 && grade <= 100) {
      message = 'Excellent!';
    } else if (grade >= 87 && grade <= 93) {
      message = 'Above Standard!';
    } else if (grade >= 80 && grade <= 86) {
      message = 'Standard!';
    } else if (grade >= 75 && grade <= 79) {
      message = 'Needs Improvement';
    } else {
      message = 'You have failed.';
    }
  
    alert(`${name}, your average grade is ${grade}. ${message}`);
  }
  