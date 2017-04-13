var React = require('react');

const adminModal = {
  color: "black",
  width: "200px",
  height: "100px",
  position: "fixed",
  zIndex: "9999",
  left: "50%",
  top: "50%",
  marginLeft: "-50px",
  marginTop: "-25px",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "10px",
}

var MobileModal = React.createClass({
  render: function () {
    return(
      <div>
        <div style={adminModal}>
          <p>Stop being lazy! Go to the signup computers!</p>
        </div>
      </div>
    )
  }
});

module.exports = MobileModal; 