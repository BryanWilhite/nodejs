# Markdown-driving web sites with Hugo

This samples follows “[Migrating from Jekyll+Github Pages to Hugo+Netlify](https://www.sarasoueidan.com/blog/jekyll-ghpages-to-hugo-netlify/)” by CSS maven [Sara Soueidan](https://twitter.com/SaraSoueidan). In keeping with our npm bias, we start with [the package for the CLI](https://www.npmjs.com/package/hugo-cli):

```bash
sudo npm install -g hugo-cli
hugo version
```

The `hugo version` command might throw an error like `EACCES: permission denied, mkdir '/usr/lib/node_modules/hugo-cli/tmp'`. In this case run:

```bash
sudo hugo version
```

And them run:

```bash
hugo version
```

To verify that Hugo can be run without elevated privileges. Then we can set up a site from the `md-hugo` [folder](../md-hugo):

```bash
hugo new site quick-start
```

Then we add the [Ananke theme](https://themes.gohugo.io/gohugo-theme-ananke/) from the `quick-start` [folder](./quick-start):

```bash
git submodule add https://github.com/budparr/gohugo-theme-ananke.git themes/ananke
echo 'theme = "ananke"' >> config.toml
hugo new posts/my-first-post.md
hugo server -D
```

Continue from [Step 4 of the Quick Start](https://gohugo.io/getting-started/quick-start/#step-4-add-some-content).

## related links

* “[Quick Start](https://gohugo.io/getting-started/quick-start/)”