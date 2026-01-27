---
slug: "kantab-extension-publish"
title: "Kantab Browser Extensions"
description: "Kantab is a beautifully designed, lightweight Kanban-style task manager that replaces your browser's new tab page with a powerful productivity tool. Built with modern web technologies, it offers an intuitive way to manage projects and tasks without the complexity of traditional project management tools."
pubDate: "Jan 27 2026"
heroImage: "https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9zbj74nlbs1ydrvxxc0i.png"
---

I have made a kanban style browser extension to manage tasks when I have to move on a different branch for bug fix and other stuffs. 

## How I work ?

Suppose I am working on some feature which is not completed yet and I have to fix a bug on production or in a open PR which will be merged to production soon. I `stash` or `commit` the changes depending on situation, switch to bug fix branch, do the bug fix and test it then commit it. Then return to previous branch.

## What issue I face ?

Sometimes I forgot exactly were I was because that bug was critical or it took way more time than expected and I got into too much. Therefore I loose the context of previous branch and feature, like - 
1. What is done and what is pending ?
2. what to do next 
etc

## What approach I was using 

For sometimes I was using a text app write current progress and pending tasks stuffs. And it was working but I was looking for a better approach.

## What better approach I found 

I have made a kanban style simple project/task management webapp. Then I convert that to a chrome extension that replaces `new tab` with its ui. So whenever I start working on something I break that into small task to add them in that extension. Once a task is completed move it to done. Now even when I move back to task from working on a different task for a long time, I know what is done and what is pending. 

## Why didn't I use any other platforms or app 

I could have used linear or another app for task tracking but the issue was I have to open another app or website to view that. Whereas with my extension it shows everything whenever I open a new tab which I do a lot. 


![App ui preview](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/cies40lbl40cs8amo823.png)

## How can you try it 

If you are using firefox then you are lucky because I have added it to firefox extensions store. 
[Firefox Extension Store Link](https://addons.mozilla.org/en-US/firefox/addon/kantab/)

For chrome users you have to use it as a webapp as it is not available in chrome web store.
[Web App Link](https://kantab.dshaw.qzz.io/app)

[Extension Landing Page](https://kantab.dshaw.qzz.io)
