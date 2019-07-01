---
date: 2019-07-01
title: Inversion Of Control
categories:
  - concepts
description: Framework vs Library
type: Document
---

## 控制反转 - InversionOfControl

从设计角度来看，Framework和Library的区别是什么？

Library像是一堆功能的集合，根据需求，自行调用，需要主动配合用户。

Framework像是帮你管理整个领域问题，用户需要了解如何使用。

## How to install

~~~ bash
# Install Jekyll and Bundler gems through RubyGems
~ $ gem install jekyll bundler

# Create a new Jekyll site at ./myblog
~ $ jekyll new myblog

# Change into your new directory
~ $ cd myblog

# Build the site on the preview server
~/myblog $ bundle exec jekyll serve

# Now browse to http://localhost:4000
~~~


~~~ bash
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── begin-with-the-crazy-ideas.md
|   └── on-simplicity-in-technology.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
|   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid YAML Frontmatter
~~~

## Front matter

The front matter is where Jekyll starts to get really cool. Any file that contains a YAML front matter block will be processed by Jekyll as a special file. The front matter must be the first thing in the file and must take the form of valid YAML set between triple-dashed lines. Here is a basic example:

~~~ html
---
layout: post
title: Blogging Like a Hacker
---
~~~

Between these triple-dashed lines, you can set predefined variables (see below for a reference) or even create custom ones of your own. These variables will then be available to you to access using Liquid tags both further down in the file and also in any layouts or includes that the page or post in question relies on.

![Example image](https://images.unsplash.com/photo-1481487196290-c152efe083f5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1920&h=1080&fit=crop&s=80308172730757a7db0434987fa985f3)

## Where additional pages live

Where you put HTML or Markdown files for pages depends on how you want the pages to work. There are two main ways of creating pages:

* Place named HTML or Markdown files for each page in your site’s root folder.
* Place pages inside folders and subfolders named whatever you want.

Both methods work fine (and can be used in conjunction with each other), with the only real difference being the resulting URLs. By default, pages retain the same folder structure in `_site` as they do in the source directory.