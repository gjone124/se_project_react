# Project 5: React: What To Wear? (WTWR)

### Overview

- Intro
- Procedures To Run Program
- Stage 1 (Sprint 10)
- Stage 2 (Sprint 11)
- Stage 3 (Sprint 12) (see se_project_express)
- Stage 4 (Sprint 13) (see se_project_express)
- Stage 5 (Sprint 14)
- Figma
- Images
- Tech Used
- Structure of Class Inheritance
- Deployment

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

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)1 for the Profile component ("/Profile"; accessed by clicking in the tope right
corner on the username (Terrence Tegegne) or the user logo)

6)creating a mobile version of the Profile component (optional)

7)modifying cards to take up full screen width & modifying card rows to shrink / grow smoothly (optional)

**Stage 5 (Sprint 14)**

For the 5th stage of the project in Sprint 14 (Front-End Authentication), we were given a 3rd design
(which added onto the previous design from Sprint 11) through figma.com
( [link to Stage 5 (Sprint 14) Figma](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR) ) and we were told
to replicate it.

The fifth stage (Sprint 14) involves modifying se_project_react (the front end application) by:

1)having the default route display buttons for "Sign Up" & "Log In"

2)creating a pop up window for registering a user when a user clicks on "Sign Up"

3)creating a 2nd pop up window for logging in a user when a user clicks on "Log In"
(a user must already be registered in order to log in)

4)after a user successfully logs in, route the web page to display the add clothes button, username, & username logo

5)implementing registration & authorization logic

6)for the profile view, implement buttons for "Change profile data" & "Log out"

7)implementing edit profile logic

8)implementing like button for each card

9)implementing like & dislike functionality for each card

10)implementing "sign out" (or "log out") functionality

**Figma**

- [Link to the project on Figma for Stage 1 (Sprint 10)](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR)

- [Link to the project on Figma for Stage 2 (Sprint 11)](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR)

- [Link to the project on Figma for Stage 5 (Sprint 14)](https://www.figma.com/file/bfVOvqlLmoKZ5lpro8WWBe/Sprint-14_-WTWR)

**Images (Stage 1 / Sprint 10)**

Here are ten screenshots of the project (as of Stage 1 / Sprint 10) taken around 6:30pm EST, 11/14/2024:

1)Asunción, Paraguay (nighttime, clear, warm)

<div display="flex"><img align="center" alt="Asuncion, Paraguay" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Asuncion, Paraguay.png" /></div><br>

2)Bethel, Alaska, USA (daytime, snowy, cold)

<div display="flex"><img align="center" alt="Bethel, Alaska, USA" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Bethel, Alaska, USA.png" /></div><br>

3)Julia Creek, Queensland, Australia (daytime, cloudy, hot)

<div display="flex"><img align="center" alt="Julia Creek, Queensland, Australia" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Julia Creek, Queensland, Australia.png" /></div><br>

4)Washington, DC, USA (nighttime, rainy, cold)

<div display="flex"><img align="center" alt="Washington, DC, USA" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Washington, DC, USA.png" /></div><br>

5)Card Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Desktop Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Card Pop Up Window (Desktop Version).png" /></div><br>

6)Add Clothes Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Desktop Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Add Clothes Pop Up Window (Desktop Version).png" /></div><br>

7)Menu Closed (Mobile Version)

<div display="flex"><img align="center" alt="Menu Closed (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Menu Closed (Mobile Version).png" /></div><br>

8)Menu Open (Mobile Version)

<div display="flex"><img align="center" alt="Menu Open (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Menu Open (Mobile Version).png" /></div><br>

9)Card Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Card Pop Up Window (Mobile Version).png" /></div><br>

10)Add Clothes Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Mobile Version)" 
src="./src/assets/screenshots/Stage 1 (Sprint 10)/Add Clothes Pop Up Window (Mobile Version).png" /></div><br><br><br><br><br>

**Images (Stage 2 / Sprint 11)**

Here are seven screenshots of the project (as of Stage 2 / Sprint 11):

1)Main Component (Fahrenheit)

<div display="flex"><img align="center" alt="Main Component (Fahrenheit)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Main Component (Fahrenheit).png" /></div><br>

2)Main Component (Celsius)

<div display="flex"><img align="center" alt="Main Component (Celsius)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Main Component (Celsius).png" /></div><br>

3)Clothing Item Pop-Up Window (Delete Item Button Added)

<div display="flex"><img align="center" alt="Clothing Item Pop-Up Window" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Clothing Item Pop-Up Window.png" /></div><br>

4)Delete Item Confirmation Pop-Up Window

<div display="flex"><img align="center" alt="Delete Item Confirmation Pop-Up Window" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Delete Item Confirmation Pop-Up Window.png" /></div><br>

5)Profile Component (Desktop Version)

<div display="flex"><img align="center" alt="Profile Component (Desktop Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Profile Component (Desktop Version).png" /></div><br>

6)Main Component (Mobile Version)

<div display="flex"><img align="center" alt="Main Component (Mobile Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Main Component (Mobile Version).png" /></div><br>

7)Profile Component (Mobile Version)

<div display="flex"><img align="center" alt="Profile Component (Mobile Version)" 
src="./src/assets/screenshots/Stage 2 (Sprint 11)/Profile Component (Mobile Version).png" /></div><br>

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
- Front end application (client side component)
- Back end application (server side component)
- Interaction between front end application and back end application
- Full stack application

**Chart of Class Inheritance Structure** (add in EditProfileModal, ProtectedRoute, & auth.js when complete; 46 unique files; 9 unique files reused; 67 instances of files being used; 47 images not included in chart)

- 1)index.html
  - A)main.jsx
    - I)App.jsx
      - a)App.css
      - b)Header.jsx
        - 1)Header.css
        - 2)ToggleSwitch.jsx
          - A)ToggleSwitch.css
          - B)CurrentTemperatureUnitContext.js (1st time file is imported)
      - c)RegisterModal.jsx
        - 1)RegisterModal.css (empty currently)
        - 2)ModalWithForm.jsx (1st time file is imported)
          - A)ModalWithForm.css (1st time file is imported)
          - B)Modal.jsx (1st time file is imported)
            - I)Modal.css (1st time file is imported)
      - d)LoginModal.jsx
        - 1)LoginModal.css (empty currently)
        - 2)ModalWithForm.jsx (2nd time file is imported)
          - A)ModalWithForm.css (2nd time file is imported)
          - B)Modal.jsx (2nd time file is imported)
            - I)Modal.css (2nd time file is imported)
      - e)AddItemModal.jsx
        - 1)AddItemModal.css (empty currently)
        - 2)ModalWithForm.jsx (3rd time file is imported)
          - A)ModalWithForm.css (3rd time file is imported)
          - B)Modal.jsx (3rd time file is imported)
            - I)Modal.css (3rd time file is imported)
      - f)Main.jsx
        - 1)Main.css
        - 2)WeatherCard.jsx
          - A)WeatherCard.css
          - B)CurrentTemperatureUnitContext.js (2nd time file is imported)
          - C)constants.js (1st time file is imported)
        - 3)ItemCard.jsx (1st time file is imported)
          - A)ItemCard.css (1st time file is imported)
        - 4)CurrentTemperatureUnitContext.js (3rd time file is imported)
      - g)ItemModal.jsx
        - 1)ItemModal.css
        - 2)Modal.jsx (4th time file is imported)
          - A)Modal.css (4th time file is imported)
      - h)DeleteModal.jsx
        - 1)DeleteModal.css
        - 2)Modal.jsx (5th time file is imported)
          - A)Modal.css (5th time file is imported)
      - i)Profile.jsx
        - 1)Profile.css
        - 2)SideBar.jsx
          - A)SideBar.css
        - 3)ClothesSection.jsx
          - A)ClothesSection.css
          - B)ItemCard.jsx (2nd time file is imported)
            - I)ItemCard.css (2nd time file is imported)
      - j)Footer.jsx
        - 1)Footer.css
      - k)CurrentTemperatureUnitContext.js (4th time file is imported)
      - l)api.js (1st time file is imported)
        - 1)constants.js (2nd time file is imported)
      - m)weatherApi.js
        - 1)api.js (2nd time file is imported)
          - A)constants.js (3rd time file is imported)
      - n)constants.js (4th time file is imported)
    - II)index.css
      - a)normalize.css
      - b)fonts.css
        - 1)CabinetGrotesk-Black.otf
        - 2)CabinetGrotesk-Bold.otf
        - 3)CabinetGrotesk-Medium.otf

**Deployment**

This webpage is deployed to GitHub Pages.

-Deployment Link (as of Stage 1 / Sprint 10): https://gjone124.github.io/se_project_react/

<br>**Link To Back End Application Of This Project**

https://github.com/gjone124/se_project_express
