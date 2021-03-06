<h1 align="center">Cat Wiki</h1>

<div align="center">
   Solution for a challenge from  <a href="https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt" target="_blank">Devchallenges.io</a>.
</div>

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [Thoughts](#thoughts)
- [How to use](#how-to-use)
- [Useful Resources](#useful-resources)

## Overview

![](homepage-mobile-1.png)

![](homepage-mobile-2.png)

![](mobile-suggestions.png)

![](devchallenges-cat-wiki-homepage.png)

![](devchallenges-cat-wiki-homepage-input-focus.png)

![](devchallenges-cat-wiki-input-search-suggestions.png)

![](on-selection-suggestions-go-away-but-not-submitted.png)

![](american-shorthair-detail-page-1.png)

![](american-shorthair-detail-page-2.png)

![](american-shorthair-detail-1000px-1.png)

![](american-shorthair-detail-1000px-2.png)

![](american-shorthair-detail-mobile-1.png)

![](american-shorthair-detail-mobile-2.png)

![](see-more-page-1.png)

![](see-more-page-2.png)

![](health-benefits-page.png)

### Built With

- [TheCatApi](https://docs.thecatapi.com/)
- [Next](https://nextjs.org/)
- [React](https://reactjs.org/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/f4NJ53rcfgrP6sBMD2jt) was to build an application to complete the given user stories.

- [x]  I can search for cat breeds and select a breed of my choice
- [x]  I can see the most popular searched cat breeds summary on the homepage
- [ ]  I can see the top 10 most searched cat breeds
- [x]  I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly
- [x]  I can see more photo of the breed
- [ ]  On mobile, when I select the search option, a modal for breed search should pop up
- [x]  I can go to an article about cats when I click read more on Why you should have a cat section
- [ ]  I can go to the top 10 cats by clicking see more in the dashboard


## Thoughts 

- Missing design for two pages.  Index page for all breeds and why you should have a cat page.  
- Unclear on how to get top ten most popular breeds.  
- Can't search for multiple breeds at once on the api.  Have to use a promise.all() / multiple fetches to get each breed needed ie /breeds/search?q=beng
- You can get 4 random images with image search and limit parameter but it is random and some pictures don't make sense for the design.  Plus image search gives you no idea of the breed etc.  
- Image component has a lot of quirks and things to be mindful of.  Responsive image optimization is a nightmare.  It shouldn't be this unclear to do things that are extremely easy to do in basic html code. Adding a srcSet to the Image component is not really covered.  Having multiple images is not really necessary with the Image component.  So do you use the largest image exclusively? Next does scale down.  Can it scale up from a medium sized image? 
- I used layout="responsive" and under tablet sizes, the background became too small when there was more space available.  You have to set image sizes in the config for device sizes that are not default values.  
- Have to worry about duplicate pictures in the other images section
- Aegean has same picture with different ids which shows up in the other images section
- Use a ref initially to try and prevent the label from overlapping the text of the input on blur
- Fixed overlapping by using valid pseudo-selector on the input in the css
- Using a layout - caused problems with styling.  The min-height of 100vh in globals.css seems not to have be applied.  The benefits page's footer was not at the bottom of the page.
- Problem with European Burmese -> doesn't have reference_image_id.  So top image is missing.  
- Originally, had the Read More and See More links as p tags inside the Link element.  I changed them to buttons so they can be tabbed to.  
- Similarly, the see more page returned just a list with li tags of all the breeds.  I added buttons there so they could tabbed thru. 
- Could add padding to the other picture grid and other styling tweaks.  

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/jdegand/devchallenges-cat-wiki

# Install dependencies
$ npm install

# Add .env.local with API_KEY from thecatapi

# Run the app
$ npm run dev
```

## Useful Resources

- [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
- [YouTube](https://www.youtube.com/watch?v=R4sdWUI3-mY) - Next Image Optimization
- [YouTube](https://www.youtube.com/watch?v=IVfqp_EIuwc) - Next Background Image
- [Next JS Demo](https://image-component.nextjs.gallery/background) - Image for background
- [Stack Overflow](https://stackoverflow.com/questions/63195562/next-js-set-background-image) - next background image
- [Medium](https://antonball.medium.com/superhero-layout-staggered-css-grid-29430df9520) - staggered css grids
- [Codepen](https://codepen.io/antonjb/pen/vMPgBJ) - staggered grid
- [Stack Overflow](https://stackoverflow.com/questions/65169431/how-to-set-the-next-image-component-to-100-height) - next image component to 100% height
- [YouTube](https://www.youtube.com/watch?v=XMmjeimDDgw) - move placeholder text on focus
- [Codepen](https://codepen.io/Coding-in-Public/pen/BawMyvZ) - floating placeholder
- [Codepen](https://codepen.io/gavinr/pen/djedBm) - search modal
- [YouTube](https://www.youtube.com/watch?v=KW7wJ6d19uA) - search modal
- [DelftStack](https://www.delftstack.com/howto/javascript/filter-array-multiple-values-in-javascript/) - filtering with multiple values
- [Stack Overflow](https://stackoverflow.com/questions/57456191/javascript-find-multiple-objects-by-ids-existing-in-prefined-list-from-an-arra) - find multiple objects by id
- [Next Docs](https://nextjs.org/docs/messages/next-image-unconfigured-host) - next image unconfigured host
- [Stack Overflow](https://stackoverflow.com/questions/61927604/pass-custom-prop-or-data-to-next-js-link-component) - pass data to link component?
- [Kinda Code](https://www.kindacode.com/article/passing-data-via-a-link-component-in-next-js/) -  passing data via a link component
- [Stack Overflow](https://stackoverflow.com/questions/65546154/nextjs-getserversideprops-with-multiple-fetch-requests) - multiple fetch requests with getServerSideProps
- [PluralSight](https://www.pluralsight.com/guides/handling-nested-http-requests-using-the-fetch-api) - nested http requests using fetch api
- [Stack Overflow](https://stackoverflow.com/questions/28250680/how-do-i-access-previous-promise-results-in-a-then-chain) - access previous results in a promise chain
- [YouTube](https://www.youtube.com/watch?v=XThqYaVb8s8) - promise chaining
- [Log Rocket](https://blog.logrocket.com/promise-chaining-is-dead-long-live-async-await-445897870abc/) - promise chaining is dead
- [Stack Overflow](https://stackoverflow.com/questions/71275942/how-to-use-next-js-image-component-with-html-picture-element) - next & picture element
- [Forum](https://forum.thatapiguy.com/t/fetch-bunch-image-breed/243) - fetch multiple images per breed (limit required?)
- [Stack Overflow](https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates) - unique values in array
- [Help Guide](https://www.helpguide.org/articles/healthy-living/joys-of-owning-a-cat.htm#:~:text=The%20health%20benefits%20of%20cats&text=They%20can%3A,and%20lower%20your%20blood%20pressure.) - joys of owning a cat
- [The Spruce Pets](https://www.thesprucepets.com/top-mistakes-of-cat-owners-555300) - top mistakes of cat owners
- [Berkeley](https://greatergood.berkeley.edu/article/item/the_science_backed_benefits_of_being_a_cat_lover) - science backed benefits
- [Digital Ocean](https://www.digitalocean.com/community/tutorials/7-ways-to-implement-conditional-rendering-in-react-applications) - conditional rendering in react
- [YouTube](https://www.youtube.com/watch?v=KW7wJ6d19uA) - search modal in vanilla js
- [Stack Overflow](https://stackoverflow.com/questions/16952526/detect-if-an-input-has-text-in-it-using-css-on-a-page-i-am-visiting-and-do-no) - detect if an input has text in it
- [Stack Overflow](https://stackoverflow.com/questions/51842419/next-js-background-image-css-property-cant-load-the-image) - nextjs background image
- [Github](https://github.com/vercel/next.js/issues/18413) - next image problems
- [YouTube](https://www.youtube.com/watch?v=YYxfwDWuPmc) - aspect ratio and responsive next images
- [Github](https://github.com/vercel/next.js/issues/18720) - next image priority issues
- [UploadCare](https://uploadcare.com/blog/next-js-image-optimization/#image-pros-and-cons) - next js images optimization pros and cons
- [Dev.to](https://dev.to/felixhaeberle/responsive-fix-for-the-next-js-image-component-1351) - responsive fix for next js (need a wrapper?)
- [YouTube](https://www.youtube.com/watch?v=P7i5YIJRJew) - explicit width and height error in nextjs
- [Stack Overflow](https://stackoverflow.com/questions/33949469/using-css-modules-how-do-i-define-more-than-one-style-name) - more style name with css modules
- [Stack Overflow](https://stackoverflow.com/questions/4053220/how-can-i-increase-a-scrollbars-width-using-css) - customize scollbar
