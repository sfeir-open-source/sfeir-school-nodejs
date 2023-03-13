# Les API: globales 1/3

<br>

<ul>
    <li>Pas besoin de require !</li>
    <li class="fragment">timers: vous connaissez déjà presque tout !
        <ul>
            <li><code>setTimeout()</code></li>
            <li><code>setInterval()</code></li>
            <li><code>setImmediate()</code></li>
        </ul>
    </li>
    <li class="fragment">console :
        <ul>
            <li><code>log()</code> (stout)</li>
            <li><code>error()</code> (stderr)</li>
            <li><code>time() + timeEnd()</code></li>
            <li><code>group() + groupEnd()</code></li>
            <li><code>table()</code></li>
        </ul>
    </li>
</ul>

https://nodejs.org/api/console.html
<!-- .element: class="credits" -->

Notes:
chalk, progress

##==##

# Les API: globales 2/3

<br>

process:
<ul>
    <li class="fragment" data-fragment-index="1"><code>process.argv</code> : pour les arguments de la ligne de commande</li>
    <li class="fragment"><code>process.chdir(directory)</code> : pour changer le répertoire de travail</li>
    <li class="fragment"><code>process.cwd()</code> : pour récupérer le répertoire courant</li>
    <li class="fragment"><code>process.env</code> : object contenant les variables d’environnement</li>
    <li class="fragment"><code>process.exit(code)</code> : pour terminer le processus dès que possible</li>
</ul>

##==##

# Les API: globales 3/3

<br>

Variables globales: où sont rattachées les API dont on vient de parler, avec en bonus:
<ul>
    <li class="fragment"><code>global</code> : l’objet global (équivalent de window dans le navigateur)</li>
    <li class="fragment"><code>__dirname</code> : le chemin du répertoire contenant le fichier courant</li>
    <li class="fragment"><code>__filename</code> : le nom du fichier courant</li>
    <li class="fragment"><code>exports</code> : raccourci vers module.exports</li>
    <li class="fragment"><code>require</code> : raccourci vers module.require</li>
</ul>