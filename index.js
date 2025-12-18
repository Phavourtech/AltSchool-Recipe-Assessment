// Start registration
function registerUser() {
alert("Welcome to the Registration Form!");
}
// Full Name
let fullName = prompt("Enter your full name (at least 2 words):");
if (!fullName || fullName.trim().split(" ").length < 2) {
    alert("Invalid full name! You must enter at least 2 words.");
} else {

    // Email
    let email = prompt("Enter your email address (e.g. example@domain.com):");
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email format!");
    } else {

        // Password
let password;
let hasUpper, hasNumber, hasSpecial; // Declare outside

do {
    password = prompt("Enter password (min 8 chars, 1 uppercase, 1 number, 1 special char):");

    hasUpper = /[A-Z]/.test(password);
    hasNumber = /[0-9]/.test(password);
    hasSpecial = /[!@#$%^&*]/.test(password);

    if (!password || password.length < 8 || !hasUpper || !hasNumber || !hasSpecial) {
        alert("Password invalid! Must meet all requirements.");
    }

} while (!password || password.length < 8 || !hasUpper || !hasNumber || !hasSpecial);

                // Age
                let age = prompt("Enter your age (must be 18 or older): ");
                if (!age || age < 18) {
                    alert("You must be 18 or older!");
                } else {
                    alert(" Registration successful! Welcome, " + fullName + "!");
                }
            }
        }
    

// ===============================
// Simple Student Grade Tracker
// ===============================

// Array to keep all students
let students = [];

// Get elements from the page
const nameInput = document.getElementById("studentName");
const gradeInput = document.getElementById("studentGrade");
const addBtn = document.getElementById("addStudentBtn");
const studentList = document.getElementById("studentList");
const averageGradeEl = document.getElementById("averageGrade");

// When "Add Student" button is clicked
addBtn.onclick = function() {
    const name = nameInput.value.trim();
    const grade = Number(gradeInput.value);

    // Check if name is empty
    if (name === "") {
        alert("Please enter a student name");
        return;
    }

    // Check if grade is valid
    if (isNaN(grade) || grade < 0 || grade > 100) {
        alert("Please enter a grade between 0 and 100");
        return;
    }

    // Make a student object
    const student = {
        id: new Date().getTime(),
        name: name,
        grade: grade
    };

    // Add student to array
    students.push(student);

    // Clear input fields
    nameInput.value = "";
    gradeInput.value = "";

    // Update the display
    displayStudents();
    updateAverage();
};

// Function to show all students
function displayStudents() {
    studentList.innerHTML = ""; // clear current list

    for (let i = 0; i < students.length; i++) {
        const student = students[i];

        // Create a table row
        const row = document.createElement("tr");

        row.innerHTML = "<td>" + student.name + "</td>" +
                        "<td>" + student.grade + "</td>" +
                        "<td><button onclick='deleteStudent(" + student.id + ")'>Delete</button></td>";

        studentList.appendChild(row);
    }
}

// Function to delete a student
function deleteStudent(id) {
    const newStudents = [];

    for (let i = 0; i < students.length; i++) {
        if (students[i].id !== id) {
            newStudents.push(students[i]);
        }
    }

    students = newStudents;

    displayStudents();
    updateAverage();
}

// Function to calculate average grade
function updateAverage() {
    if (students.length === 0) {
        averageGradeEl.textContent = "0";
        return;
    }

    let total = 0;
    for (let i = 0; i < students.length; i++) {
        total += students[i].grade;
    }

    const average = (total / students.length).toFixed(2);
    averageGradeEl.textContent = average;
}
