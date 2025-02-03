---
slug: "learnedthisweek-17"
title: "What I learned new this week (week 17)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Oct 27 2024"
heroImage: "/whatilearned.png"
---



1. In binary, the digit that is farthest to the right is called the Least Significant Bit (LSB) and the left-most digit is called the Most Significant Bit (MSB).

2. In Python Selenium, we can take screenshot of entire web page using the **`screenshot()`** method of the driver.
```python 

from selenium import webdriver

driver = webdriver.Edge()
driver.get('https://dshaw0004.netlify.app')
driver.screenshot('dshaw0004.png')

driver.quit()

```

3. Also we can take screenshot of any specific element by using its **`screenshot()`** method.
```python

from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Edge()
driver.get('https://dshaw0004.netlify.app')

welcome = driver.find_element(By.CSS_SELECTOR, 'div.welcomeSection')
welcome.screenshot('welcome-to-dshaw0004.png')

driver.quit()

```

4. I recently learned that we can disable the **scripts, forms, popups** of an **`iframe`** embedded webpage just by using **`sandbox=""`** attribute.

5. In HTML, `output` tag is generally used to output simple form result, calculation etc.

That’s it for this week. Meeting you next week.
