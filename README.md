# Frontend Mentor - Results summary component solution

This is a solution to the [Results summary component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/results-summary-component-CE_K6s0maV). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- **Bonus**: Use the local JSON data to dynamically populate the content



## My Solution


### Screenshot

![](/screenshots/screenshot6.jpg)

![](/screenshots/screenshot10.jpg)

![](/screenshots/screenshot11.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript Fetch Api


### What I learned
  
-  I learnt how to use Javascript's fetch Api to dynamically load data to the web applications
  
```js
    fetch("./data.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          for (const i of data) {
           // Append the results to the page
          }
      })
```

### Continued development
  I am looking forward to using the Fetch Api to load data dynamically in future projects 

## Author

- Github - [Davemafy](https://github.com/Davemafy)
- Frontend Mentor - [@Davemafy](https://www.frontendmentor.io/profile/Dave)
- LinkedIn- [David Imafidon ]()

## Acknowledgments
 [Kelvin Powell](https://youtube.com/kevinpowell)
