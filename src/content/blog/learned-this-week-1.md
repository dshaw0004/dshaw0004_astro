---
slug: "learnedthisweek-1"
title: "What I learned new this week (week 1)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Jul 07 2024"
heroImage: "/whatilearned.png"
---

Before beginning with it I should clearify first why am I writing this.
Every day we learn something, specially me because I recently started using Linux for fulltime. So I am learning something every day about it. But I find out that I forget most of it because I do not write it down.
So I start writing it down. Also I thought that I should share this with everyone. 
There might be some information which is new to you. So let's get started.

> **Small Disclaimer**:- it is not a typical blog post where we deeply discuss about something. Here I will provide only a small brief about lots of thing.


1. **In Python**:  To convert a string of date e.g., '2024-07-06' into its corresponding timestamp in milisecond we can use python's built-in **`dateutil`** modules **`parser`**.

```python

from dateutil import parser

datetime_obj = parser.parse('2024-07-06')

print(datetime_obj.timestamp())

```

2. **In Linux**:  The `PATH` enviroment variable contains all the path of different directories where our system will look of executables.
For Example- when we use **gcc** command to compile `C Code` our system goes through each of the paths to find **gcc**. 
When it finds the binary for **gcc** it execute our command to compile the `C Code` else we get the error saying gcc is not installed.

3. **PATH Variable**:  To add new path to a directory binary and executables in the `PATH` enviroment variable we can use 2 different ways. First one is temporary and second one is permanent.

- To add new path in the PATH Variable temporarily just enter the following command in the terminal.

` export PATH=$PATH:/path/to/directory `
 
- To add new path in the PATH Variable permanently we have to follow few steps. 

<br/>

 __i.__ Open **~/.bashrc** file using vim. -> `vim ~/.bashrc`. **ZSH** users will open **.zshrc**. 

__ii.__ And wite the same commands of temporary addition there. Then Save it.

```bash
export PATH=$PATH:/path/to/directory
```

__iii.__ Reload the shell.

4. **In Linux**: We can use ***`echo $0`*** to print which shell are we using. For shell scripting we can just use ***`$0`***. 

5. **In Linux**: we can use ***`lspci`*** command to get information about pc hardward. Like- name of Audio Device, name of USB Controller.

6. **In Linux**: ***`lsb_release -a`*** command will show you a brief info about your os. Like distributor name, release version. 

7. **In Linux**: ***`hostnamectl chassis`*** will output which type of device you have. Laptop or PC.

That's it for this week because I still forgot to notedown few things. Meeting you next week.
