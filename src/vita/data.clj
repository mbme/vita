(ns vita.data)

(def datas
  [
   {:name "TEST"
    :data "# test

and so on

- so we can make it coool!
- and add other stuff
- like http links: http://google.com

\"OK GO\" we can say

this is so ~~bad~~ cool

First Header  | Second Header
------------- | -------------
Content Cell  | Content Cell
Content Cell  | Content Cell"}

   {:name "Advertisement :)"
    :data "---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!"}

   {:name "Basic"
    :data "
# h1 Heading
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***"}

   {:name "Typographic replacements"
    :data "Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,

Remarkable -- awesome

\"Smartypants, double quotes\"

'Smartypants, single quotes'"}

   {:name "Emphasis"
    :data "
**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Deleted text~~

Superscript: 19^th^

Subscript: H~2~O

++Inserted text++

==Marked text=="}

   {:name "Blockquotes"
    :data "

> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.
"}

   {:name "Lists"
    :data "Unordered

+ Create a list by starting a line with `+`, `-`, or `*`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as `1.`

Start numbering with offset:

57. foo
1. bar

"}

   {:name "Code"
    :data "
Inline `code`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code \"fences\"

```
Sample text here...
```

Syntax highlighting

``` js
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
```"}

   {:name "Tables"
    :data "
| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |
"}

   {:name "Links"
    :data "
[link text](http://dev.nodeca.com)

[link with title](http://nodeca.github.io/pica/demo/ \"title text!\")

Autoconverted link https://github.com/nodeca/pica (enable linkify to see)
"}
   ])
