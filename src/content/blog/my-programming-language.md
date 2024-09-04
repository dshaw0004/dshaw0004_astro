---
slug: "my-programming-language"
title: "I made my own Programming Language - Headache"
description: "I have made my own esoteric programming language named Headache"
pubDate: "Sep 2 2024"
heroImage: "/headache.webp"
---


Yes, it's right. I have made my own programming language. 
Not a general programming language but an **Esoteric Programming Language**. 
Recently I have learned about the **Brainfuck** programming language which is also an esoteric programming language.
And I tried to make one of my own. Then I come to the idea of **Headache** an esoteric programming language that can only output text to the console and use only symbols like - `+, -, ^, @` etc.

But before that let's talk about Esoteric Programming Languages.


## What is an Esoteric Programming Language ?

The **wikipedia** defination of **Esoteric Languages** is "An esoteric programming language (sometimes shortened to esolang) is a programming language designed to test the boundaries of computer programming language design, as a proof of concept, as software art, as a hacking interface to another language (particularly functional programming or procedural programming languages), or as a jokell." And my thoughts about esolang is "esolang is a special kind of programming language which is not for every one. It is mainly build for specific cases where a general programming language can not perform that well. Sometimes esolang are build for fun like - Brainfuck etc.

Now you know about esoteric programming language.
Let's discuss about my language **headache**.

## What is Headache ?

Pain in head caused by debugging your JavaScript application is called headache.
This is the general defination of headache. I have made this language with this line in mind. 
My programming language should give you same **headache** as you get from debugging a JavaScript application.
If you do not get any headache congrats your are a master.

Enough of bluffing, Headache is not an usual type of language where your write something like `print('hello world')` and its get printed in your console. 
To use headache you have to have a good knowledge of ASCII codes. It uses a counter which store the ASCII code and we have to increase or decrease that counter to our desired ASCII code then it will print the symbol related to that specific ASCII code.

## How to use it ?

To use it we have to first learn it. Here is [docs](https://github.com/dshaw0004/headache).

Now create a `.headache` file, write your code in that file.
And to run it you can take 2 different approach.

### Using the interpreter

**This method is currently only supported for linux**.
At First download the executable of the interpreter from the [**github**](https://github.com/dshaw0004/headache/releases/). Then you can run a headache file using this command `path/to/headache-interpreter path/to/headache-file.headache`. Visit the [docs](https://github.com/dshaw0004/headache) for more info.

### Using Source Code

If you are not interested in downloading the binary of interpreter or if you are using Windows then follow this.
Then interpreter of headache is made using **Python** and it does not rely on any external package.
You just need to have have python installed on your system. Then just download the [headache.py](https://github.com/dshaw0004/headache/blob/main/headache.py) file from GitHub. Finally to run any `.headache` file just enter `python headache.py path/to/file.headache` in your terminal.

## Wrapping Up:

Finally I want to say don't take it seriously, I have made it as a joke. So take it as joke.
Also if you really like this then a [star](https://github.com/dshaw0004/headache) on github would be really appreciative.
And if you want you can contribute to it too.
