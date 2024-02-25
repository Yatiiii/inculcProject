const courses = [
    { name: 'Math for 6-8', grade: '6-8', type: 'Math' },
    { name: 'Science for 6-8', grade: '6-8', type: 'Science' },
    { name: 'History for 6-8', grade: '6-8', type: 'History' },
    { name: 'Math for 9-10', grade: '9-10', type: 'Math' },
    { name: 'Science for 9-10', grade: '9-10', type: 'Science' },
    { name: 'History for 9-10', grade: '9-10', type: 'History' },
    { name: 'Math for 11-12', grade: '11-12', type: 'Math' },
    { name: 'Science for 11-12', grade: '11-12', type: 'Science' },
    { name: 'History for 11-12', grade: '11-12', type: 'History' },
];

function displayCourses(filteredCourses) {
    const coursesSection = document.getElementById('courses');
    coursesSection.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.innerText = course.name;
        coursesSection.appendChild(courseDiv);
    });
}

function filterCourses(grade) {
    const filteredCourses = courses.filter(course => course.grade === grade);
    displayCourses(filteredCourses);
}

function filterCoursesByType(type) {
    const filteredCourses = courses.filter(course => course.type === type);
    displayCourses(filteredCourses);
}

function exploreCourses() {
    // Retrieve user input
    var gradeLevel = document.getElementById("inputGrade").value;

    // Check if a grade level is selected
    if (gradeLevel) {
        // Call the filterCourses function to display filtered courses
        filterCourses(gradeLevel);
    } else {
        // If no grade level is selected, display all courses
        displayCourses(courses);
    }
}
function displayCourses(filteredCourses) {
    const coursesSection = document.getElementById('courses');
    coursesSection.innerHTML = '';

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.innerText = course.name;
        coursesSection.appendChild(courseDiv);
    });
}

function filterCourses(grade) {
    const filteredCourses = courses.filter(course => course.grade === grade);
    displayCourses(filteredCourses);
}

function filterCoursesByType(type) {
    const filteredCourses = courses.filter(course => course.type === type);
    displayCourses(filteredCourses);
}

