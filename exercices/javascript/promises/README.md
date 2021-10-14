# Promises : Exercice

Dans la fonction **exercise1Fn**, compléter la création de la promise afin de la **résoudre** avec la valeur “I love promise” au bout de 500ms. (Utiliser setTimeout). Attacher à cette promesse un then afin de **console.log** la valeur reçu. Renvoyer la promesse résultante.

Dans la fonction **exercise2Fn**, compléter la création de la promise afin de la **rejeter** avec la valeur “I hate rejection” au bout de 500ms. (Utiliser setTimeout). Attacher à cette promesse un catch afin de **console.log** la valeur reçu. Renvoyer la promesse résultante.

Dans la fonction **exercise3Fn**, faire une chaîne de promesses en partant de l’objet **exercise3** afin d’ajouter 5 à la valeur, de la multiplier par 2 et enfin de soustraire 4. Chacune de ces opérations doivent être réalisées **dans un morceau de la chaîne différent**. Renvoyer la promesse résultante.

# Tips

```javascript
new Promise((resolve, reject) => {}).then(result => {}).catch(error => {});

Promise.resolve();
```
