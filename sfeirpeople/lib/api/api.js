const _ = require('underscore');
const logger = require('winston');

const PEOPLES = require('./data/persons').peoples.map(person => Object.assign({}, person, {
  entryDate: parseDate(person.entryDate),
  birthDate: parseDate(person.birthDate),
}));

exports.listAll = function listAll(req, res) {
  logger.debug('List all PEOPLES');
  if (!PEOPLES || PEOPLES.length === 0) {
    return res.status(204).json();
  }
  return res.status(200).json(PEOPLES);
};


exports.filterByName = function filterByName(req, res) {
  const name = getParam(req, 'name');
  logger.debug(`List by name : name=${name}`);

  const people = _.union(
        _.where(PEOPLES, { lastname: name }),
        _.where(PEOPLES, { firstname: name }));

  return res.status(200).json(people);
};

exports.filterBySkill = function filterBySkill(req, res) {
  const skill = getParam(req, 'skill');
  logger.debug(`List by skill : skill=${skill}`);

  const filteredPeoples = _.filter(PEOPLES, person => _.contains(person.skills, skill));

  return res.status(200).json(filteredPeoples);
};


exports.get = function getPerson(req, res) {
  const id = getId(req);
  logger.debug(`Get person : id=${id}`);

  const person = _.findWhere(PEOPLES, { id });

  if (!person) {
    return res.status(404).json({ error: `La personne avec l'id "${id}" n'existe pas.` });
  }

  return res.status(200).json(person);
};

exports.getRandom = function getRandom(req, res) {
  const person = PEOPLES[Math.floor(Math.random() * PEOPLES.length)];
  if (!person) {
    return res.status(204).json();
  }
  return res.status(200).json(person);
};


exports.create = function create(req, res) {
  const person = req.body;
  const lastname = person.lastname;
  const firstname = person.firstname;
  logger.debug(`Create person : lastname=${lastname}, firstname=${firstname}`);

  const found = _.findWhere(PEOPLES, { lastname, firstname });
  if (found) {
    return res.status(409).json({ error: `La personne "${lastname} ${firstname}" existe déjà.` });
  }

  delete person.id;
  person.id = createId();
  person.entryDate = parseDate('01/03/2016');
  person.birthDate = parseDate('02/06/1991');
  PEOPLES.push(person);

  return res.status(200).json(person);
};


exports.update = function update(req, res) {
  const id = getId(req);
  logger.debug(`Update person : id=${id}`);

  const person = req.body;

  const index = _.findIndex(PEOPLES, p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `La personne avec l'id "${id}" n'existe pas.` });
  }

  Object.assign(PEOPLES[index], person);

  return res.status(200).json(PEOPLES[index]);
};


exports.delete = function deletePerson(req, res) {
  const id = getId(req);
  logger.debugs(`Delete person : id=${id}`);

  const index = _.findIndex(PEOPLES, p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ error: `La personne avec l'id "${id}" n'existe pas.` });
  }

  PEOPLES.splice(index, 1);

  if (!PEOPLES || PEOPLES.length === 0) {
    return res.status(204).json();
  }

  return res.status(200).json(PEOPLES);
};


function getParam(req, param) {
  return req.params[param];
}

function getId(req) {
  return getParam(req, 'id');
}

function createId() {
  return `${new Date().getTime()}`;
}

function parseDate(stringDate) {
  const dates = stringDate.split('/');
  return (new Date(`${dates[2]}/${dates[1]}/${dates[0]}`).getTime());
}
