Écrivez un programme qui utilise les modules `fs` et `path` pour rechercher et afficher dans la console le chemin vers le fichier `coucou.txt`, créer un dossier `jtutu` et y copier le fichier `coucou.txt`

---

## CONSEILS

Les modules nodejs exposent de nombreuses méthodes. Référez vous à la documentation sur le site de node.

[-> fs](https://nodejs.org/api/fs.html)  
[-> path](https://nodejs.org/api/path.html)

Les accès au système de fichier peuvent être synchrones ou asynchrones.

```javascript
  // sync
  const contenuDuDossier = fs.readdirSync('/chemin/du/fichier');
```
```javascript
  // async
  fs.readdir('/chemin/du/fichier', (erreur, contenuDuDossier) => {
      // suite du code
  });
```

Utiliser les api asynchrones peut être déroutant, les callback imbriqués peuvent rendre le projet complexe, voir provoquer le redouté [callback hell](http://callbackhell.com/)
