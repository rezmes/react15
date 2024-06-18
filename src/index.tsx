import * as React from 'react';
import logo from './logo.svg';
import * as ReactDOM from 'react-dom';

//const App = () => <div>Hello, React 15بله چنین است  with TypeScript!</div>;
class App extends React.Component {
  render(){
    return(

      <div className='App'>
        <header className='App-header'>
          <img src="{logo}" alt="logo" className='App-logo' />
          <p>
            Hello World!
          </p>
        </header>
      </div>

    )
  }
 // constructor(parameters) {
    
 // }
}

ReactDOM.render(<App />, document.getElementById('root'));