## Summary

A personal blog based on Astro, with rich features and classy minimalist design.

## Development
Based on [wjwei-blog](https://github.com/wjwei-handsome/wjwei-blog).

## Features

- Astro v4 Fast 🚀
- TailwindCSS Utility classes
- Accessible, semantic HTML markup
- Responsive & SEO-friendly
- Multi-language support
- Dark / Light mode, using Tailwind and CSS variables
- Pinned posts and projects
- [Astro Assets Integration](https://docs.astro.build/en/guides/assets/) for optimised images
- MD & [MDX](https://docs.astro.build/en/guides/markdown-content/#mdx-only-features) posts
- Pagination
- [Automatic RSS feed](https://docs.astro.build/en/guides/rss)
- Auto-generated [sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [Astro Icon](https://github.com/natemoo-re/astro-icon) svg icon component
- Back To Top button

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## Build
```shell
# rmdir /s /q .astro
# rmdir /s /q dist

npm install
npm run build

npm run preview
```

## Push
```shell
# git init
# git branch -M main
# git remote add origin https://github.com/Crazzy-Rabbit/lulshi-blog.git

git add .
git commit -m "add files"
git push
```


