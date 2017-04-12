var React = require('react');

const adminModal = {
  color: "black",
  width: "400px",
  height: "300px",
  position: "fixed",
  zIndex: "9999",
  left: "50%",
  top: "50%",
  marginLeft: "-185px",
  marginTop: "-100px",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "10px"
}

var SignUpModal = React.createClass({
  getInitialState: function () {
    return {
      id: this.props.id
    }
  },
  componentDidMount : function () {
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/something?id=' + this.state.id + '&status=pending');
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  },
  render: function () {
    return(
      <div style={adminModal}>
        <form action="http://localhost:3000/something" method="post">
          <p>Full Name: <input type="text" name="name" /></p>
          <p>Title: <input type="text" name="title" /></p>
          <p>Description: <textarea name="description" /></p>
          <input type="text" name="id" value={this.state.id} hidden />
          <input type="text" name="status" value="closed" hidden />
          <input type="submit" />
        </form>
      </div>
    )
  }
});

module.exports = SignUpModal;