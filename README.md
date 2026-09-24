# Alavanza Student Profile

## 1. Project Description

Alavanza Student Profile is a Cordova-based student profile web application developed as part of the ITCC 41 activities. The application presents the student's personal information, background, skills, projects, and contact information.

The application also includes an Edit Profile feature and a device camera feature that allows the user to capture and replace the profile picture.

## 2. Application Pages

### Profile

The Profile page serves as the main page of the application. It displays the student's profile picture, name, course, year level, personal information, skills, and goal.

It also contains the Edit Profile feature and the Change Profile Picture button.

### About

The About page provides additional information about the student, including background and interests.

### Skills

The Skills page presents the student's technical and personal skills.

### Projects

The Projects page displays the student's projects and development activities.

### Contact

The Contact page provides contact information and ways to reach the student.

## 3. Profile Editing

The application includes an Edit Profile feature that allows the user to modify:

- Full Name
- Course
- Year Level
- About Me
- Skills

The user can select the Edit Profile button to open the editing form.

The Save button validates the required fields and saves the updated information.

The Cancel button closes the editing form without saving new changes.

Profile information is stored using browser localStorage so that the saved information can be loaded again when the application is opened.

## 4. Camera Integration

The application includes an interactive Change Profile Picture feature using the Cordova Camera Plugin.

The process is:

Change Profile Picture → Open Camera → Capture Image → Update Profile Picture

When the user selects Change Profile Picture, the application uses the device camera to capture a new image.

After the picture is captured, the application processes the returned image and displays it as the new profile picture.

The new picture replaces the previous profile picture.

## 5. Device Feature Integration

Cordova is used because a normal web browser does not directly provide the same access to native Android device features.

The Cordova Camera Plugin provides communication between the JavaScript application and the Android device camera.

The application waits for the Cordova `deviceready` event before using native Cordova functionality.

The following plugins are used:

- cordova-plugin-camera
- cordova-plugin-file

The Camera Plugin provides access to the device camera.

The File Plugin allows the application to access and process the captured image file.

## 6. Image Handling

After the user captures an image, the Camera Plugin returns the captured image to the application.

The File Plugin is used to access the captured image file.

JavaScript reads the image and converts it into a format that can be displayed by the profile picture element.

The new image is then assigned to the profile picture.

The application also stores the processed image in localStorage so that the profile picture can be loaded again when the application starts.

The application therefore supports profile picture replacement and image persistence.

## 7. Error Handling

The application includes error and cancellation handling for the camera feature.

### Camera Permission Denial

If the application does not have permission to access the camera, the camera operation can fail and an error message is displayed.

### Camera Cancellation

If the user cancels the camera operation, the application does not crash and the existing profile picture remains.

### Camera Errors

If an error occurs while opening the camera or processing the captured image, the application displays an appropriate error message instead of crashing.

## 8. Responsive Design

The application uses responsive HTML and CSS so that the interface can adapt to different screen sizes.

### Desktop

The application can be viewed on desktop computers with a wider layout.

### Tablet

The layout adjusts to tablet screen sizes while maintaining readable content and accessible controls.

### Mobile

The application adapts to smaller mobile screens. Buttons, text, profile information, and navigation remain usable on smaller displays.

## 9. How to Run

### Requirements

Install the following:

- Node.js
- Apache Cordova
- Java JDK
- Android Studio
- Android SDK
- Android device with USB debugging enabled

### Install Cordova

```bash
npm install -g cordova