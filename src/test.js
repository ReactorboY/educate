import React, { PureComponent } from 'react'

const list = [{
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      // list:list
      list,
    }
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss(id){
    console.log(id+' clicked')
    // return new list instead mutating
    // const updatedList = this.state.list.filter(function isNotId(item) {
    //   return item.objectID !== id
    // })
    // const isNotId = item => item.objectID !== id
    // const updatedList = this.state.list.filter(isNotId)
    const updatedList = this.state.list.filter(item => item.objectID !== id)
    this.setState({list:updatedList})
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => 
          <div key={item.objectID}>
            <span>
              <a href={item.url}> {item.title} </a>
            </span>
            <span> {item.author} </span>
            <span> {item.num_comments} </span>
            <span> {item.points} </span>
            <span>
              <button onClick={() =>  this.onDismiss(item.objectID)} type="button">Dismiss</button>
            </span>
          </div>
          )}
      </div>
    )
  }
}

export default App