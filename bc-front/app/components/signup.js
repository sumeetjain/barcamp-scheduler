var React = require('react');

const adminModal = {
  color: "black",
  width: "400px",
  height: "140px",
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
  }
  render: function () {
    return(
      <div>
        <div style={adminModal}>{this.state.id}</div>
      </div>
    )
  }
});

module.exports = SignUpModal;