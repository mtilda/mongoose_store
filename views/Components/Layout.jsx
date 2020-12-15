const React = require('react');

const styles = {
  h1: {
    width: '100%',
    textAlign: 'center'
  },
  body: {
    margin: '0 auto',
    width: '100%',
    minWidth: '1000px'
  },
  main: {
    margin: '0 auto',
    width: '100%',
    maxWidth: '1000px'
  }
};

class Layout extends React.Component {
  render () {
    return (
      <html>
        <head>
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/style.css' />
          <title>Mongoose Store</title>
        </head>
        <body style={styles.body}>
          <h1 style={styles.h1}>Mongoose Store</h1>
          <hr />
          <main style={styles.main}>
            {this.props.children}
          </main>
        </body>
      </html>
    );
  }
}

module.exports = Layout;
