# High Peaks

## Abstract:

High Peaks is a project that focuses on building a user friendly display for recently released movies. A user can search a U.S. state and 'click' the searched card to reveal more details about it. Also saving it into their favorites page if they so wish to. I focused my efforts on creating an easy to read, easy to use, web app for the user while using techniques like, web responsiveness, PropType usage, Cypress testing, and React to flesh out this project in a timely manner. 

Web development tools, including React and Cypress, were used to streamline the project to allow me to take on more robust challenges. Implementing React allowed me to manipulate the DOM with quick and decisive actions so that the application can react to those changes on a near intantanous level, without the need to manipulate the DOM directly as with past projects in vanilla JavaScript.

High Peaks consists of multiple iterations, focusing on different aspects of data processing and dashboard display, including article presentation, displaying the article in a readable form after extraction from the API, routing to display unique URL paths for each summit researched, and the implementation of a responsive website design that can adapt to changing webpage sizes. It encourages fetching data from provided endpoints instead of hardcoded data files.

The project also provides a robust testing suite using Cypress, ensuring the project's quality and functionality. In summary, High Peaks aims to deliver a user-friendly infomation webpage for displaying data aimed at the hiking and geography communities.


## Application link:

[High Peaks GitHub Repository](https://github.com/JoeyStewart/High-Peaks)

## Installation Instructions:
1. Click the green `code` button.
2. Copy SSH to your clipboard.
3. Open up the terminal.
4. Change into the directory you wish to clone the app into with the cd command.
5. Use the git clone command followed by pasting the copied SSH key.
6. Change into the cloned directory with the cd command.
7. Install dependencies by typing npm install into the terminal
8. Type npm install react react-dom into the terminal
9. Type npm start into the terminal
10. Copy the link it provides. It will look like similiar to this: http://localhost:3000/#/
11. Paste it into your web browser of choice
12. Enjoy!

## Preview of App:

https://files.slack.com/files-pri/T029P2S9M-F06DV35P2CT/high-peaks.gif

## Context:
This was the final solo project in Mod 3. I used fetch requests to pull data so that I could manipulate wikipedia data onto the display in the form of cards that a user could manipulate. The purpose was this was to provide data on the tallest mountain within each US state and providing a page where a user could save any article they find interesting. I had 7 days to complete the project and spent about 30 cumulatively hours working to complete the project in its current form. Part of the difficulty of the project was from refining concepts such as React, routing, and Cypress testing. Though they did come much easier this project than in previous ones. The project remained on schedule. I had far more ambitious plans for this project, but with how I am continuing to settle in with these concepts, I am excited to see the future of this application in its final form.

## Contributors:
  
[Joey Stewart](https://github.com/JoeyStewart)  

## Learning Goals:

* Use routing, fetch calls, and useState to work the data into a way that satisfies all expectations.

* Create a user interface that is easy to use and displays information in a clear way.

* Write DRY, reusable code that follows SRP and trends toward function purity

* Implement a robust testing suite using Cypress.

* Make network requests to retrieve data.


## Major Wins:
### Joey:
I had some family matters that needed to be attended to during this project, so I had less time than I would have liked. Still, I was a bit surprised of my own knowledge regarding REACT. I didn't realize I knewe so much. No one problem kept me tied up for too long. Projects in the past would sometimes have problems that would delay me for entire days. At most, I was delayed a few hours, but every problem I faced, I found the solution myself. Its just nice to see noticeable progression in my skills. Cypress also went more smoothly than I expected. It can still tie my head in knots but its coming along. 


## Challenges and How We Overcame Them:
### Joey:
My biggest problem was having the favorites page completely unresponsive. The function that I wanted to use as a prop in order to add articles to an empty useState array, kept coming back as not a function in the devtools. I was completely lost. I knew my function was being seen as undefined through console.logs, but I didn't know why. As it turned out, I had originally had my save function used as a prop for Card.js. So I had it as a component in App.js. Later on I then used it as a prop for Mountain.js. The problem was Card was still a component in App.js as was Mountain, but I already was using Card as a prop in Mountain, plus having routing for each component. I realize that these were creating massive contradictions in the rendering process. So I removed Card from App.js and reworked my routing. After a bit of time, my favorites page was working like I intended it to.

