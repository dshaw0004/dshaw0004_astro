---
slug: "learnedthisweek-10"
title: "What I learned new this week (week 10)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Sep 08 2024"
heroImage: "/whatilearned2.png"
---



1. In Python Flask, we can use {% include '' %} to add other html, svg or xml file into current file. 
Example - `{% include 'Card.html' %}`

2. In vim, to move current line down by a specific number of lines we can use `:m +n` where n is the number of lines to move.
Example - `:m +4` or `:m +2`

3. Similar to `:m +n`, `:m -n` can be used to move current line up by a specific number of lines.
Example - `:m -4` or `:m -2` but there is a catch. It will move the current by n-1 numbers of line.
`:m -4` will move up 3 lines above instead of 4 because while moving up `-1` is the current line
according `-4` is the 3rd line.

4. In Vim, `:/<some-text>` will search all the occurance of provided text in the current file.
To go to next occurance press `n` and to go previous occurance press `shift-n` or `N`.

5. In Mathematics, **tetration** is repeated exponentiation which is denoted by <sup>n</sup>a.
Unlike exponentiation which is denoted by a<sup>n</n> **tetration** represent **a to the power of a, n-1 times,** i.e., a<sup>a<sup>.<sup>.<sup>a</sup></sup></sup></sup>
Example - <sup>4</sup>2 means 2<sup>2<sup>2<sup>2</sup></sup></sup> which is equals to 65,536
Here is its break down, 2<sup>2<sup>2<sup>2</sup></sup></sup> = 2<sup>2<sup>4</sup></sup>
= 2<sup>16</sup> = 65,536

That’s it for this week. Meeting you next week.
And if you can following up with this series you may encounter the I am missing the week 9
because I am getting very lazy. Either I am playing games all the times
or I am not writing it down, so I did not had anything last week.



