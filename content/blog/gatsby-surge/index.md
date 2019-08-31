---
title: 'How to deploy your Gatsby site with Surge'
tags: ["javascript"]
published: true
date: '2019-08-31'
---

[Gatsby](https://www.gatsbyjs.org/) is a free and open source framework based on React, it is the perfect tool to build a blog or portfolio. [Surge](https://surge.sh/) is a cloud platform for hosting static websites, which is extremely simple to use and lets you deploy in one command. So far it is the easiest way to deploy a static site that I know.

One note to consider, if you use the free version of Surge with a custom domain you won't be able to redirect `http://` to `https://`. Google have placed increased emphasis on securing all sites and this may be a problem if you previously published your website with https. When you add an SSL certificate to a domain on your hosting account, the domain will default to being served over https and browsers will give a security error when accessing the site.

If you want to read more about http and https, this [article](https://www.troyhunt.com/https-adoption-has-reached-the-tipping-point/) is great.

If you are happy with a surge domain (e.g. sugar-badger.surge.sh) you can get https without any issues.

## Getting started with Surge

First, ensure you have a recent version of [Node.js](https://nodejs.org).
Install Surge using npm by running the following command:
`npm install --global surge`. You might need to use `sudo npm install --global surge`

Run `surge` from any directory and you will be able to create a (free) account from the command line. This will only happen once so make sure you remember the password. 

## Deploy your Gatsby site to Surge

Build a site by running this command in your project’s root directory: `gatsby build`.
This generates a publishable version of your site in the `public` folder.

You can deploy your site by running the following in the root of the project directory.
`surge public`.

You can edit the randomly generated domain if you don't like it.

```bash
celine.tech$ surge public
   Running as xxx@xxxx.com

    project: public
      domain: troubled-ocean.surge.sh
      (401 files, 12726         upload: [] 98% eta: 0.1s ...
      CDN: [=================] 100%

   Success! - Published to troubled-ocean.surge.sh
```

And you're done!

## Deploying to your own domain name

Navigate to your Domain Provider and in Advanced DNS type the below:

```
type: CNAME Record - host: @ - value: na-west1.surge.sh.

type: CNAME Record - host: www - value: na-west1.surge.sh.
```

For more details read the [Surge documentation](https://surge.sh/help/adding-a-custom-domain).

You can now run `surge domainName.com`

The final step would be to save your custom domain so you don't need to type it each time you deploy. Add a CNAME file to the root of the project you are deploying. You can do this by using the below command:

`echo your-own-domain.com > CNAME`