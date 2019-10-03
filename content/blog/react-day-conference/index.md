---
title: 'React Day New York'
tags: ['react']
published: true
date: '2019-09-25'
---

I had the opportunity to attend [React Day in New-York](https://reactnewyork.com/), here are some of my notes. 

## React Hooks Tips and Tricks
#### Donavon West - American Express

Hooks are included into React, it is also possible to create custom hooks. A lot already exist online and you should take the benefit of them:
- [react-hooks-helper](https://github.com/revelcw/react-hooks-helper) is a custom React Hooks library that gives you custom hooks for your code.
- [Collection of React Hooks](https://nikgraf.github.io/react-hooks/) is another React Hooks library

[`useStep`](https://github.com/revelcw/react-hooks-helper#usestep) can be used to create a carousel.

[`use-dark-mode`](https://github.com/donavon/use-dark-mode) can be used to easily switch an app to the night mode.

Custom hooks can be used inside other custom hooks.

## Be a React a11y: Making React applications work for everyone
#### Yuraima Estevez - The New York Times

[Slides: a11y](https://drive.google.com/file/d/1pn6j86tF-jWX3z8_IZQLtmruAT3bMtC7/view)

## Full Stack React in the Era of Serverless Computing
#### Nader Dabit - Amazon Web Services

[Full-Stack Development in the Era of Serverless Computing](https://medium.com/@dabit3/full-stack-development-in-the-era-of-serverless-computing-c1e49bba8580)

Talk regarding serverless technologies are changing what it means to be a full-stack developer.

Because of the rise of SPAs, more complex data concerns, multiple device targets and increased expectations of user experience, client-side development has gotten more complex over the past decade or so. Increased expectations for front-end developers.

Evolution of computing over the past few years:
- On Premises
- Cloud
- Serverless computing: FaaS (Function as a Service) + BaaS (Backend as a Service)

    - Serverless becomes easier
    - Serverless becomes cheaper than serverful
    - Serverful becoming relatively less important
    - Serverless becomes the default computing paradigm of the cloud era

- What's next? Serviceful Serverless
    Serviceful service - it is a new term that defined a set of services that do not require any server operations.
    No server operations
    Codeless - less code in your application because most of the code is managed by a third party. 
    No need to manage uptime
    Scales seemlessly...
 
A few examples of serviceful services include Auth0 / Amazon Cognito(managed authentication), Algolia (managed search), Contentful (content infrastructure), AWS AppSync / Cloud Firestore (managed API services), Amazon Lex / Rekognition and Cloudinary (managed image & video hosting service).
 
Benefits

- Front end developers move further up the stack
- Increase developer efficiency and velocity
- Decreased complexity
- More secure, reliable, scalable

Team organized by feature rather than platform or stack.

## A Field Guide To Architecting Complex SPAs in React
#### Phips Peter - Asana

Importance of TypeScript

Talking about performance and lazy loading - referred to the article [idle until urgent](https://philipwalton.com/articles/idle-until-urgent/).

Code split: one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel.

[CodeMod](https://github.com/facebook/codemod) is a tool developed by Facebook to help with the refactor of large-scale codebases.

## Building a typesafe and code split Redux store
#### Matthew Gerstman - Dropbox

[Slides: Building a typesafe code split react-redux application](https://slides.slytherin.dev/#0)

Code split : many small lazy loaded bundles
Use React.lazy and Suspense - not yet available for server-side rendering

[Code-Splitting](https://reactjs.org/docs/code-splitting.html)

Discriminated Unions and [TypeScript](https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions)

Generics (typeScript stuff)

[ReplaceReducer](https://redux.js.org/api/store#replacereducernextreducer) replaces the reducer currently used by the store to calculate the state. You might need this if your app implements code splitting, and you want to load some of the reducers dynamically. 

As your app grows more complex, you'll want to split your reducing function into separate functions, each managing independent parts of the state. The [CombineReducer](https://redux.js.org/api/combinereducers) helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.

## Frontend performance from a designer’s perspective
#### Didrik Steen Hegna - Crystallize

Design vs performance

Importance of performance:
- Customers
- Google loves you
- Increase conversion
 
Google fonts: you can only fetch the characters you need using [unicode-range subsetting](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/webfont-optimization). 

Best format to add photos to a site is WebP - not supported by all browsers yet.

Optimize photos by defining the size and the source with different resolution depending on the screen.

Put media in source tag if you want display the picture differently.

```js
<picture>
  <source
    sizes='50wm'
    srcSet='
      /static/.../... .webp 250w,
      /static/.../... .webp 384w
      /static/.../... .webp 512w
      /static/.../... .webp 1200w'
    type='image/webp'
  />
  <source
    sizes='50wm'
    srcSet='
      /static/.../... .jpg 250w,
      /static/.../... .jpg 384w
      /static/.../... .jpg 512w
      /static/.../... .jpg 1200w'
    type='image/jpg'
  />
  <img src='/static/.../... .jpg' alt='photo' />
</picture>
```

Loading images, consider lazy loading - it doesn't work on mobile yet
 
[bundlephobia.com](https://bundlephobia.com/) is a great tool to find the impact of bundles on your application.

To know how fast your page load, use [Lighthouse](https://developers.google.com/web/tools/lighthouse), an automated tool for improving the quality of web pages.


## Accessibility-flavored React components make your design system delicious!
#### Kathleen McMahon - O’Reilly Media

[Slides: accessibility flavored React components make your design system delicious](https://noti.st/resource11/9e8JKR/accessibility-flavored-react-components-make-your-design-system-delicious)

https://www.sitepoint.com/how-to-use-aria-effectively-with-html5/

## Testing into a better user experience
#### Ryan Burgess - Netflix

Importance of dealing with A/B testing. Don't rely on the HIPPO - Highest Paid Person's Opinion.

Some tools: 

- [Google Analytics Experiments](https://developers.google.com/analytics/devguides/collection/analyticsjs/experiments)
- [Adobe target](https://www.adobe.com/marketing/target.html)

I really enjoyed this conference and learned a lot. One thing  I will particularly pay attention to is images and speed. Google Lighthouse is a tool I just started to use and that will definitely be a great aditiion to my toolbox for all my future projects. 