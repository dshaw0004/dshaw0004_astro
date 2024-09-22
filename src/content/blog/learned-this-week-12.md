---
slug: "learnedthisweek-12"
title: "What I learned new this week (week 12)"
description: "Everyday we learn something new but sometimes we forgot that because did not note that down. Specially I do, so I started to write down a small brief about everything I learned. And decided to share that with everyone on weekly basis so that others might learn something new."
pubDate: "Sep 22 2024"
heroImage: "/whatilearned4.png"
---



1. In Vim, if we have selected some characters or paragraph and want to count the number of characters then we have to type
**`:'<,'>s/\%V./&/gn`** while the paragraph is selected.

2. In Linux, instead of using `.env` file for storing the environment variable, we can write that inside the `.bashrc` file if we have access to `.bashrc`.
Example :- **`export SOME_SECRET_KEY="some_random_key_for_your_app"`**.

3. In Python, to access the environment variable we have to use `getenv()` or `environ` from the os module.
Example - 
```python 
import os 

print(os.environ['SOME_SECRET_KEY'])

print(os.getenv('SOME_SECRET_KEY')
```

4. In Linux, `.bashrc` does not support storing and exporting a json content. But there is a way. 
We have to stringify that by making that json content single line and adding quotation mark at the beginning and the end of the json content.
Then you just have to jsonify in your programming language.

```bash
export FIREBASE_CREDS_JSON='{"project_id": "your id goes here", "type": "your project type", "client_id": "your client_id", "...": "..."}'
```

```python
import os, json

creds_string = os.getenv('FIREBASE_CREDS_JSON')

creds_dict = json.loads(creds_string)
```


That’s it for this week. Meeting you next week.
