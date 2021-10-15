function schoolSlides() {
  return [
    '00-school/00-TITLE.md', 
    'speakers/speaker-geoffrey.md',
    'speakers/speaker-yohann.md',
    'speakers/speaker-celia.md',
  ];
}

function instituteSlides() {
  return [
    '00-institute/00-TITLE.md', 
    'speakers/speaker-geoffrey.md'
  ];
}

function introSlides() {
  return [
    '01-intro/00-TITLE.md',
    '01-intro/01-slides.md',
    '01-intro/02-repo.md',
    '01-intro/03-plan.md',
  ];
}

function historiqueSlides() {
  return [
    '02-historique/00-TITLE.md',
    '02-historique/01-historique.md',
    '02-historique/02-sources.md',
  ];
}

function specificitesSlides() {
  return [
    '03-specificites/00-TITLE.md',
    '03-specificites/01-technos.md',
    '03-specificites/02-threads.md',
    '03-specificites/03-asynchronicite.md',
    '03-specificites/04-event-loop.md',
  ];
}

function installationSlides() {
  return [
    '04-installation/00-TITLE.md',
    '04-installation/01-install.md',
  ];
}

function nodeSlides() {
  return [
    '04-node/00-TITLE.md',
    '04-node/01-command.md',
    '04-node/02-repl.md',
  ];
}

function javascript() {
  return [
    'javascript/00-TITLE.md',
    'javascript/01-type-donnees.md',
    'javascript/02-fonctions.md',
    'javascript/03-this.md',
    'javascript/04-prototypes.md',
    'javascript/04-prototypes-exercice.md',
    'javascript/05-variables.md',
    'javascript/06-objects.md',
    'javascript/06-object-assign.md',
    'javascript/07-array.md',
    'javascript/07-array-exercice.md',
    'javascript/08-asynchronicite.md',
    'javascript/08-promises-exercice.md',
    'javascript/09-async-await.md',
  ]
}


function exercicesSlides() {
  return [
    '04-exercices/00-TITLE.md',
    '04-exercices/01-exercice-0.md',
    '04-exercices/02-exercice-1.md',
  ];
}

function apiSlides() {
  return [
    '05-api/00-TITLE.md',
    '05-api/01-exemples-api.md',
    '05-api/02-module-api.md',
    '05-api/03-exercice-2.md',
    '05-api/04-global-api.md',
    '05-api/05-path-api.md',
    '05-api/06-fs-api.md',
    '05-api/07-exercice-3.md',
    '05-api/08-http-api.md',
    '05-api/09-exercice-4.md',
    '05-api/10-url-api.md',
    '05-api/11-exercice-4-fin.md',
    '05-api/12-events-api.md',
    '05-api/13-exercice-5.md',
    '05-api/12-streams-api.md',
    '05-api/14-child-process-api.md',
    '05-api/15-worker-threads.md',
    '05-api/16-repl.md',
  ];
}

function npmSlides() {
  return [
    '06-npm/00-TITLE.md',
    '06-npm/01-npm.md',
    '06-npm/02-package-json.md',
    '06-npm/03-scripts.md',
    '06-npm/04-commandes.md',
    '06-npm/05-versioning.md',
    '06-npm/06-dependances.md',
    '06-npm/07-configuration.md',
    '06-npm/08-bonnes-pratiques.md',
    '06-npm/09-npx.md',
    '06-npm/10-references.md',
  ];
}

function finPremierJourSlides() {
  return [
    '07-fin-premier-jour/00-TITLE.md'
  ];
}

function projetSlides() {
  return [
    '08-projet/00-TITLE.md',
    '08-projet/01-lancement.md',
    '08-projet/02-debugging.md',
  ];
}

function expressSlides() {
  return [
    '09-express/00-TITLE.md',
    '09-express/01-express.md',
    '09-express/02-middlewares.md',
    '09-express/03-autres-frameworks.md',
  ];
}

function formation() {
  return [
    ...schoolSlides(),
    ...introSlides(),
    ...historiqueSlides(),
    ...specificitesSlides(),
    ...exercicesSlides(),
    ...apiSlides(),
    ...npmSlides(),
    ...finPremierJourSlides(),
    ...projetSlides(),
    ...expressSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

function institute() {
  return [
    ...instituteSlides(),
    ...introSlides(),
    ...historiqueSlides(),
    ...specificitesSlides(),
    ...installationSlides(),
    ...nodeSlides(),
    ...exercicesSlides(),
    ...javascript(),
    ...apiSlides(),
    ...npmSlides(),
    ...projetSlides(),
    ...expressSlides(),
  ].map(slidePath => {
    return { path: slidePath };
  });
}

// export function usedSlides() {
//   return formation();
// }

export function usedSlides() {
  return institute();
}

