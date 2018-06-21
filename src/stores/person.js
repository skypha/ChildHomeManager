// @flow
import { observable } from "mobx";

class Person {
  uuid;
  @observable familyName;
  @observable firstName;
  @observable secondName;
  @observable dateOfBirth;

  constructor(uuid = NaN, familyName, firstName, secondName, dateOfBirth) {
    // Set the Initial State of Language Observable
    this.uuid = uuid;
    this.familyName = familyName;
    this.firstName = firstName;
    this.secondName = secondName;
    this.dateOfBirth = dateOfBirth;
  }
}
export default Person;
