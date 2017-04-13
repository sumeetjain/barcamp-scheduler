var React = require('react');
var Row = require('react-materialize/lib/Row.js');
var Input = require('react-materialize/lib/Input.js')

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
  componentDidMount: function () {
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/pending?id=' + this.state.id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  },
  componentWillUnmount: function () {
    xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/cancel?id=' + this.state.id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  },
  render: function () {
    return(
      <div>
        <div style={adminModal}>
          <form action="http://localhost:3000/updatedata" method="post">
            <Row>
              <Input placeholder="Placeholder" s={6} label="First Name" />
              <Input s={6} label="Last Name" />
              <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
              <Input type="password" label="password" s={12} />
              <Input type="email" label="Email" s={12} />
            </Row>
            <p>Full Name: <input type="text" name="name" /></p>
            <p>Title: <input type="text" name="title" /></p>
            <p>Description: <textarea name="description" /></p>
            <input type="text" name="id" value={this.state.id} hidden />
            <input type="text" name="status" value="closed" hidden />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
});

module.exports = SignUpModal; 