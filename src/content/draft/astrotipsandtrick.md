---
title: Astro Tips and tricks
description: Few tips and tricks for astro js
pubDate: "Sep 18 2023"
heroImage: "/blog-placeholder-3.jpg"
draft: true
---

Astro is an all-in-one web framework for building fast, content-focused websites i.e. static sites like documentation or blogs.
Astro has become very popular lately.
A lot of developers are jumping right in to start few and its a very good framework special for static sites. My this website is also built with Astro.
Yes this website on which you are currently reading this blog.

You are probably thinking "I should learn **Astro**, everyone is using it." What should you use that's your choice. I am not telling you should or shouldn't learn Astro.

If you are decided to learn Astro or you are already working with it then I have few tips for you.

## Conditional styling

If you don't know **conditional styling** means applying css styles to a component or a specific element only when a condition is true otherwise applying different styles.

If you know **React**, you might do something like this -

```html
<div className={condition ? "condTrue" :  "condFalse"}>
    {children}

</div>
```

You can also do this in Astro. But there is an another way. Like this

```astro
---
const { condition, children } = Astro.props;
---

<div class="container">
	{children}
</div>
{
	condition ? (
		<style>/* when condition is true apply these styles*/</style>
	) : (
		<style>/* when condition is true apply these styles*/</style>
	)
}
```

Why would you do this instead of traditional method ? This is fancy and it stand out from others.

### Limition
