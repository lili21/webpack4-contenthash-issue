webpack-4-contenthash-issue
==============

Reproduction Step
------

```bash
$ yarn
$ yarn build
```

It will produce two directory - **dist-1** , **dist-2**. within that, You can tell the `main` chunk and the `vendors` chunk have same **contenthash**, but with differenct content. 

```javascript
// dist-1/main-xxx.js
(window.webpackJsonp=window.webpackJsonp||[]).push([[2]...
```

```javascript
// dist-2/main-xxx.js
(window.webpackJsonp=window.webpackJsonp||[]).push([["main"]...
```

What's the problem ?
----

Let's say I'm using a CND service. Because of the filename is same, and the cache of CDN, even if the content is updated, I'm still get the old one, which will break my app.

How to fix it ?
----

I think contenthash should be **hash** of the **content**, I mean, the really content, the content of the output file.

