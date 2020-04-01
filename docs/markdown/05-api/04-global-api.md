# Les API: globales 1/3

* Pas besoin de require !
* timers: vous connaissez déjà presque tout !
    * setTimeout()
    * setInterval()
    * setImmediate()
* console : 
    * log()
    * error()
    * time() + timeEnd()

##==##

# Les API: globales 2/3

* process:
    * process.argv: pour les arguments de la ligne de commande
    * process.chdir(directory): pour changer le répertoire de travail
    * process.cwd(): pour récupérer le répertoire courant
    * process.env: object contenant les variables d’environnement
    * process.exit(code): pour terminer le processus dès que possible

##==##

# Les API: globales 3/3

* Variables globales: où sont rattachées les API dont on vient de parler, avec en bonus:
    * global: l’objet global (équivalent de window dans le navigateur)
    * __dirname: le chemin du répertoire contenant le fichier courant
    * __filename: le nom du fichier courant
    * exports: raccourci vers module.exports
    * require: raccourci vers module.require