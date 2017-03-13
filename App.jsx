import React from 'react';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data:
        [
          {
            name: 'First...',
            id: 1,
          },

          {
            name: 'Second...',
            id: 2
          },

          {
            name: 'Third...',
            id: 3
          }
        ]
    }
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.data.map((data, i) =>
              <Content key = {i} componentData = {data}/>)
          }
        </div>
      </div>
    );
  }
}

class Content extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.componentData.id}</div>
        <div>{this.props.componentData.name}</div>
      </div>
    );
  }
}

export default App;