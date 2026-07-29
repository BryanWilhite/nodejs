# in this Studio it’s official: eleventy does _not_ work with Vite correctly 😐😠

In addition to over two days of time wasted, the digitized public provides me with two clues:

## 1. a developer of a Vite plugin for eleventy warns us that both Vite and eleventy process `*.html` files

This is a message from a developer from over five years ago (because he has not updated the entire repo in over five years):

>Because Vite has built-in handling for HTML files, it's recommended to _not_ use `.html` files with Eleventy. If you're writing Nunjucks, for instance, use `.njk` instead of `.html`. Don't rely on Eleventy's default template handling for HTML files is what I'm saying.
>
>—<https://github.com/Snugug/vite-plugin-eleventy#important-integration-caveats>
>

This conflict over HTML-file processing _should_ mean that Vite and eleventy _cannot_ work together properly. Perhaps I am misunderstanding the meaning? I do notice that the “[starter template](https://github.com/matthiasott/eleventy-plus-vite/tree/main/src)” for the `eleventy-plugin-vite` plugin does _not_ use `*.html` files as eleventy templates. Dropping HTML templates would be seriously disruptive to my Studio pipeline.

## 2. the guy who used to work on Slinkity has moved on to work on Astro 😲

Here is a message from the [Slinkity](https://slinkity.dev/) guy:

>**⚠️ Slinkity is no longer maintained.** The project owner [(@bholmesdev)](https://github.com/bholmesdev) now works on [Astro](https://astro.build) full-time. If you want to build component-driven content sites, give Astro a try! If you're committed to 11ty and want to use client components, consider [11ty's WebC project.](https://www.11ty.dev/docs/languages/webc/)

I have walked through the friendly `npm init slinkity` experience and I notice that, by default, Slinkity is _also_ not using `*.html` files as eleventy templates. It is using a Markdown file, `index.md` 😐

## signs point toward none of these issues being “fixed” 🛑

- The conflict over HTML-file processing between Vite and eleventy does not feel trivial to me; it feels _fundamental_ to Vite.
- Vite likely has no way to easily “turn off” its handling of HTML files in order to not interfere with eleventy.
- Zach Leatherman has “Build Awesome” newness on his plate surely making this HTML template “fix” a non-priority.

## what needs to be “fixed”?

I think the short term “fix” to my issues here is to warn others _not_ to use HTML templates.

Steps to reproduce:

1. build a simple eleventy publication, depending on `@11ty/eleventy-plugin-vite` and using  an HTML file as the Index template (`index.html`) and HTML files for the layouts.
2. add the conventional `_data/settings.json` file and use the HTML templates to render data from this file
3. run `npm start` and or `npm build` and the settings data will not be rendered in any output base on HTML templates (also, Vite my try to add its `_site` directory to your build output 😐)

## my daft use of Typescript should not eliminate any of the issues mentioned here

I finally realize that there was no promise at all that client-side Typescript would work with `@11ty/eleventy-plugin-vite`. I am calling `addPassthroughCopy` in my eleventy config file to get the _design_-time Vite experience with Typescript working. But Vite is not auto-magically converting Typescript into the “assets” and this issue could be my fault. But this fault of mine should have no impact on the eleventy data cascade issues aforementioned.

[Bryan Wilhite is on LinkedIn](https://www.linkedin.com/in/wilhite)🇺🇸💼
