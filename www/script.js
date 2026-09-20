const defaultProfile = {
    name: "Denn Paul M. Alavanza",
    course: "BS Information Technology",
    year: "3rd Year",
    about: "I am a BSIT student interested in technology, web development, programming, and learning new things.",
    skills: "HTML, CSS, Java, Problem Solving, Teamwork, Communication"
};

function getProfile() {
    const savedProfile = localStorage.getItem("studentProfile");

    if (savedProfile) {
        return JSON.parse(savedProfile);
    }

    return defaultProfile;
}

function displayProfile() {
    const profile = getProfile();

    document.querySelectorAll(".profile-name").forEach(element => {
        element.textContent = profile.name;
    });

    document.querySelectorAll(".profile-course").forEach(element => {
        element.textContent = profile.course;
    });

    document.querySelectorAll(".profile-year").forEach(element => {
        element.textContent = profile.year;
    });

    document.querySelectorAll(".profile-about").forEach(element => {
        element.textContent = profile.about;
    });

    document.querySelectorAll(".profile-skills").forEach(element => {
        element.textContent = profile.skills;
    });
}

function openEditProfile() {
    const profile = getProfile();

    document.getElementById("editName").value = profile.name;
    document.getElementById("editCourse").value = profile.course;
    document.getElementById("editYear").value = profile.year;
    document.getElementById("editAbout").value = profile.about;
    document.getElementById("editSkills").value = profile.skills;

    document.getElementById("profileView").style.display = "none";
    document.getElementById("editProfile").style.display = "block";
}

function cancelEdit() {
    document.getElementById("editProfile").style.display = "none";
    document.getElementById("profileView").style.display = "block";
}

function saveProfile() {
    const name = document.getElementById("editName").value.trim();
    const course = document.getElementById("editCourse").value.trim();
    const year = document.getElementById("editYear").value.trim();
    const about = document.getElementById("editAbout").value.trim();
    const skills = document.getElementById("editSkills").value.trim();

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    if (course === "") {
        alert("Please enter your course.");
        return;
    }

    if (year === "") {
        alert("Please enter your year level.");
        return;
    }

    if (about === "") {
        alert("Please enter your About Me information.");
        return;
    }

    if (skills === "") {
        alert("Please enter your skills.");
        return;
    }

    const profile = {
        name: name,
        course: course,
        year: year,
        about: about,
        skills: skills
    };

    localStorage.setItem("studentProfile", JSON.stringify(profile));

    displayProfile();
    cancelEdit();
}

document.addEventListener("DOMContentLoaded", function() {
    displayProfile();
});