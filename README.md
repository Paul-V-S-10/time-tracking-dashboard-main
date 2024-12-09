# Frontend Mentor - Time Tracking Dashboard Solution

This is a solution to the [Time Tracking Dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats



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
- [React](https://reactjs.org/) - JavaScript library
- [Next.js](https://nextjs.org/) - React framework
- [Styled Components](https://styled-components.com/) - For styling

### What I learned

While working on this project, I learned several key concepts and skills:

- **Responsive Design**: I implemented a mobile-first approach using Flexbox and CSS Grid to ensure the layout adapts to various screen sizes, providing a seamless experience across devices.
  
- **State Management**: I utilized React's state management to dynamically switch between daily, weekly, and monthly stats, enabling users to toggle between different views.
  
- **CSS Variables**: Using CSS custom properties (variables) made it easier to manage and adjust the color scheme and layout in a flexible and efficient way.

- **Styled Components**: Styled-components allowed me to write scoped CSS directly within my React components, which made my code more modular and maintainable.

Here’s an example of how I used React state to switch between stats:

```js
const [timeframe, setTimeframe] = useState('daily');

const handleChange = (event) => {
  setTimeframe(event.target.value);
};