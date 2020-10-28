# Lixt

LitElement New UX Tool of Web Development.
Generate static web pages with links to js and css files that are stored in the `dist` folder.
Oriented to HTML5, CSS, ES6 + and Web components standards through LitElement.
Based in conventions vs configurations.

**[lixt](https://www.npmjs.com/package/lixt)** is a set of tools to create static sites using standard javascript.

## Tools
*[lixt](https://www.npmjs.com/package/lixt)*, the command line interface to generate static pages

## Install like global cli
```
$ npm install -g lixt
```

## Usage

### Generate scafolding
```
$ lixt create-page scafolding [--languages 'lang1','lang2'[,...]] [--commonfiles 'file1','file2'[,...]]
```

### Generate new Page
```
$ lixt create-page PAGENAME [--languages 'lang1','lang2'[,...]]
```

### Generate web-component
```
$ lixt create-wc WC-NAME
```

### Generate Build
To generate estatic HTML pages
```
$ lixt build [--port PORT] [--workdir WORKDIR]
```

## TREE DIR STRUCTURE

El proyecto consta de la siguiente estructura de carpetas:

|__ dist (after the build)
|__ resources
|__ src
    |__assets
    |__components
    |__css
    |__js
    |   |__lib
    |   |__pages
    |   |__tpl
    |__json

### Path `dist`
Path when the html pages are building after `npm run build`

### Path `recursos`
Path whith resources like robots.txt and sitemap.xml.
These files are copied into dist dir.

