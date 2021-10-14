# Fn JS : Exercice

Créer une fonction (getTotalAmount) qui calcul le prix total des livres du panier shoppingCart

La fonction doit :

1. filtrer par type “books”
2. transformer l’objet shoppingCart en collection de montants via map
3. calculer le montant total via reduce

# Fn JS : Exercice 2

Aide pour coder pipe

1. Pipe prend un nombre indéterminé de fonctions en entrée
2. La méthode pipe prend deux paramètres appelés en deux temps différents.
   D’abord une liste de fonctions chaînées
3. Puis un paramètre qui sera la valeur initiale passée à la première fonction.
4. Ensuite, chaque fonction suivante de la liste prend en entrée le retour de la fonction précédente.
5. Pipe renvoie la valeur de sortie de la dernière fonction de la chaîne.
