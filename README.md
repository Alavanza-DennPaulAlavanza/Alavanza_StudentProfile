# Alavanza Student Profile with Edit Profile Feature 

## 1. Project Description

The Student Profile application is a responsive web-based student portfolio created using HTML, CSS, and JavaScript. It presents personal information, skills, projects, and contact information in an organized and user-friendly interface.

The application was developed as an Apache Cordova project and can run on desktop browsers, tablets, and mobile devices.

## 2. Application Pages

### Profile

The Profile page serves as the homepage of the application. It displays the student's profile picture, name, course, year level, introduction, skills, and personal goal. It also provides navigation to the other pages and includes the Edit Profile functionality.

### About

The About page provides more information about the student, including a personal introduction, interests, education, and goals.

### Skills

The Skills page presents the student's technical and personal skills. Each skill includes a short description.

### Projects

The Projects page showcases academic and personal projects. Each project includes its title, description, role or contribution, and technologies used.

### Contact

The Contact page provides information for connecting with the student, including email, phone number, and GitHub profile.

## 3. Profile Editing

The application includes an **Edit Profile** interface on the Profile page. Users can click the **Edit Profile** button to open the editing form.

The following information can be modified:

- Full Name
- Course
- Year Level
- About Me
- Skills

After entering the information, the user can click **Save** to apply the changes or **Cancel** to return to the profile without saving changes.

## 4. JavaScript Functionality

JavaScript is used to make the Student Profile application interactive and dynamic.

### Form Handling

JavaScript retrieves the values entered into the Edit Profile form and processes the submitted information.

### Validation

JavaScript validates the required fields before saving. The Full Name, Course, Year Level, About Me, and Skills fields must not be empty.

If a required field is empty, the application displays a message asking the user to provide the missing information.

### Profile Updates

After valid information is submitted, JavaScript updates the profile information dynamically without manually editing the HTML content.

### Save

The Save function validates the entered information, stores the updated profile data, updates the displayed profile, and returns the user to the Profile view.

### Cancel

The Cancel function closes the Edit Profile form and returns to the Profile view without saving the changes made in the form.

## 5. Local Data Storage

The application uses JavaScript `localStorage` to store and retrieve profile information.

The following information is stored:

- Full Name
- Course
- Year Level
- About Me
- Skills

When the user saves changes, the updated profile information is stored in `localStorage`. When the application is opened again, JavaScript retrieves the saved information and displays it automatically.

This allows the updated profile information to remain available even after closing and reopening the application.

## 6. Responsive Design

The application uses responsive HTML and CSS to provide a consistent layout across different screen sizes.

### Desktop

The application is designed to display the content clearly on larger desktop screens with appropriate spacing, navigation, and card layouts.

### Tablet

The layout automatically adjusts to tablet screen sizes while maintaining readable text, accessible navigation, and properly arranged content.

### Mobile

The application adapts to smaller mobile screens by adjusting the layout, spacing, navigation, buttons, and form elements to prevent horizontal scrolling and content overlap.

The application was tested on desktop, tablet, and mobile devices to ensure that the pages remain usable and readable across different screen sizes.

## 7. How to Run

### Requirements

- Node.js
- Apache Cordova
- Android Studio
- Android SDK
- Java JDK 17
- Android device or emulator

### Step 1: Open the Project

Open Git Bash or Command Prompt and navigate to the project folder:

```bash
cd ~/Downloads/Alavanza_StudentProfile