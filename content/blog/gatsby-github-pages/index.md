---
title: 'Gatsby and GitHub Pages, how to deploy your static site'
tags: ["javascript", "github", ]
published: false
date: '2019-08-30'
---

Gatsby is a free and open source framework based on React, it is the perfect tool to build a blog or portfolio. You can find below the steps to deploy your site to the root subdomain: username.github.io, and then configured to use a custom domain.

## Configuring the GitHub Pages source branch

- Navigate to your page repository,
- Click on Settings,
- In the GitHub Pages section, use the Source drop-down to select the branch you want to deploy your site from (master, gh-pages or a /docs folder on  your master branch),
- Click Save.

## Installing the gh-pages package

`npm install gh-pages --save-dev` is the easiest way to push a Gatsby website to GitHub pages.

## Using a deploy script

A custom script in your package.json makes it easier to build and deploy your site.

```js
"scripts": {
    "build": "gatsby build"
  },
```

## Deploying to the root subdomain and using a custom domain

Don’t forget to add your [CNAME](https://help.github.com/en/articles/troubleshooting-custom-domains#github-repository-setup-errors) file to the `static` directory.



## Resources:
[How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
