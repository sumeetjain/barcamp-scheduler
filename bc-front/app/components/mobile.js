var React = require('react');

const adminModal = {
  color: "black",
  width: "100vw",
  position: "fixed",
  zIndex: "9999",
  left: "0",
  top: "20vh",
  background: "#fff",
  border: "solid #666",
  borderWidth: "10px 0",
  padding: "30px 10px",
  fontSize: "22px",
  textAlign: "center"
}

const thin = {
  fontWeight: "200"
}

var MobileModal = React.createClass({
  render: function () {
    return(
      <div>
        <div style={adminModal}>
          <p>Yay! How exciting!</p>
          <p style={thin}>But you have to come<br />to the signup tables.</p>
          <p style={thin}>(Sorry.)</p>
        </div>
      </div>
    )
  }
});

module.exports = MobileModal; 