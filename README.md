# Daily Focus — To-Do List

A small React to-do list, styled around a "Daily Focus" theme: add the tasks you want to get done today, see them listed, and clear them off as you finish.

## What it does

- Add a task by typing into the input and pressing **Enter** or clicking **Add task**
- Delete a task
- Live count of how many items are on the list, with an empty state when it's clear

## Tech

- React + Vite
- Plain CSS, no UI library

## Running it locally

```bash
npm install
npm run dev
```

Open the URL Vite prints in the terminal (usually http://localhost:5173).

## Known issue

Clicking **Edit** on a task starts tracking an "editing" state internally, but there's no input field wired up in the UI to actually change the task's text — so right now Edit doesn't visibly do anything. Deleting and re-adding the task is the current workaround.
