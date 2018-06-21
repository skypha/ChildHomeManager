// @flow

import { observable, action, computed } from "mobx";
import Person from "./person";

class PersonStore {
  uuid = 0;
  @observable persons = [];
  @observable personDetails = [];
  @observable filter;

  constructor() {
    this.persons.push(
      new Person(
        this.nextUUID(),
        "Bohms",
        "Markus",
        "Sven",
        new Date("1988-04-10")
      )
    );
    this.persons.push(
      new Person(this.nextUUID(), "Kahn", "Oliver", "-", new Date("1964-01-02"))
    );
    this.persons.push(
      new Person(this.nextUUID(), "Spahn", "Jens", "-", new Date("1973-01-02"))
    );
    this.persons.push(
      new Person(
        this.nextUUID(),
        "Freund",
        "Severin",
        "-",
        new Date("1984-01-02")
      )
    );
  }

  @computed
  get allPersons() {
    return this.persons;
  }

  @computed
  get filteredPersons() {
    return this.persons.filter(
      person => !person.familyName.includes(this.filter)
    );
  }

  @computed
  get personDetails() {
    return this.personDetails;
  }

  nextUUID() {
    this.uuid += 1;
    return this.uuid;
  }

  @action
  setFilter(filter) {
    this.filter = filter;
  }

  @action
  addPerson(person) {
    if (isNaN(person.uuid)) {
      person.uuid = this.nextUUID();
    }
    this.persons.push(person);
  }

  @action
  removePerson(uuid) {
    const item = this.persons.find(person => person.uuid === uuid);
    this.list.remove(item);
  }
}

export default PersonStore;
