---
slug: "learnedthisweek-6"
title: "What I learned new this week (week 6)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Aug 11 2024"
heroImage: "/whatilearned2.png"
---



Before beginning with it I should clearify first why am I writing this.
Every day we learn something, specially me because I recently started using Linux for fulltime. So I am learning something every day about it. But I find out that I forget most of it because I do not write it down.
So I start writing it down. Also I thought that I should share this with everyone. And this is the third week.
There might be some information which is new to you. So let's get started.


1. In Python, we can actually do this `lower range < value < higher range` or something similar. 
Example - `0 < 5 < 10` returns true. 
If any single condition in this large conditions resolve False then it will return False.
 
2. In Vim, `zz` command will vertically center the cursor line.

3. In Linux, we can pass multiple command separated by **semicolon** to run them sequentially.
Example: `cd dict; ls -a` it will change the directory to `dict` then run `ls -a` command.
The good part of it is that if the initial commands fail or do not exist lateral commands will still be executed.

4. In Linux, `column` command will print content of a file in a tabular form.
This is a really great tool for machine learning developers.
We can just enter `column -s ',' data.csv -t` and it will display the data in well separated tabular format.

5. In Linux, `truncate` command can be used to resize a file. 
We can expand or shrink file size.
Example: `truncate -s 1000 filename.txt` will resize the `filename.txt` to have on 1000 bytes.
If `filename.txt` had more data then 1000 bytes then all of them will be lost.

6. `truncate -s 0 filename.txt` can be used to clear all the content of a file.

That’s it for this week. Meeting you next week.

