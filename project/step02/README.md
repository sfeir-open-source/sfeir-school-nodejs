# Sfeir Schools

## Step 2

Une Sfeir School est un objet, par exemple:

```json
{
  "title": "Sfeir School NodeJS",
  "trainer": "Siegfried Ehret",
  "attendees": 42
}
```

- On va gérer les Sfeir Schools en mémoire avec un tableau.
- Modifier la route `GET` pour renvoyer l'ensemble des Sfeir Schools.
- Créer une route correspondant à la méthode `POST` pour ajouter une Sfeir School (installer le module [body-parser](https://github.com/expressjs/body-parser)).
- Lancer avec `npm start`.
- Tester avec [httpie](https://httpie.org/):
  - Pour récupérer la liste: `http http://localhost:3000/`.
  - Pour ajouter une Sfeir School: `http POST http://localhost:3000/ title="Sfeir School NodeJS" trainer="Ryan Dahl"`.

  Notes: depuis express v4.16.0, body-parser est déprécié et remplacé par express.