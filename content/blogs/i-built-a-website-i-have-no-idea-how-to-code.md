---
title: "I Built a Website. I Have No Idea How to Code."
date: "2025-03-15"
description: "A Business Process Analyst with zero technical background, a GitHub account I made four days ago, and a deadline. Here's what happened."
tags: ["Career", "No-Code", "Business Analysis", "Web Development", "AI Tools"]
coverImage: "/blogs/nithya-cartoon-v7.png"
featured: true
readingTime: 8
---

*Personal Essay · March 2025*

My job title is Business Process Analyst. I've held variations of this role my whole career — BA, Business Systems Analyst — but never once a title with the word "developer" or "engineer" in it. I studied Mechanical Engineering and went on to get a Master's in Engineering Management. I understand systems. I understand process. What I have never done is write code. That means I sit in rooms with stakeholders, listen carefully, and ask the annoying questions no one else wants to ask. That's the job. That's always been the job.

Last week, a friend asked me to build a website for his organization — the Massachusetts Badminton Foundation. And instead of saying "I'm not a developer, you need to hire someone," I said sure.

What followed was one of the most disorienting, frustrating, and quietly thrilling weeks of my professional life.

---

## The Setup

My friend shared his GitHub repository with me. I didn't have a GitHub account. I made one. I learned what "forking" means — essentially copying someone else's code into your own workspace so you can change it without touching theirs. I forked it. I connected GitHub to Replit, a browser-based coding environment that lets you run code without installing anything on your machine. And I started building.

The site needed to be real — and I mean real. This wasn't a brochure. It wasn't a few pages with pretty images and a contact form. It was a fully transacting website: internal APIs powering the data layer, an officer management system, a sponsors section organized by event, photo uploads, and an admin panel restricted to staff. And then there was the part that made it all feel very serious, very fast — a donor section where real people could make real financial contributions to a real organization. That part had to work. It had to be secure. There was no room for "we'll fix it later."

---

## The First Wall

The admin button was visible to everyone. Anyone visiting the site could see it. This is the kind of thing a developer would never let slip — but I didn't know to look for it. Lesson one: **sensitive tools should be hidden by default**, only appearing when you navigate directly to a protected URL like `/admin`.

Then I tried navigating to `/admin` directly. I got a 404. The page didn't exist. The JavaScript check that was supposed to handle that URL never ran — because there was no actual page file at that route. Every URL a visitor can reach needs a real page behind it. That's not optional. That's just how the web works.

> "The preview is blank — did I break everything?"
> — Me, approximately four times

A blank preview screen became a recurring feature of my week. No error. No message. Just white. The instinct is to assume catastrophic failure. The reality, every single time, was a small configuration issue — a server not running the right command, a wrong port, a setting I hadn't touched yet. **A blank screen is not a disaster. It's just a missing piece of information.** That took me a while to internalize.

But then — it worked. The preview loaded. The site was there, on my screen, real and functional. I'm not going to pretend I was calm about it. I was literally jumping up and down. After all the blank screens and configuration errors and moments of genuine doubt, seeing it come together in front of me was one of the best feelings I've had in a long time.

---

## The Deployment Chapter

Building the site was one thing. Getting it onto the internet was a different kind of hard — and I walked into it completely unprepared for the roadblocks ahead.

I tried GitHub Pages first. It failed. What I didn't know is that GitHub Pages only hosts static websites — flat files, no server logic. This site had an admin system and file uploads. It needed a server. GitHub Pages couldn't run it. No one told me this upfront because anyone who builds websites already knows it. I didn't.

So I created a Vercel account. Vercel is designed for exactly this kind of deployment — you connect it to your GitHub repository, it detects your code, builds it, and puts it live. It failed. Same error, different attempts, same result. The error message pointed to a file called `instrumentation.ts`. I didn't know what that file did. I didn't write it. But it was blocking the build.

Here's where I stopped panicking and did what I actually know how to do. I analysed the error. I reviewed the logs. I researched what the message meant. I used every tool at my disposal — including Replit — to walk through the problem, understand the root cause, and surface possible solutions. Within two hours, I had the answer.

A folder called `.vercel/output` had been accidentally committed to the GitHub repository. Vercel saw it, assumed the site was already built, skipped the build process entirely, and tried to deploy stale broken files. I removed the folder, cleaned up the repository, and redeployed. It worked. **When something keeps failing the same way, the problem is almost always configuration, not code — and the fix is analysis, not guesswork.**

I pointed the DNS. I waited for propagation. And then — the site was live. Actually, truly, publicly live. I was ecstatic. All of it — the blank screens, the 404s, the deployment errors, the two hours of methodical debugging — it all collapsed into that one moment of the site loading in a browser with a real domain name. That feeling is hard to describe if you haven't built something from nothing before. I highly recommend it.

---

## What I Actually Learned

**01 — Static and server-side sites are fundamentally different.**
Not every site can be a flat file. If there's an admin system, an API, or dynamic data — you need a server, and your hosting platform has to support that.

**02 — Your repository and your deployment platform must stay in sync.**
Vercel was deploying old code because the repository wasn't updated. The code that lives on your machine means nothing if it never reaches GitHub.

**03 — Know your chain: code → build → deploy → DNS → domain.**
Each link can break independently. When a site doesn't load, work through each step in order. Guessing is slower than methodical.

**04 — DNS takes time and requires access.**
If someone else owns the domain, you depend on them for any DNS change. Clarify domain ownership before you start a project — not after you've already deployed.

**05 — Panic narrows your thinking.**
The problems that took longest to solve were the ones where I was throwing solutions at the wall instead of reading what the error was actually saying.

---

## The Team I Didn't Know I Had

None of this happened in isolation. I want to be honest about that. What made this possible was a team — just not the kind you'd find on an org chart. Replit was my development environment and my on-call engineer, walking me through problems and proposing solutions in real time. GitHub was my version control system, keeping the code safe and organized. Vercel was my deployment pipeline. Claude and Gemini were my research partners, my debuggers, my sounding boards — available at any hour, never impatient, always ready to dig into the next problem with me.

In any other era, this project would have required hiring a developer. Today, a Business Process Analyst with the right AI tools, the willingness to learn, and the analytical instincts to ask the right questions can build and ship something real. That shift is significant. I don't think enough people in non-technical roles have realized it yet.

---

## The Thing I Didn't Expect

Somewhere around day three, I realized I had been doing my job the entire time. I was acting as the business owner — I knew what the organization needed, what the brand should feel like, what features mattered. I was the requirements analyst — translating real-world needs into specific requests. I was the user tester — clicking around, finding what broke, reporting back. I was the deployment engineer — logging into Namecheap, reading Vercel logs, deleting folders from the repository.

I've spent years believing there was a hard wall between what I do and what developers do. This week showed me the wall is much thinner than I thought. I couldn't have written the code. But I could do everything around it — and it turns out that's most of the work.

The site is live. It works. Real people are using it.

[Visit massbf.org](https://www.massbf.org/)

Nothing was ever truly broken. Every issue had a solution. The site was always recoverable. I just had to stay with it.

That's what actually matters.

---

*Business Process Analyst. Accidental web developer. If you're a non-technical professional wondering whether the technical side is accessible to you — it's more accessible than you've been told. Start somewhere. Stay curious. Don't stop at the first blank screen.*
