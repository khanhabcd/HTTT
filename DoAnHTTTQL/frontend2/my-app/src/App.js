import "./App.css";
import React from "react";

import axios from "axios";

export default class PersonList extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`http://localhost:12345/api/bill`)
      .then((res) => {
        console.log("log ress ---", res.data.data);
        const persons = res.data.data;
        this.setState({ persons });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="container">
        <table>
          <thead>
            <tr>
              <th colSpan="1">Name Product</th>
              <th colSpan="1">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.persons.map((person, idx) => (
              <tr key={idx}>
                <td>
                  {person.product_id.map((prod, idx) => {
                    return <div key={idx}>{prod.name}</div>;
                  })}
                </td>
                <td>
                  {person.product_id.map((bill, idx) => {
                    return <div key={idx}>{bill.money}</div>;
                  })}
                </td>
              </tr>
            ))}
            {/* <tr>
              <td>1</td>
              <td>with two columns</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    );
  }
}
