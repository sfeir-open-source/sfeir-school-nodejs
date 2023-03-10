<!-- .slide: -->

# Les API: require(‘url’)

* `URL`: parse et construit un objet `URL`.
    * `const myURL = new URL('https://example.org?id=123')`
* `URLSearchParams` : construire et manipuler la chaîne de requête de l'URL.
    * `myURL.searchParams.get("id")`
<br>
<br>
* `url.format()`: créer une url (string) à partir d’un objet (legacy API).
* `url.parse()`: créer un objet à partir d’une url (legacy API).
* `url.resolve()`: comme path.resolve() (legacy API).

##--##

<!-- .slide: class="with-code max-height" -->

# Les API: require(‘url’)

```bash
┌────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                              href                                              │
├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤
│ protocol │  │        auth         │          host          │           path            │ hash  │
│          │  │                     ├─────────────────┬──────┼──────────┬────────────────┤       │
│          │  │                     │    hostname     │ port │ pathname │     search     │       │
│          │  │                     │                 │      │          ├─┬──────────────┤       │
│          │  │                     │                 │      │          │ │    query     │       │
"  https:   //    user   :   pass   @ sub.example.com : 8080   /p/a/t/h  ?  query=string   #hash "
│          │  │          │          │    hostname     │ port │          │                │       │
│          │  │          │          ├─────────────────┴──────┤          │                │       │
│ protocol │  │ username │ password │          host          │          │                │       │
├──────────┴──┼──────────┴──────────┼────────────────────────┤          │                │       │
│   origin    │                     │         origin         │ pathname │     search     │ hash  │
├─────────────┴─────────────────────┴────────────────────────┴──────────┴────────────────┴───────┤
│                                              href                                              │
└────────────────────────────────────────────────────────────────────────────────────────────────┘
(All spaces in the "" line should be ignored. They are purely for formatting.)
```

https://nodejs.org/api/url.html
<!-- .element: class="credits" -->