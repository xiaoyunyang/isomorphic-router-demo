import React from 'react';

class Home extends React.Component {
  state = {
    resHello: 'Loading...',
    resQuote: 'Loading...'
  };
  componentWillMount() {
    // Get hello message
    this.callApi('/api/hello')
      .then(res => this.setState({ resHello: res.express }))
      .catch(err => console.log(err));

    // Get random quote
    const rand = Math.random();
    this.callApi(`/api/r/${rand}`)
      .then(res => this.setState({ resQuote: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async (endpoint) => {
    const response = await fetch(endpoint);
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="container">
        <h1>Home page</h1>
        <h6>
          {`Message from the server: ${this.state.resHello}`}
        </h6>
        <h5>Random Quote</h5>
        <blockquote>
          {this.state.resQuote}
        </blockquote>
      </div>
    );
  }
}

export default Home;
