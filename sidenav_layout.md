---
layout: page_sidenav
title: Sidenav Layout
permalink: /sidenav-layout
---

The sidebar layout includes a small sidebar on the right hand side, which can be made "sticky" using the [pushpin plugin](http://materializecss.com/pushpin.html) from the Materialize framework. The demo displays a list of categories, but the category links will only work if the category list pages are manually created.

To enable the "sticky" sidebar, edit custom.js and uncomment the following code:

```
$('.sidebar').pushpin({ top: $('.sidebar').offset().top });
```
