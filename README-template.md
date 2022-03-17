# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](./design/screenshot-desktop.png)
![](./design/screenshot-mobile.png)


### Links

- Solution URL: [click me!](https://serene-wilson-78efd2.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

Saying 'a couple' would be 'meh'. There's quite some stuff going on and I'm starting to get the hang of it. To summarize... leaving folder structure/management for later can be a little overwhelming, I used way too many state call in different (but related) files where I probably could have used Context API and reducers to make my life way much easier (will prob implement it later). I believe that, because of my terrible state management on this work, implement the local storage 'saving' would mean a lot more of properties and unnecessary state calls where, again, could be easier with Context API even tho I got the concept (and also did for the top level comments, but not for the replies).


### Continued development

More and more docs/articles/examples to read, and also practice. Looking forward to work with SPA, learn more about SSG/SSR, authentication, communicating with db's.


### Useful resources

- [Converting Colors](https://convertingcolors.com/) - useful to get different format codes of the same color.
- [This Pen](https://codepen.io/sosuke/pen/Pjoqqp) - on codepen by 'Barrett Sonntag' was helpful to convert the color hexcode into a filter for one of the workarounds I had to do on CSS for hovering states.
- [CSS-Tricks](https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/) - good article about Theming on styled-components.
- [useHooks](https://usehooks.com/useLocalStorage/) - too many good stuff there, used their 'useLocalStorage' hook from this article.


## Author

- Frontend Mentor - [@notFaceroll](https://www.frontendmentor.io/profile/notFaceroll)
