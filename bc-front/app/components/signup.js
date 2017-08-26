var React = require('react');
var Radium = require('radium');
var api = APP_CONFIG.api_url;

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

const signupStyles = {
  head1: {
    fontSize: "18px",
    fontWeight: "200",
    textAlign: "center",
    marginBottom: "8px",
    color: "#1e122b",
  },
  head2: {
    color: "#1e122b",
    fontSize: "18px",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "24px",
    paddingBottom: "24px",
    borderBottom: "1px solid #eee"
  },
  field: {
    textAlign: "center",
    color: "#1e122b",
    border: "2px solid #ccc",
    display: "block",
    width: "100%",
    padding: "6px",
    marginBottom: "18px",
    fontSize: "18px",
    fontWeight: "200"
  },
  button: {
    display: "block",
    width: "100%",
    padding: "16px 0",
    textAlign: "center",
    textTransform: "uppercase",
    border: "none",
    backgroundColor: "#1e122b",
    fontSize: "22px",
    color: "#fff",
    cursor: "pointer",
    letterSpacing: "2px"
  }
}

const adminModal = {
  color: "#1e122b",
  width: "700px",
  padding: "40px",
  position: "fixed",
  zIndex: "9999",
  left: "50%",
  top: "50%",
  marginLeft: "-350px",
  marginTop: "-250px",
  background: "#fff",
  borderTop: "10px solid #c24442",
  borderRight: "10px solid #efd0ce",
  borderBottom: "10px solid #26b5a1",
  borderLeft: "10px solid #745b97",
}

var SignUpModal = React.createClass({
  getInitialState: function () {
    return {
      id: this.props.id,
      category: this.props.category,
    }
  },
  componentDidMount: function () {
    xhr = new XMLHttpRequest();
    xhr.open('POST', api + '/pending?id=' + this.state.id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();

    var nameField = document.querySelector("form input[name=name]");
    nameField.focus();
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
      <div style={adminModal}>
        <div style={signupStyles.head1}>
          You're signing up to give a talk in:
        </div>
        <div style={signupStyles.head2}>{this.state.category}</div>

        <form action="/updatedata" method="post" onSubmit={this.handleSubmit} >

          <input style={signupStyles.field} type="text" name="name" placeholder="Your Name" required />
          <input style={signupStyles.field} type="text" name="title" placeholder="Talk Title" required />
          <textarea style={signupStyles.field} name="description" placeholder="What is your talk about?" required rows="4" />

          <input type="hidden" name="id" value={this.state.id} />
          <input type="hidden" name="state" value="SET" />

          <input style={signupStyles.button} type="submit" value="Sign me up!" />
        </form>
      </div>
    )
  }
});

module.exports = Radium(SignUpModal); 