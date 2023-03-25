import './App.css';
import React, { render } from 'react';
// import { render } from '@testing-library/react';
import BasicInfo from './components/BasicInfo';

// VERY EASY CHALLENGE
// class App extends React.component{

// }
// function App(){
//     render();{
//         <div className="info">
//             <ul>
//                 <li> name: Adriann </li>
//                 <li> number: 704-444-4444</li>
//                 <li> dateOfBirth: 12/09/1999</li>
//             </ul>
//         </div>
//     }
// }


// EASY challenge

// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Adriann Harris',
//             number: '123-456-7890',
//             dateOfBirth: '12/09/1999',
//         };
//     }
// render (){
//     return (
//         <div className="basic-container">
//             <p>Name: {this.state.name}</p>
//             <p>Number: {this.state.number}</p>
//             <p>Date of Birth: {this.state.dateOfBirth}</p>
//         </div>
//         );
//     };
// };

//Medium Challenge
// class App extends React.Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             name: 'Adriann Harris',
//             number: '123-456-7890',
//             dateOfBirth: '12/09/1999',
//         };
//     }
// render (){
//     return (
//         <div className="basic-container">
//             {this.state.person.name}
//             <BasicInfo person={this.state.person} />
//         </div>
        
//         );
//     };
// };

// Hard challenge
class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: [
          {
            name: "Adriann Harris",
            dateOfBirth: "Dec 09, 1999",
            contactNumber: "704-444-4444",
            email: "adriannh@example.com",
          },
          {
            name: "Lori Harvey",
            dateOfBirth: "Feb 14, 1995",
            contactNumber: "704-847-7493",
            email: "lorithatgrl@example.com",
          },
          {
            name: "Damson Idris",
            dateOfBirth: "Apr 25 1995",
            contactNumber: "970-846-4442",
            email: "franklinthtguy@example.com",
          },
        ],
      };
    }
    render() {
      const BasicInfo = ({ person }) => (
        <div>
          <p>Name: {person.name}</p>
          <p>Date of Birth: {person.dateOfBirth}</p>
          <p>Contact Number: {person.contactNumber}</p>
          <p>Email: {person.email}</p>
        </div>
      );
      const peopleList = this.state.people.map((person, index) => (
        <div key={index}>
          <BasicInfo person={person} />
        </div>
      ));
      return (
        <div>
          {peopleList}
        </div>
      );
    }
  }



export default App;
