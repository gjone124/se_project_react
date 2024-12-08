# Project 5: React: What To Wear? (WTWR)

### Overview

- Intro
- Stage 1 (Sprint 10)
- Stage 2 (Sprint 11)
- Figma
- Images
- Tech Used
- Deployment
- Improvements

**Intro**

This application is designed to retrieve the current weather at a designated location from an API (openweathermap.org). Based on the current temperature, clothing is recommended to wear.

This is the 6th project for the Triple Ten Software Engineering program. It's associated with Sprint 10, 11, 12, 13, 14, and 15.

Sprint 10 and 11 focuses on building the front end application (se_project_react).

Sprint 12 and 13 focuses on building the back end application (se_project_express).

Sprint 14 and 15 connects the front end and back end applications to each other.

**Stage 1 (Sprint 10)**

Terminal Scripts Needed To Run Stage 1 Program:

1)npm run dev

For the 1st stage of the project in Sprint 10 (Introduction to React.js), we were given an adaptive web design through figma.com ( [link to Stage 1 Figma](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR) ) and we were told to replicate the web page from scratch using HTML, CSS, and JSX.

The first stage involves:

1)calling weather information from the OpenWeather API

2)displaying the weather information on the webpage

3)displaying a default set of clothes depending on if the weather is:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)hot (over 86&deg;F)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)warm (between 66 and 86&deg;F) or

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;c)cold (below 66&deg;F)

4)creating a pop-up window for each piece of clothing that allows the image to expand (and which also displays what type of weather the clothing is suitable for) when the user clicks on the piece of clothing

5)creating a pop-up window with a submission form when the user clicks on the "Add clothes" button

6)creating a dynamic weather card from 14 possible weather conditions that displays an image that represents the current weather (optional)

7)creating a mobile version of the webpage so the words and images are not as smooshed together (optional)

**Stage 2 (Sprint 11)**

Terminal Scripts Needed To Run Stage 2 Program:

1)npm run dev (in 1st terminal)

2)json-server --watch db.json --id \_id --port 3001 (in 2nd terminal)

For the 2nd stage of the project in Sprint 11 (React Routing and State Management), we were given a 2nd design (which added onto the previous design) through figma.com ( [link to Stage 2 Figma](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR) ) and we were told to replicate it.

The second stage involves:

1)adding functionality to add & remove pieces of clothing from the collection displayed

2)creating a Toggle Switch to be able to change the temperature displayed from Fahrenheit to Celsius and from Celsius to Fahrenheit

3)creating a mock server using JSON on your local server (http://localhost:3001)

4)creating a Profile component that displays all the potential clothing options

5)creating 2 routes:

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a)1 for the Main component ("/"; accessed by clicking in the top left corner on the "WTWR" logo)

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;b)1 for the Profile component ("/Profile"; accessed by clicking in the tope right corner on the username (Terrence Tegegne) or the user logo)

6)creating a mobile version of the Profile component (optional)

7)modifying cards to take up full screen width & modifying card rows to shrink / grow smoothly (optional)

**Figma**

- [Link to the project on Figma for Stage 1 (Sprint 10)](https://www.figma.com/file/F03bTb81Pw8IDPj5Y9rc5i/Sprint-10-%7C-WTWR)

- [Link to the project on Figma for Stage 2 (Sprint 11)](https://www.figma.com/design/dQLJwEKasIdspciJAJrCaf/Sprint-11_-WTWR)

**Images (Stage 1)**

Here are ten screenshots of the project (as of Stage 1) taken around 6:30pm EST, 11/14/2024:

1)Asunción, Paraguay (nighttime, clear, warm)

<div display="flex"><img align="center" alt="Asuncion, Paraguay" src="./src/assets/screenshots/Stage1/Asuncion, Paraguay.png" /></div><br>

2)Bethel, Alaska, USA (daytime, snowy, cold)

<div display="flex"><img align="center" alt="Bethel, Alaska, USA" src="./src/assets/screenshots/Stage1/Bethel, Alaska, USA.png" /></div><br>

3)Julia Creek, Queensland, Australia (daytime, cloudy, hot)

<div display="flex"><img align="center" alt="Julia Creek, Queensland, Australia" src="./src/assets/screenshots/Stage1/Julia Creek, Queensland, Australia.png" /></div><br>

4)Washington, DC, USA (nighttime, rainy, cold)

<div display="flex"><img align="center" alt="Washington, DC, USA" src="./src/assets/screenshots/Stage1/Washington, DC, USA.png" /></div><br>

5)Card Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Desktop Version)" src="./src/assets/screenshots/Stage1/Card Pop Up Window (Desktop Version).png" /></div><br>

6)Add Clothes Pop Up Window (Desktop Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Desktop Version)" src="./src/assets/screenshots/Stage1/Add Clothes Pop Up Window (Desktop Version).png" /></div><br>

7)Menu Closed (Mobile Version)

<div display="flex"><img align="center" alt="Menu Closed (Mobile Version)" src="./src/assets/screenshots/Stage1/Menu Closed (Mobile Version).png" /></div><br>

8)Menu Open (Mobile Version)

<div display="flex"><img align="center" alt="Menu Open (Mobile Version)" src="./src/assets/screenshots/Stage1/Menu Open (Mobile Version).png" /></div><br>

9)Card Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Card Pop Up Window (Mobile Version)" src="./src/assets/screenshots/Stage1/Card Pop Up Window (Mobile Version).png" /></div><br>

10)Add Clothes Pop Up Window (Mobile Version)

<div display="flex"><img align="center" alt="Add Clothes Pop Up Window (Mobile Version)" src="./src/assets/screenshots/Stage1/Add Clothes Pop Up Window (Mobile Version).png" /></div><br><br><br><br><br>

**Images (Stage 2)**

Here are seven screenshots of the project (as of Stage 2):

1)Main Component (Fahrenheit)

<div display="flex"><img align="center" alt="Main Component (Fahrenheit)" src="./src/assets/screenshots/Stage2/Main Component (Fahrenheit).png" /></div><br>

2)Main Component (Celsius)

<div display="flex"><img align="center" alt="Main Component (Celsius)" src="./src/assets/screenshots/Stage2/Main Component (Celsius).png" /></div><br>

3)Clothing Item Pop-Up Window (Delete Item Button Added)

<div display="flex"><img align="center" alt="Clothing Item Pop-Up Window" src="./src/assets/screenshots/Stage2/Clothing Item Pop-Up Window.png" /></div><br>

4)Delete Item Confirmation Pop-Up Window

<div display="flex"><img align="center" alt="Delete Item Confirmation Pop-Up Window" src="./src/assets/screenshots/Stage2/Delete Item Confirmation Pop-Up Window.png" /></div><br>

5)Profile Component (Desktop Version)

<div display="flex"><img align="center" alt="Profile Component (Desktop Version)" src="./src/assets/screenshots/Stage2/Profile Component (Desktop Version).png" /></div><br>

6)Main Component (Mobile Version)

<div display="flex"><img align="center" alt="Main Component (Mobile Version)" src="./src/assets/screenshots/Stage2/Main Component (Mobile Version).png" /></div><br>

7)Profile Component (Mobile Version)

<div display="flex"><img align="center" alt="Profile Component (Mobile Version)" src="./src/assets/screenshots/Stage2/Profile Component (Mobile Version).png" /></div><br>

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

**Deployment**

This webpage is deployed to GitHub Pages.

-Deployment Link (as of Stage 1): https://gjone124.github.io/se_project_react/
