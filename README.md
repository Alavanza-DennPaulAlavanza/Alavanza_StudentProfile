Alavanza Student Profile


1. Project Description

The Alavanza Student Profile is a Cordova-based mobile student profile application developed as part of the course activities Mobile Development.

The application allows students to log in securely, view their personal profile, edit their information, update their profile picture using the device camera, and log out of the application.

For Activity 7, the application was upgraded from a local-storage-based profile system into a database-driven application using a PHP backend/API and MySQL database managed through phpMyAdmin.

The application follows this basic architecture:

Cordova Application → PHP API/Backend → MySQL Database

2. Application Pages
Profile

The Profile page displays the authenticated student's information, including their name, course, year level, About Me information, skills, and profile picture.

About

The About page provides additional information about the student and their background.

Skills

The Skills page displays the student's technical and personal skills.

Projects

The Projects page presents the student's projects and activities related to Information Technology.

Contact

The Contact page provides contact-related information.

Login

The Login page allows the student to authenticate using their Student ID and password before accessing the protected Student Profile functionality.

The basic authentication flow is:

Login → Authentication → Student Profile

3. Authentication

The application requires the student to log in before accessing the protected profile functionality.

The student provides:

Student ID
Password

The Cordova application sends the login information to the PHP backend through an API request.

The PHP backend verifies the credentials against the MySQL database.

If the credentials are valid, the student is allowed to access the Student Profile.

If the credentials are invalid, an appropriate error message is displayed.

The application does not include actual passwords or private credentials in this README.

4. Student Profile Management

After successful authentication, the student can manage their profile.

The application allows the authenticated student to:

View their profile
Edit their profile information
Save changes
Update their profile picture
Use the device camera
Log out

The editable profile information includes:

Full Name
Course
Year Level
About Me
Skills

Changes to the profile are sent to the backend and saved in the database.

5. Database Integration

The application uses MySQL as its database technology.

The database is managed and tested using phpMyAdmin through XAMPP.

Student profile information stored in the database includes:

Student ID
Name
Course
Year Level
About Me
Skills
Password
Profile Picture or appropriate image reference

Each student profile is associated with a specific Student ID.

This allows the application to retrieve the correct student's profile after authentication.

The database is the primary storage for student profile information rather than using browser local storage as the main profile database.

6. API/Backend

The application communicates with the database through a PHP backend/API.

The basic architecture is:

Cordova Application → PHP API/Backend → MySQL Database

The Cordova application does not directly connect to the MySQL database.

Instead, PHP API files handle requests such as:

Login
Retrieve profile
Update profile
Create records
Delete records

This approach separates the mobile application from the database and prevents database credentials from being exposed directly inside the Cordova application.

7. CRUD Operations

The application demonstrates the four fundamental CRUD operations.

Create

A student/profile record can be created in the database for demonstration and account setup purposes.

Read

The application retrieves the authenticated student's profile information from the MySQL database through the PHP API and displays it in the Student Profile.

Update

The student can edit their:

Name
Course
Year Level
About Me
Skills

The updated information is sent to the PHP backend and saved using a database update operation.

Delete

A controlled test record can be deleted through the appropriate backend/API operation.

The delete operation is intended for demonstration of CRUD functionality and does not require deleting an actual personal student account.

8. Camera Integration

The camera functionality developed in Activity 6 is retained in Activity 7.

The student can select:

Change Profile Picture → Open Camera → Capture Image → Update Profile Picture

The Cordova Camera plugin provides access to the device camera.

After an image is captured, the application displays the new profile picture.

The profile picture is associated with the student's profile through the application's backend/database implementation.

9. Data Persistence

Student profile information is stored in the MySQL database.

This allows the information to remain available after:

Closing the application
Restarting the application
Logging out
Logging in again

The persistence process is:

Update Profile

↓

Save to MySQL Database

↓

Logout

↓

Login Again

↓

Retrieve Profile from Database

↓

Display Updated Profile

Local storage may be used for local application/session information, but the main student profile information is stored in the database.

10. Responsive Design

The application uses responsive HTML and CSS design so that the interface can adapt to different screen sizes.

The application is designed to work across:

Desktop
Tablet
Mobile

The layout, profile cards, navigation, forms, buttons, and other interface elements adjust according to the available screen size.

11. Security

Basic security practices are applied to the application.

These include:

Passwords are not stored as plain text.
Database credentials are not exposed to the Cordova application.
Sensitive credentials are not included in the public GitHub repository.
Authentication is handled through the PHP backend.
The Cordova application communicates with the backend/API instead of connecting directly to the database.
User input is validated before processing.
Login errors and API errors are handled appropriately.

Actual database passwords, API keys, and private credentials are not included in this repository.

12. How to Run
1. Start XAMPP

Open XAMPP Control Panel.

Start:

Apache
MySQL

Both services must be running.

2. Configure the Database

Open phpMyAdmin:

http://localhost/phpmyadmin

Create or import the required MySQL database and tables.

Make sure the required student account and profile records are available for testing.

3. Configure the PHP Backend

Place the backend files inside the XAMPP web directory:

C:\xampp\htdocs\student_api

The backend contains the required PHP API files for database connection, authentication, profile retrieval, profile updates, and CRUD operations.

4. Test the Backend

On the development computer, test the backend using:

http://localhost/student_api/test.php

The API can also be accessed through the computer's local network IP when testing from an Android device.

5. Open the Cordova Project

Open Git Bash or a terminal in the Cordova project directory:

Alavanza_StudentProfile
6. Install/Configure Cordova Dependencies

Install the required Cordova plugins and Android platform as specified by the project configuration.

The Activity 6 Camera plugin is retained for camera functionality.

7. Prepare the Android Project

Run:

cordova prepare android
8. Build the Application

Run:

cordova build android
9. Run on an Android Device

Connect the Android phone or tablet with USB debugging enabled.

Then run:

cordova run android

The application will be installed on the connected Android device.

10. Test the Application

Test the following flow:

Login → Student Profile → Edit Profile → Save → Change Profile Picture → Logout → Login Again

Verify that the updated profile information remains available after logging in again.

13. Test Accounts

The application uses demonstration accounts created specifically for testing.

Example:

Student ID: 2026001
Password: [demo password configured in the local test database]

