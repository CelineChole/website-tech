---
title: "VS Code tips and tricks"
tags: ["vscode"]
published: false
date: "2020-07-01"
---

I already published 2 posts on [VS code](http://celine.tech/tags/vscode/). I want to publish an update on the extensions I am using and why plus also talking about the most useful shortcuts and tips.

## VS code extensions

I am still using most of the extensions I recommended in August 2019. I am not using CSS Peek and Babel JS anymore. I have added some new ones that I found really useful.

My VS code extensions list:

- ESLint
- Prettier
- Highlight Matching Tag
- Auto Rename Tag: this extension is great, when you change the opening tag, it automatically update the closing tag.
- Debugger for Chrome
- ES7 React/Redux/GraphQL/React-Native snippets
- Live Server
- Noctis: it gives you access to a great collection of themes.
- Todo Tree: very useful app, I like having all the places I wrote Todo grouped in one place. I am keeping all my teaching notes in a repo, it is very convenient to see
- VS code Markdown Notes: great application if you keep your notes in a GitHub repo. It facilitates navigation between notes.
- Tailwind CSS IntelliSense: Tailwind users will appreciate this extension. If you don't know Tailwind CSS yet, I recommend trying it.
- vscode-styled-components: syntax highlighting for styled-components.

## VS code shortcuts

Delete entire line
Moves lines up and down

## VS code tricks

### Pin tab

This is a new feature -realesed in May 2020 - you can now [Pin tab](https://code.visualstudio.com/updates/v1_46#_pin-tabs). Select the tab you want to pin, right click and select 'pin tab'.

### Color header

When you have more than one VS code window open it might be confusing to easily switch between them and now which one is which. You can color the header to make it easier.

Steps are easy

- Create a folder `.vscode` in the root of your project
- Create a file `settings.json`
- Choose your colors

```js
{
  "workbench.colorCustomizations": {
    "titleBar.activeForeground": "#000",
    "titleBar.inactiveForeground": "#fffefecc",
    "titleBar.activeBackground": "#8203c18c",
    "titleBar.inactiveBackground": "#1900bbee"
  }
}
```

### No more compact folders

Since November 2019, by default single child folders [collapsed](https://code.visualstudio.com/updates/v1_41#_compact-folders-in-explorer). I really dislike this feature, if you are like me, you can stop this behavior by adding this code in a setting file.

```js
{
  "explorer.compactFolders": false
}
```

You can also use the UI cmd shift P and type settings, select Preferences: Open Settings (UI), navigate to workspace, type 'compact' and untick Explorer: Compact Folders
