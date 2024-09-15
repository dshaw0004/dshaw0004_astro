---
slug: "learnedthisweek-11"
title: "What I learned new this week (week 11)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Sep 15 2024"
heroImage: "/whatilearned3.png"
---

I am currently working on a flask application, an unsplash like application but with look of a social media application.
So most of this post will be about flask.


1. In Python Flask, we can set cookies to user device using **session**. But this cookie will only last for the session.
This is basically **Session Storage** like cookie storing. To use this you first have to add a secret key to your application.
`app.secret_key = 'someVerySecretKey'`. Once you set a secret key just import **session** from flask and use it as a dictionary.

```python

from flask import Flask, session
app = Flask(__name__)
app.secret_key = 'someVerySecretKey'

@app.route('/set-session')
def set_session():
    session['username'] = 'dshaw0004'
    session['role'] = 'python developer'
    return 'session set'

@app.route('/get-session')
def get_session():
    username = session.get('username')
    role = session.get('role')
    return f'My name is {username} and I am a {role}'

if __name__ == '__main__':
    app.run()

```

2. Flask provides a **`flash()`** function that allows you to store a message in the session that will be available to the next request and rendered on the template.
It can be really helpful to show server message to the webpage conditionally. Here is an example of flash - 

```python
# server.py
from flask import flash, render_template

@app.route('/')
def index():
    flash('some message')
    return render_template('index.html')
```

```html
# index.html

<html><head></head>
<body>
<!-- some other html code -->
{% with flash_message= get_flashed_messages()  %}
{% if flash_message %}
<div>
    <ul>
        {% for message in flash_message %}
        <li >{{ message }}</li>
        {% endfor %}
    </ul>
</div>
{% endif %}                
{% endwith %}
</body></html> 
```

3. Python Flask have a thing called **BluePrint**. It basically let's you work on a part of your flask application totally separately in a subfolder of your main project directory. And at the end you just have to register the BluePrint on your main flask app.
Truly saying I can't enplain it properly. I want to only one thing "if you use Flask and don't know about it then try it once".
[NeuralNine has a great video on Flask BluePrint](https://www.youtube.com/watch?v=_LMiUOYDxzE), you can watch that.

4. If you have watch NeuralNine's video on Flask BluePrint and you use the file structure shown on his video then there will be some changes in the `extends & include`.
Generally we do `{% extends "base.html" %}` but while using BluePrint we have to do `{% extends "<foldername>/base.html" %}`, here `<foldername>` is the name of the folder inside `template` folder on which all the html files are store.
Example : `{% extends "helloworld/base.html" %}`


That’s it for this week. Meeting you next week.
