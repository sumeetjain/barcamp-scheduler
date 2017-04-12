var React = require('react');

const adminModal = {
  color: "black",
  display: "none",
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
  render: function () {
    return(
      <div style={adminModal}></div>
    )
  }
});

module.exports = SignUpModal;