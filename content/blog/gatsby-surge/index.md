---
title: 'Gatsby and Surge, how to deploy your static site'
tags: ["javascript"]
published: false
date: '2019-08-30'
---

Just a quick note, [Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React, it is the perfect tool to build a blog or portfolio. [Surge](https://surge.sh/) is a cloud platform for hosting static websites, which is extremely simple to use.

One note to consider, if you use the free version you won't be able to redirect http:// to https://. Google have placed increase emphasis on securing all sites and this can be a problem if you previously published your website with https://. When you add an SSL certificate to a domain on your hosting account, the domain will default to being served over https:// Google will prevent from accessing the http:// site.

## Getting started with Surge

First, ensure you have a recent version of Node.js.
Install Surge using npm by running the following command:
`npm install --global surge`. You might need to use `sudo npm install --global surge`

Run `surge` from any directory and you will be able to create a (free) account from the command line.

This will only happen once.

## Deploy your Gatsby site to Surge

Build a site by running this command in your project’s root directory: `gatsby build`
This generates a publishable version of your site in the `./public` folder.

You can deploy your site by running the following in the root of the project directory.
`surge public/`

Press `enter` to confirm that the path to your `public/` folder is correct, and that you’d like to keep the randomly generated subdomain name (it can be edited if not).

You're done.

## Deploying to your onw domain name

I assume you bought your domain name with NameCheap.

In Domain List, click on `manage` and navigate to Advanced DNS. In Type enter the below two:

---

type: CNAME Record - host: @ - value: na-west1.surge.sh.

type: CNAME Record - host: www - value: na-west1.surge.sh.

---

You can now run `surge domainName.com`