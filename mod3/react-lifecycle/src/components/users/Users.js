import React, { Component } from 'react';
import User from './User';

export default class Users extends Component {
  constructor() {
    super();

    this.state = {
      secondsVisible: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    console.log('DidMount Users');

    this.interval = setInterval(() => {
      const { secondsVisible } = this.state;

      this.setState({ secondsVisible: secondsVisible + 1 });
    }, 1000);
  }

  componentDidUpdate() {
    console.log('DidUpdate Users');
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { users } = this.props;
    const { secondsVisible } = this.state;

    return (
      <div>
        <p>Componente Users visível por {secondsVisible} segundos</p>
        <ul>
          {users.map((user) => {
            const { login, name, picture } = user;
            return (
              <li key={login.uuid}>
                <User user={user} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
