---json
{
    "permalink": "./one-from-json.html",
    "layout": "layouts/entry.html",
    "title": "other entry"
}
---
# Markdown File in a Collection with JSON `permalink`

Will `11ty` properly ignore the subfolder of this template and write to the root of the eleventy output folder?

Yes:

```console
[11ty] Writing ../_site/one-from-json.html from ./other-entry/one.md (liquid)
```

>[!info]
>Note how the front matter of the document is in JSON format. Eleventy supports this but Obsidian does not 😬

[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
