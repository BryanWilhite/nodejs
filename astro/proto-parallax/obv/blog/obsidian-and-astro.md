---
title: Obsidian and Astro
description: An introduction to using Obsidian with Astro.
pubDate: Jul 30 2026
heroImage: ../../src/assets/blog-placeholder-3.jpg
---
Instead of using a full-blown, online CMS like:

- [Storyblok](https://www.storyblok.com/)
- [CloudCannon](https://cloudcannon.com/)
- [TinaCMS](https://tina.io/)
- [Decap CMS](https://decapcms.org/)
- [Contentful](https://www.contentful.com/)
- [Sanity](https://www.sanity.io/)

…we can work in a classic “word processor” retro style with Markdown here with [Obsidian](https://obsidian.md/). When the work escalates to a larger team, consider one of the Git-based CMS solutions like one of the first few choices listed above.

## working with images

Building a workflow around images can get complex real fast. The following Obsidian plugins might be helpful:

- [Paste transform](https://community.obsidian.md/plugins/paste-transform)
- [Note Image Manager](https://community.obsidian.md/plugins/note-image-manager)

## working with MDX files

Obsidian promises to support MDX files—[like the file](../using-mdx) that shipped with this sample Blog—with a community plugin, [mdx as md](https://community.obsidian.md/plugins/mdx-as-md-obsidian).

## other interesting challenges

Beyond image workflows and MDX-file handling, here are some Obsidian-specific topics to move forward under the Astro umbrella:

- transforming Obsidian [Wikilinks](https://en.wikipedia.org/wiki/Wiki#Linking_to_and_naming_pages) into HTML links based on custom business rules
- defining a front-matter schema that includes Obsidian conventions and the properties of a model from your enterprise domain
