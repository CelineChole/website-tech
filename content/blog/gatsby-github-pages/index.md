---
title: 'Gatsby and GitHub Pages, how to deploy your static site to your custom domain'
tags: ["javascript", "github", ]
published: false
date: '2019-08-30'
---

Gatsby is a free and open source framework based on React, it is the perfect tool to build a blog or portfolio. You can find below the steps to deploy your site to the root subdomain: username.github.io, and then configured to use a custom domain.

The first step is to buy a domain name. The below tutorial will be for NameCheap.

## Installing the gh-pages package

`npm install gh-pages --save-dev` is the easiest way to push a Gatsby website to GitHub pages.

Add a new script to your package.json - this will build your site running `gatsby build` and publish it to GitHub - makes it easier to build and deploy your site.

```js
"scripts": {
  "deploy": "npm run clean && gatsby build && gh-pages -d public -b gh-pages"
}
```
<br />

## Configuring the GitHub Pages source branch

- Navigate to your project folder
- Create an orphan branch: `git checkout --orphan gh-pages`
- Run the deploy script: `npm run deploy`
- Navigate to your site's repository on GitHub.com
- Click on Settings
- In the GitHub Pages section, use the Source drop-down to select `gh-pages` branch
- Click Save

## Deploying to the root subdomain and using a custom domain

Don’t forget to add your [CNAME](https://help.github.com/en/articles/troubleshooting-custom-domains#github-repository-setup-errors) file to the `static` directory.

The CNAME file should contain your domain name.

```
celinechole.com
```

This domain name also needs to be in your settings on the GitHub repository.

![github-custom-domain](./github-custom-domain.png)

## Resources:
[How Gatsby Works with GitHub Pages](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/)
