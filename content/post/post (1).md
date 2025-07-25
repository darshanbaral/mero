+++
title = "Create new hugo theme"
date = "2019-05-10"
tags = ["tutorial"]
categories = ["Hugo"]
description = "A brief summary for the post 1. And this is slightly longer than the others. And this one also has three sentences. Nevermind, this one actually has four sentences."
mainImage = "images/post1/post1_skyline.jpeg"
mainImageThumbnail = "images/post1/post1_skyline_tn.jpeg"
mainImageCaption = "Awesome Caption *Here*"
+++

The `hugo new theme` command will scaffold the beginnings of a new theme for you to get you on your way.

If you’re creating a theme with plans to share it on the Hugo Themes website please note the following: - If using inline styles you will need to use absolute URLs, for the linked assets to be served properly, e.g. `<div style="background: url('{{ "images/background.jpg" | absURL }}')">` - Make sure not to use a forward slash `/` in the beginning of a `URL`, because it will point to the host root. Your theme’s demo will be available in a subdirectory of the Hugo website and in this scenario Hugo will not generate the correct `URL` for theme assets. - If using external CSS and JS from a CDN, make sure to load these assets over `https`. Please do not use relative protocol URLs in your theme’s templates.

Hugo can initialize a new blank theme directory within your existing themes using the hugo new command:

```
hugo new theme [name]
```

An image is here.

If you’re creating a theme with plans to share it on the Hugo Themes website please note the following: - If using inline styles you will need to use absolute URLs, for the linked assets to be served properly, e.g. `<div style="background: url('{{ "images/background.jpg" | absURL }}')">` - Make sure not to use a forward slash `/` in the beginning of a `URL`, because it will point to the host root. Your theme’s demo will be available in a subdirectory of the Hugo website and in this scenario Hugo will not generate the correct `URL` for theme assets. - If using external CSS and JS from a CDN, make sure to load these assets over `https`. Please do not use relative protocol URLs in your theme’s templates.