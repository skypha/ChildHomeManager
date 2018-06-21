import React from "react";
import { Table } from "semantic-ui-react";
import { inject, observer } from "mobx-react";
import PersonStore from "../stores/personStore";
import Person from "../stores/person";
import { observable } from "mobx";

@inject(["personStore"])
@observer
class PersonTable extends React.Component {
  @observable column;
  @observable direction;

  createRow(person, index) {
    return (
      <Table.Row
        key={person.uuid}
        onClick={this.props.onItemSelected(person.uuid)}
      >
        <Table.Cell>{person.familyName}</Table.Cell>
        <Table.Cell>{person.firstName}</Table.Cell>
        <Table.Cell>{person.secondName}</Table.Cell>
        <Table.Cell>
          {person.dateOfBirth.toDateString().slice(3, 15)}
        </Table.Cell>
        <Table.Cell>NA</Table.Cell>
      </Table.Row>
    );
  }

  handleSort = clickedColumn => () => {
    if (this.column !== clickedColumn) {
      this.column = clickedColumn;
      this.props.personStore.filteredPersons.sort(
        this.compareValues(clickedColumn)
      );
      this.direction = "ascending";

      return;
    }

    this.props.personStore.filteredPersons.reverse();
    this.direction =
      this.direction === "ascending" ? "descending" : "ascending";
  };

  compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order == "desc" ? comparison * -1 : comparison;
    };
  }

  componentWillMount() {
    this.handleSort("familyName")();
  }

  render() {
    return (
      <Table sortable celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell
              sorted={this.column === "familyName" ? this.direction : null}
              onClick={this.handleSort("familyName")}
            >
              Lastname
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={this.column === "firstName" ? this.direction : null}
              onClick={this.handleSort("firstName")}
            >
              FirstName
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={this.column === "secondName" ? this.direction : null}
              onClick={this.handleSort("secondName")}
            >
              SecondName
            </Table.HeaderCell>
            <Table.HeaderCell
              sorted={this.column === "dateOfBirth" ? this.direction : null}
              onClick={this.handleSort("dateOfBirth")}
            >
              Day of Birth
            </Table.HeaderCell>
            <Table.HeaderCell>House</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {this.props.personStore.filteredPersons.map((person, index) =>
            this.createRow(person, index)
          )}
        </Table.Body>
      </Table>
    );
  }
}

export default PersonTable;
