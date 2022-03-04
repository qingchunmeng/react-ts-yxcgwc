import React, { Component } from 'react';
import { render } from 'react-dom';
import { Form, Input, Button } from 'antd';
import 'antd/dist/antd.css';
import Hello from './Hello';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React',
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
          <Form>
            <Input name="" />
            <Form.Item>
              <Input name="" />
            </Form.Item>
          </Form>
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
