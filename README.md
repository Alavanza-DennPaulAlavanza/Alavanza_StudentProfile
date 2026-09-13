# Alavanza Student Profile

## 1. Project Description

The Student Profile is a multi-page web application developed as part of the BSIT course. It presents the student's personal information, education, skills, projects, and contact details through a simple, organized, and responsive design.

The application was developed using HTML and CSS and converted into an Android application using Apache Cordova. It is designed to work properly on desktop, tablet, and mobile devices.

## 2. Application Pages

### Profile

The Profile page serves as the homepage of the application. It contains the student's profile picture, complete name, short introduction, tagline, and navigation links to the other pages.

### About

The About page provides information about the student, including personal background, interests, education, and goals or aspirations.

### Skills

The Skills page presents the student's technical and personal skills. Each skill includes a short description explaining the student's abilities.

### Projects

The Projects page showcases projects that the student has worked on. Each project includes its title, description, role or contribution, and technologies or tools used.

### Contact

The Contact page provides the student's contact information and online profile. It allows visitors to view the available information for connecting with the student.

## 3. Navigation

The application uses standard HTML links to navigate between the different pages.

The navigation menu is available on all pages and includes:

- Profile
- About
- Skills
- Projects
- Contact

Users can easily move between the different pages and return to the Profile page using the navigation links.

No JavaScript is used for page navigation. The application uses regular HTML anchor links to connect each page.

## 4. Responsive Design

The application uses responsive CSS techniques to ensure that the pages display properly across different screen sizes.

### Desktop

The layout is optimized for wider screens with organized content, comfortable spacing, and readable text.

### Tablet

The layout adjusts to tablet screen sizes while maintaining proper spacing, readable content, and usable navigation.

### Mobile

The layout adapts to smaller screens by stacking content, adjusting font sizes, and allowing navigation links to wrap properly.

The application was tested on desktop, tablet, and mobile devices to ensure that the pages do not have horizontal scrolling, overlapping content, cut-off elements, or broken navigation.

## 5. UI/UX Principles Applied

The following UI/UX principles were applied throughout the application:

- **Consistency** – The same colors, typography, navigation style, spacing, and visual elements are used across all pages.
- **Responsive Design** – The layout automatically adjusts to desktop, tablet, and mobile screen sizes.
- **Visual Hierarchy** – Headings, sections, and important information are organized clearly to guide the user.
- **Readability** – Appropriate font sizes, spacing, and color contrast are used to make the content easy to read.
- **Usability** – Navigation links are available on every page for easy movement between sections.
- **Accessibility** – Images include alternative text and the content is organized using clear headings.
- **User-Friendly Layout** – Information is presented in organized sections and cards to make the application easy to understand and use.
- **Consistent User Experience** – All five pages follow the same overall design and visual style.

## 6. How to Run

### Requirements

- Node.js
- Apache Cordova
- Android Studio
- Android SDK
- Android device with USB debugging enabled

### Using Command Prompt

1. Open the project folder in Visual Studio Code or Command Prompt.

2. Navigate to the project directory.

3. Prepare the Android platform:

```cmd
cordova prepare android