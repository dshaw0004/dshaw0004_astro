---
slug: "learnedthisweek-15"
title: "What I learned new this week (week 15)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Oct 13 2024"
heroImage: "/whatilearned3.png"
---



1. In Python Opencv, use this snippet to read each frame of a video as a image.
```python 
import cv2

path = 'path/to/video.mp4'
vidcap = cv2.VideoCapture(path)

success, image = vidcap.read()
if not success:
    raise Exception('video not found')

cv2.imshow('video frame', image)
cv2.waitKey(0)

while success:
    success, image = vidcap.read()
    cv2.imshow('video frame', image)
    cv2.waitKey(0)

```

2. Total size of python **torch** package is around ***2824*** MB which is around **2.76 GB**.

3. In Python, to convert a **CSV** file data into dictionary use built-in `csv` module's **`csv.DictReader(file)`**.
Example :- 
```python

import csv

with open('path/to/file.csv', 'r') as file:
    reader = csv.DictReader(file)
    data: list[dict] = list(reader)
    print(data)

```

4. I just learned today that the *sine*, *cosine* of trigonometry have a generic name. 
And the generic name is **Trigonometric Function**. 
I am feeling so dumb today.

That’s it for this week. Meeting you next week.
