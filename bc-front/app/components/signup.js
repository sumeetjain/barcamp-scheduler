var React = require('react');
var api = APP_CONFIG.api_url;

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
    xhr.open('POST', api + '/pending?id=' + this.state.id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
  },
  handleSubmit: function (e) {
    e.preventDefault();
    xhr = new XMLHttpRequest();
    xhr.open("POST", api + "/updatedata");
    xhr.send(new FormData(e.target));
    this.props.close();
  },  
  render: function () {
    return(
      <div>
        <div style={adminModal}>
          <form action="/updatedata" method="post" onSubmit={this.handleSubmit} >
            <p>Full Name: <input type="text" name="name" /></p>
            <p>Title: <input type="text" name="title" /></p>
            <p>Description: <textarea name="description" /></p>
            <input type="text" name="id" value={this.state.id} hidden />
            <input type="text" name="state" value="SET" hidden />
            <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
});

module.exports = SignUpModal; 