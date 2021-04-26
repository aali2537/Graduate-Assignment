# Graduate Assignment
## Option 1: Create a Practice Set
 
### Practice Set: Express routing and middleware
Students will be provided base code that contains a simple node web server that has two pages, /home and /login. Students are tasked with creating custom express middleware that will:
1. Redirect to the login page if no user login is detected in session
2. Authenticate users from the login page (An array of username and passwords will be provided inside of local storage)
3. Logout currently signed in users when clicking a link to /logout and redirecting them to the /login page

The main goal of this excercise is to test a student's ability to be able to develop their own custom middleware, as well as their overall knowledge of the express framework being able to pull data from requests and deal with routing.

An example solution has been provided within the appSolution.js file, while the app.js file is the base problem that would be provided to students.