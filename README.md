Welcome to the HTML, CSS, and JavaScript template.

There are three main files in action here, all in the `src/` folder:

- [index.html](src/index.html), which shows the message and is the root of the site.
- [script.js](src/script.js), which renders the spinning square.
- [style.css](src/style.css), which sets page colors.

The template runs the [Caddy](https://caddyserver.com/) web server,
which is very powerful. By uncommenting the `templates` directive
in [Caddyfile](Caddyfile#L5), you can use Go templates in every file,
which can run server-side includes, render Markdown, and much more.

For documentation on Caddy templates, [see here](https://caddyserver.com/docs/modules/http.handlers.templates#docs)!

Thanks for using Big Fun Cloud!