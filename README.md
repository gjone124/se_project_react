# Project 5: React: What To Wear? (WTWR)

### Overview

- Intro
- Procedures To Run Program
- Stage 1 (Sprint 10)
- Stage 2 (Sprint 11)
- Stage 3 (Sprint 12) (see se_project_express)
- Stage 4 (Sprint 13) (see se_project_express)
- Stage 5 (Sprint 14)
- Stage 6 (Sprint 15) (see se_project_express)
- Figma
- Images
- Tech Used
- Chart of Class Inheritance Structure
- Deployment
- Link To Back End Application of This Project

**Intro**

This application is designed to retrieve the current weather at a designated location from an API (openweathermap.org).
Based on the current temperature, clothing is recommended to wear.

This is the 6th project for the Triple Ten Software Engineering program.
It's associated with Sprint 10, 11, 12, 13, 14, and 15.

Sprint 10 and 11 focuses on building the front end application (se_project_react).

Sprint 12 and 13 focuses on building the back end application (se_project_express).

Sprint 14 and 15 connects the front end and back end applications to each other.

**Procedures To Run Program**

Stage 1 (Sprint 10)

1)open folder titled "se_project_react" in Visual Studio Code

2)to make sure necessary packages are installed for "se_project_react", run in the terminal "npm install" & press "Enter"

3)run "npm run dev" in the terminal for "se_project_react" & press "Enter"

4)the program should automatically run on your designated default browser at "localhost:3000"<br><br><br>

Stage 2 (Sprint 11)

Terminal Scripts Needed To Run Stage 2 (Sprint 11) Program:

1)"npm run dev" (in 1st terminal; split terminal to create 2nd terminal)

2)"json-server --watch db.json --id \_id --port 3001" (in 2nd terminal)<br><br><br>

Stage 5 (Sprint 14) (see se_project_express for Stage 3 & 4)

1)create a folder titled "se_project_wtwr" & store the "se_project_react" folder and "se_project_express" folder inside it

2)open folder titled "se_project_wtwr" in Visual Studio Code

3)open the terminal (the directory should route to your "se_project_wtwr" folder by default)

4)in the terminal, change directories to the express project by typing "cd se_project_express" & press "Enter"

5)the terminal should now be routed to the express project (the back end application)

6)to run "se_project_express", type "npm run dev" in the terminal & press "Enter"

7)create a 2nd terminal by splitting the terminal

8)in the 2nd terminal, change directories to the react project by typing "cd ../se_project_react" & press "Enter"

9)the terminal should now be routed to the react project (the front end application)

10)to run "se_project_react", type "npm run dev" in the terminal & press "Enter"

11)the program should automatically run on your designated default browser at "localhost:3000"<br><br><br>

Stage 6 (Sprint 15)

1)to run project locally, type "npm run dev" in the terminal & press "Enter"

2)to run project remotely, type "npm run deploy" in the terminal & press "Enter"<br><br><br>

**Stage 1 (Sprint 10)**

For the 1st stage of the project in Sprint 10 (Introduction to React.js), we were given an adaptive web design through
figma.com ( [link to Stage 1 (Sprint 10) Figma](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR) )
and we were told to replicate the web page from scratch using HTML, CSS, and JSX.

The first stage (Sprint 10) involves:

1)calling weather information from the OpenWeather API

2)displaying the weather information on the webpage

3)displaying a default set of clothes depending on if the weather is:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)hot (over 86&deg;F)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)warm (between 66 and 86&deg;F) or

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c)cold (below 66&deg;F)

4)creating a pop-up window for each piece of clothing that allows the image to expand (and which also displays what
type of weather the clothing is suitable for) when the user clicks on the piece of clothing

5)creating a pop-up window with a submission form when the user clicks on the "Add clothes" button

6)creating a dynamic weather card from 14 possible weather conditions that displays an image that represents the current
weather (optional)

7)creating a mobile version of the webpage so the words and images are not as smooshed together (optional)

**Stage 2 (Sprint 11)**

For the 2nd stage of the project in Sprint 11 (React Routing and State Management), we were given a 2nd design
(which added onto the previous design) through figma.com
( [link to Stage 2 (Sprint 11) Figma](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR) ) and we were told
to replicate it.

The second stage (Sprint 11) involves:

1)adding functionality to add & remove pieces of clothing from the collection displayed

2)creating a Toggle Switch to be able to change the temperature displayed from Fahrenheit to Celsius and from
Celsius to Fahrenheit

3)creating a mock server using JSON on your local server (http://localhost:3001)

4)creating a Profile component that displays all the potential clothing options

5)creating 2 routes:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)1 for the Main component ("/"; accessed by clicking in the top left corner on
the "WTWR" logo)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)1 for the Profile component ("/Profile"; accessed by clicking in the top right
corner on the username (Terrence Tegegne) or the user logo)

6)creating a mobile version of the Profile component (optional)

7)modifying cards to take up full screen width & modifying card rows to shrink / grow smoothly (optional)

**Stage 5 (Sprint 14)**

For the 5th stage of the project in Sprint 14 (Front-End Authentication), we were given a 3rd design
(which added onto the previous design from Sprint 11) through figma.com
( [link to Stage 5 (Sprint 14) Figma](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR) ) and we were told
to replicate it.

The fifth stage (Sprint 14) involves modifying se_project_react (the front end application) by:

1)creating 2 buttons in the header for "Sign Up" & "Log In"

2)creating a pop up window for registering a user when a user clicks on "Sign Up"

3)creating a 2nd pop up window for logging in a user when a user clicks on "Log In"
(a user must already be registered in order to log in)

4)if a user is NOT logged in, route the web page to display the temperature toggle switch & buttons for "Sign Up" & "Log In"

5)if a user is logged in, route the web page to display the temperature toggle switch, the add clothes button, username, & username logo

6)implementing registration & authorization logic

7)if no avatar URL is provided upon registration, have user's avatar display 1st letter of their 1st name (must undo requirement of avatar URL upon registration)

8)protecting "/profile" route by creating wrapper component that redirects unauthorized users to main page

9)for the profile view, implement buttons for "Change profile data" & "Log out"

10)creating a pop up window for the "Change profile data" form (aka profile modal)

11)implementing edit profile logic

12)modifying card functionality to allow them to be added & deleted w/ authorization token

13)implementing like button for each card

14)implementing like & dislike functionality for each card

15)hiding like button from unauthorized users

16)implementing "sign out" (or "log out") functionality

17)implementing autologin functionality (keeps user logged in when you refresh page)

18)only showing delete item button when user is logged in & is owner of the item

19)inserting profile data into inputs when you open profile modal

20)updating ClothesSection component to only show cards added by current user

21)for main view if there are no cards generated for current weather type, display default message to user (optional)

22)for profile view if there are no clothing items found, display default message to user (optional)

23)implementing changes to mobile version (optional)

**Figma**

- [Link to the project on Figma for Stage 1 (Sprint 10)](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR)

- [Link to the project on Figma for Stage 2 (Sprint 11)](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR)

- [Link to the project on Figma for Stage 5 (Sprint 14)](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR)

**Images (Stage 1 / Sprint 10)**

Here are ten screenshots of the project (as of Stage 1 / Sprint 10) taken around 6:30pm EST, 11/14/2024:

1)Asunción, Paraguay (nighttime, clear, warm)

<div display="flex"><img align="center" alt="Asuncion, Paraguay" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(1)Asuncion, Paraguay.png" /></div><br>

2)Bethel, Alaska, USA (daytime, snowy, cold)

<div display="flex"><img align="center" alt="Bethel, Alaska, USA" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(2)Bethel, Alaska, USA.png" /></div><br>

3)Julia Creek, Queensland, Australia (daytime, cloudy, hot)

<div display="flex"><img align="center" alt="Julia Creek, Queensland, Australia" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(3)Julia Creek, Queensland, Australia.png" /></div><br>

4)Washington, DC, USA (nighttime, rainy, cold)

<div display="flex"><img align="center" alt="Washington, DC, USA" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(4)Washington, DC, USA.png" /></div><br>

5)Card Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Desktop Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(5)Card Pop Up Window (Desktop Version).png" /></div><br>

6)Add Clothes Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Desktop Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(6)Add Clothes Pop Up Window (Desktop Version).png" /></div><br>

7)Menu Closed (Mobile Version)

<div display="flex"><img align="center" alt="Menu Closed (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(7)Menu Closed (Mobile Version).png" /></div><br>

8)Menu Open (Mobile Version)

<div display="flex"><img align="center" alt="Menu Open (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(8)Menu Open (Mobile Version).png" /></div><br>

9)Card Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(9)Card Pop Up Window (Mobile Version).png" /></div><br>

10)Add Clothes Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/(10)Add Clothes Pop Up Window (Mobile Version).png" /></div><br><br><br><br><br>

**Images (Stage 2 / Sprint 11)**

Here are seven screenshots of the project (as of Stage 2 / Sprint 11):

1)Main Component (Fahrenheit)

<div display="flex"><img align="center" alt="Main Component (Fahrenheit)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(1)Main Component (Fahrenheit).png" /></div><br>

2)Main Component (Celsius)

<div display="flex"><img align="center" alt="Main Component (Celsius)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(2)Main Component (Celsius).png" /></div><br>

3)Clothing Item Pop-Up Window (Delete Item Button Added)

<div display="flex"><img align="center" alt="Clothing Item Pop-Up Window" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(3)Clothing Item Pop-Up Window.png" /></div><br>

4)Delete Item Confirmation Pop-Up Window

<div display="flex"><img align="center" alt="Delete Item Confirmation Pop-Up Window" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(4)Delete Item Confirmation Pop-Up Window.png" /></div><br>

5)Profile Component (Desktop Version)

<div display="flex"><img align="center" alt="Profile Component (Desktop Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(5)Profile Component (Desktop Version).png" /></div><br>

6)Main Component (Mobile Version)

<div display="flex"><img align="center" alt="Main Component (Mobile Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(6)Main Component (Mobile Version).png" /></div><br>

7)Profile Component (Mobile Version)

<div display="flex"><img align="center" alt="Profile Component (Mobile Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/(7)Profile Component (Mobile Version).png" /></div><br><br><br><br><br>

**Images (Stage 5 / Sprint 14)**

Here are fifteen screenshots of the project (as of Stage 5 / Sprint 14):

1)Main Page Not Logged In (Desktop)

<div display="flex"><img align="center" alt="Main Page Not Logged In (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(1)Main Page Not Logged In (Desktop).png" /></div><br>

2)Register Modal (Desktop)

<div display="flex"><img align="center" alt="Register Modal (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(2)Register Modal (Desktop).png" /></div><br>

3)Login Modal (Desktop)

<div display="flex"><img align="center" alt="Login Modal (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(3)Login Modal (Desktop).png" /></div><br>

4)Main Page Logged In (Desktop)

<div display="flex"><img align="center" alt="Main Page Logged In (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(4)Main Page Logged In (Desktop).png" /></div><br>

5)Profile Page With Card Liked (Desktop)

<div display="flex"><img align="center" alt="Profile Page With Card Liked (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(5)Profile Page With Card Liked (Desktop).png" /></div><br>

6)Edit Profile Modal (Desktop)

<div display="flex"><img align="center" alt="Edit Profile Modal (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(6)Edit Profile Modal (Desktop).png" /></div><br>

7)Main Page With No Items (Desktop)

<div display="flex"><img align="center" alt="Main Page With No Items (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(7)Main Page With No Items (Desktop).png" /></div><br>

8)Profile Page With No Items (Desktop)

<div display="flex"><img align="center" alt="Profile Page With No Items (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(8)Profile Page With No Items (Desktop).png" /></div><br>

9)Profile Page Displaying Default Avatar When Avatar Isn't Provided (Desktop)

<div display="flex"><img align="center" alt="Profile Page With No Items (Desktop)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(9)Profile Page Displaying Default Avatar When Avatar Isn't Provided (Desktop).png" /></div><br>

10)Main Page Not Logged In With Menu Closed (Mobile)

<div display="flex"><img align="center" alt="Main Page Not Logged In With Menu Closed (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(10)Main Page Not Logged In With Menu Closed (Mobile).png" /></div><br>

11)Main Page Not Logged In With Menu Open (Mobile)

<div display="flex"><img align="center" alt="Main Page Not Logged In With Menu Open (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(11)Main Page Not Logged In With Menu Open (Mobile).png" /></div><br>

12)Main Page Logged In With Menu Open (Mobile)

<div display="flex"><img align="center" alt="Main Page Logged In With Menu Open (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(12)Main Page Logged In With Menu Open (Mobile).png" /></div><br>

13)Register Modal (Mobile)

<div display="flex"><img align="center" alt="Register Modal (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(13)Register Modal (Mobile).png" /></div><br>

14)Profile Page (Mobile)

<div display="flex"><img align="center" alt="Profile Page (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(14)Profile Page (Mobile).png" /></div><br>

15)Edit Profile Modal (Mobile)

<div display="flex"><img align="center" alt="Edit Profile Modal (Mobile)" 
src="./src/assets/screenshots/Stage 5 (Sprint 14)/(15)Edit Profile Modal (Mobile).png" /></div><br><br><br><br><br>

**Tech Used**

- HTML
- CSS
- JSX (JavaScript using React framework)
- JSON
- ESLint
- Vite
- Responsive design
- BEM methodology
- Flexbox
- Arrays
- Loops
- Hover elements
- API
- Figma
- Mock Server (JSON Server)
- Routing
- Authentication
- Authorization
- JSON Web Token
- ternary operators
- template literals
- string interpolation
- conditional rendering
- MERN stack (MongoDB (backend), Express (backend), React (frontend), Node.js (backend))
- Front end application (client side component)
- Back end application (server side component)
- Interaction between front end application and back end application
- Full stack application

**Chart of Class Inheritance Structure**

- 51 unique files; 12 unique files reused; 91 instances of files being used
- 20 unique images; 4 unique images reused; 29 instances of images being used

- 1)index.html
  - A)main.jsx
    - I)App.jsx
      - a)App.css
      - b)Header.jsx
        - 1)Header.css
          - A)hamburger.svg
          - B)close-button.svg (1st time image is imported)
        - 2)ToggleSwitch.jsx
          - A)ToggleSwitch.css
          - B)CurrentTemperatureUnitContext.js (1st time file is imported)
        - 3)Avatar.jsx (1st time file is imported)
          - A)Avatar.css (1st time file is imported)
          - B)CurrentUserContext.js (1st time file is imported)
          - C)avatar.svg (1st time image is imported)
        - 4)CurrentUserContext.js (2nd time file is imported)
        - 5)wtwr-logo.svg
      - c)Main.jsx
        - 1)Main.css
        - 2)WeatherCard.jsx
          - A)WeatherCard.css
          - B)CurrentTemperatureUnitContext.js (2nd time file is imported)
          - C)constants.js (1st time file is imported)
            - I)clear-day.svg
            - II)clear-night.svg
            - III)cloudy-day.svg
            - IV)cloudy-night.svg
            - V)default-day.svg
            - VI)default-night.svg
            - VII)foggy-day.svg
            - VIII)foggy-night.svg
            - IX)rainy-day.svg
            - X)rainy-night.svg
            - XI)snowy-day.svg
            - XII)snowy-night.svg
            - XIII)stromy-day.svg
            - XIV)stormy-night.svg
        - 3)ItemCard.jsx (1st time file is imported)
          - A)ItemCard.css (1st time file is imported)
            - I)heart.png (1st time image is imported)
            - II)heart_liked.png (1st time image is imported)
          - B)CurrentUserContext.js (3rd time file is imported)
        - 4)CurrentTemperatureUnitContext.js (3rd time file is imported)
      - d)Profile.jsx
        - 1)Profile.css
        - 2)SideBar.jsx
          - A)SideBar.css
            - I)Avatar.jsx (2nd time file is imported)
              - a)Avatar.css (2nd time file is imported)
              - b)CurrentUserContext.js (4th time file is imported)
              - c)avatar.svg (2nd time image is imported)
          - B)CurrentUserContext.js (5th time file is imported)
        - 3)ClothesSection.jsx
          - A)ClothesSection.css
          - B)ItemCard.jsx (2nd time file is imported)
            - I)ItemCard.css (2nd time file is imported)
              - a)heart.png (2nd time image is imported)
              - b)heart_liked.png (2nd time image is imported)
            - II)CurrentUserContext.js (6th time file is imported)
          - C)CurrentUserContext.js (7th time file is imported)
      - e)Footer.jsx
        - 1)Footer.css
      - f)RegisterModal.jsx
        - 1)RegisterModal.css (empty currently)
        - 2)ModalWithForm.jsx (1st time file is imported)
          - A)ModalWithForm.css (1st time file is imported)
          - B)Modal.jsx (1st time file is imported)
            - I)Modal.css (1st time file is imported)
              - a)close-button.svg (2nd time image is imported)
      - g)LoginModal.jsx
        - 1)LoginModal.css (empty currently)
        - 2)ModalWithForm.jsx (2nd time file is imported)
          - A)ModalWithForm.css (2nd time file is imported)
          - B)Modal.jsx (2nd time file is imported)
            - I)Modal.css (2nd time file is imported)
              - a)close-button.svg (3rd time image is imported)
      - h)ItemModal.jsx
        - 1)ItemModal.css
        - 2)Modal.jsx (3rd time file is imported)
          - A)Modal.css (3rd time file is imported)
            - I)close-button.svg (4th time image is imported)
        - 3)CurrentUserContext.js (8th time file is imported)
      - i)AddItemModal.jsx
        - 1)AddItemModal.css (empty currently)
        - 2)ModalWithForm.jsx (3rd time file is imported)
          - A)ModalWithForm.css (3rd time file is imported)
          - B)Modal.jsx (4th time file is imported)
            - I)Modal.css (4th time file is imported)
              - a)close-button.svg (5th time image is imported)
      - j)DeleteModal.jsx
        - 1)DeleteModal.css
        - 2)Modal.jsx (5th time file is imported)
          - A)Modal.css (5th time file is imported)
            - I)close-button.svg (6th time image is imported)
      - k)EditProfileModal.jsx
        - 1)EditProfileModal.css (empty currently)
        - 2)ModalWithForm.jsx (4th time file is imported)
          - A)ModalWithForm.css (4th time file is imported)
          - B)Modal.jsx (6th time file is imported)
            - I)Modal.css (6th time file is imported)
              - a)close-button.svg (7th time image is imported)
        - 3)CurrentUserContext.js (9th time file is imported)
      - l)ProtectedRoute.jsx
      - m)CurrentTemperatureUnitContext.js (4th time file is imported)
      - n)CurrentUserContext.js (10th time file is imported)
      - o)api.js (1st time file is imported)
        - 1)constants.js (2nd time file is imported)
          o)auth.js
        - 1)api.js (2nd time file is imported)
        - 2)constants.js (3rd time file is imported)
      - p)weatherApi.js
        - 1)api.js (3rd time file is imported)
          - A)constants.js (4th time file is imported)
      - q)constants.js (5th time file is imported)
    - II)index.css
      - a)normalize.css
      - b)fonts.css
        - 1)CabinetGrotesk-Black.otf
        - 2)CabinetGrotesk-Bold.otf
        - 3)CabinetGrotesk-Medium.otf

**Deployment**

As of stage 1, this website is deployed to GitHub Pages.

-Deployment Link (as of Stage 1 / Sprint 10): https://gjone124.github.io/se_project_react/

As of stage 6 (the final stage), this website is deployed to a custom domain.

-Deployment Link (as of Stage 6 / Sprint 15): https://wtwr.theoceanforest.com

<br>**Link To Back End Application of This Project**

https://github.com/gjone124/se_project_express
