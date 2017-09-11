# my introduction to `http-server`

[`http-server`](https://www.npmjs.com/package/http-server) is my lightweight way of running a tiny website from any folder on my machine. From a Windows-biased point of view (and a LAMP-biased point of view), this is a radical move away from the massive ceremony around setting up a website.

From my Visual Studio Code shell (with this repository folder open), run:

```bash

http-server http-server -o -c-1

```

## installation notes

On Windows, from ChocolateyGUI, install `nodejs` and/or from bash:

```bash

sudo apt-get install nodejs

```

Then in bash and/or PowerShell:

```bash

npm install http-server -g

```

I was attracted to running this exclusively from Ubuntu Bash on Windows. I found that this was incompatible with the defaults of Visual Studio Code on Windows. Additionally, I ran into the issue documented in “[Node http-server not working on Windows 10 Ubuntu Bash](https://stackoverflow.com/questions/37497914/node-http-server-not-working-on-windows-10-ubuntu-bash)”—which can be summarized by this bash command:

```bash

sudo ln -s /usr/bin/nodejs /usr/bin/node

```

## Using package.json to call `http-server`

I currently intend to run `http-server` through `npm start` from the root subdirectory of each sample which means there must be a `package.json` file, declaring `scripts.start`. There is a [package.json](../package.json) file in the root of this repository so this command will call http-server and open a browser:

```bash
npm run server
```