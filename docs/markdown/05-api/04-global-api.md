# Les API: globales 1/3

<br>

<ul>
    <li>Pas besoin de require !</li>
    <li class="fragment">timers: vous connaissez déjà presque tout !
        <ul>
            <li>setTimeout()</li>
            <li>setInterval()</li>
            <li>setImmediate()</li>
        </ul>
    </li>
    <li class="fragment">console :
        <ul>
            <li>log()</li>
            <li>error()</li>
            <li>time() + timeEnd()</li>
        </ul>
    </li>
</ul>

##==##

# Les API: globales 2/3

<br>

process:
<ul>
    <li class="fragment" data-fragment-index="1">`process.argv` : pour les arguments de la ligne de commande</li>
    <li class="fragment">`process.chdir(directory)` : pour changer le répertoire de travail</li>
    <li class="fragment">`process.cwd()` : pour récupérer le répertoire courant</li>
    <li class="fragment">`process.env` : object contenant les variables d’environnement</li>
    <li class="fragment">`process.exit(code)` : pour terminer le processus dès que possible</li>
</ul>

##==##

# Les API: globales 3/3

<br>

Variables globales: où sont rattachées les API dont on vient de parler, avec en bonus:
<ul>
    <li class="fragment">`global` : l’objet global (équivalent de window dans le navigateur)</li>
    <li class="fragment">`__dirname` : le chemin du répertoire contenant le fichier courant</li>
    <li class="fragment">`__filename` : le nom du fichier courant</li>
    <li class="fragment">`exports` : raccourci vers module.exports</li>
    <li class="fragment">`require` : raccourci vers module.require</li>
</ul>