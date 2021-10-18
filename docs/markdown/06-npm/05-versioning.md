# npm : versioning

* Selon npm on commence à : 1.0.0
* Bugfix et autres changements mineurs: **Patch** release, on augmente le dernier nombre 1.0.1
    * Il est considéré non cassant d’upgrader ou downgrader le Patch
* Nouvelles features non cassantes : **Minor** release, on augmente le nombre du milieu 1.1.0
    * Il est considéré non cassant d’upgrader la Minor, mais potentiellement cassant de downgrader !
* Changements qui cassent la compatibilité: **Major** release, on augmente le premier nombre 2.0.0
* npm version : utilise la CLI de npm pour incrémenter la version. Crée un commit si le module est dans un repo git

https://docs.npmjs.com/getting-started/semantic-versioning