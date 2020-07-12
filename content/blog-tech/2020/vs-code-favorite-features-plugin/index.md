---
title: "VS Code tips and tricks"
tags: ["vscode"]
published: true
date: "2020-07-10"
thumbnail: "./cover.jpg"
---

I already published 2 posts on [VS code](http://celine.tech/tags/vscode/) but I want to publish an update on the extensions I am using now and why. I also want to cover some useful shortcuts in VS code and some tips.

## VS code extensions

I am still using most of the extensions I recommended in August 2019. I am not using CSS Peek and Babel JS anymore. I have added some new ones that I found really useful.

My VS code extensions list:

### Must have

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Highlight Matching Tag](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag)
- [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag): when you change the opening tag, it automatically update the closing tag.
- [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome)
- [ES7 React/Redux/GraphQL/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

### CSS extensions

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind users will appreciate this extension. If you don't know Tailwind CSS yet, I recommend trying it.
- [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components): syntax highlighting for styled-components.

### Note taking extensions

- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree): I like having all the places I wrote Todo grouped in one place. I am keeping all my teaching notes in a repo, it is very convenient to see what needs to be updated.
- [VS code Markdown Notes](https://marketplace.visualstudio.com/items?itemName=kortina.vscode-markdown-notes): great application if you keep your notes in a GitHub repo. It facilitates navigation between notes.
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker): amazing tool to spell check source code.

### For a pretty VS code

- [Noctis](https://marketplace.visualstudio.com/items?itemName=liviuschera.noctis): it gives you access to a great collection of themes.

## VS code shortcuts

Some shortcuts I found myself using on a daily basis:

- **cmd shift k** -> Delete an entire line
- **option up/down arrow** -> Moves lines up and down
- **cmd P** -> navigate between files
- **ctrl B** -> toggle the left bar
- **ctrl `** -> toggle terminal
- **cmd shift F** -> search in all files
- **F2** -> rename functions or variables

## VS code tricks

### Pin tab

This is a new feature - released in May 2020 - you can now [Pin tab](https://code.visualstudio.com/updates/v1_46#_pin-tabs). Select the tab you want to pin, right click and select 'pin tab'.

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

Since November 2019, by default single child folders are [collapsed](https://code.visualstudio.com/updates/v1_41#_compact-folders-in-explorer). I really dislike this feature, if you are like me, you can stop this behavior by adding this code in a setting file.

```js
{
  "explorer.compactFolders": false
}
```

You can also use the UI **cmd shift P** and type 'settings', select Preferences: Open Settings (UI), navigate to workspace, type 'compact' and un-tick Explorer: Compact Folders
