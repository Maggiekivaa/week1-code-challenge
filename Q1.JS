function getGrade() {
    let marks = prompt("Enter student marks (0-100):");
    if ( marks < 0 || marks > 100) {
        return;
    }
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }
    alert("The student's grade is: " + grade);
    getGrade();
}