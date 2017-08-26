var React = require('react');
var Radium = require('radium');
var Name = require('./card/name.js');
var Title = require('./card/title.js');
var SignupContent = require('./card/signup_content.js');
var PendingContent = require('./card/pending_content.js');
var CategoryLetter = require('./card/category_letter.js');
var Description = require('./card/description.js');
var CategoryImage = require('./card/category_image.js');
var SignUpModal = require('./signup.js');
var MobileModal = require('./mobile.js');
var api = APP_CONFIG.api_url;

var media_width = parseInt(APP_CONFIG.media_width);
var media = '@media (min-width: ' + media_width + 'px)'

var colors = {
  "Creative":     "#c24442",
  "Entrepreneur": "#efd0ce",
  "Technology":   "#26b5a1",
  "Kitchen Sink": "#745b97",
}

var boxHoverStyle = {
  ':hover': {
    cursor: "pointer",
    textDecoration: "underline"
  }
}

var boxStyle = {
  base: {
    width: "100vw",
    // height: "100vw",
    borderWidth: "10px",
    borderStyle: "solid",
    padding: "10px 20px 20px",
    position: "relative",
    overflowY: "auto",
    [media]: {
      borderWidth: "5px",
      width: "310px",
      height: "310px",
      margin: "0 12px",
    },
    ':hover': {
    }
  },
  creative: {
    borderColor: colors["Creative"],
  },
  entrepreneur: {
    borderColor: colors["Entrepreneur"],
  },
  technology: {
    borderColor: colors["Technology"],
  },
  kitchenSink: {
    borderColor: colors["Kitchen Sink"],
  }
}

const clear = {
  clear: "both"
};

const modalBackground = {
  background: "rgba(0,0,0,0.5)",
  position: "fixed",
  zIndex: "9998",
  width: "100vw",
  height: "100vh",
  top: "0",
  left: "0"
}

var ClearFloats = React.createClass({
  render: function() {
    return(
      <div style={clear}></div>
    );
  }
});

var Card = React.createClass({
  getInitialState: function () {
    if (this.props.category == "Creative") {
      var url = api + "/images/tracks-creative.png"
      var letter = "C"
    }
    else if (this.props.category == "Entrepreneur")  {
      var url = api + "/images/tracks-entrepreneur.png"
      var letter = "E"
    }
    else if (this.props.category == "Technology")  {
      var url = api + "/images/tracks-technology.png"
      var letter = "T"
    }
    else if (this.props.category == "Kitchen Sink")  {
      var url = api + "/images/tracks-kitchen-sink.png"
      var letter = "K"
    }
    return {
      color: colors[this.props.category],
      catImageURL: url,
      catLetter: letter,
      category: this.props.category,
      id: this.props.info["id"],
      state: this.props.info["state"],
      name: this.props.info["name"],
      title: this.props.info["title"],
      description: this.props.info["description"],
      isOpen: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      state: nextProps.info["state"],
      name: nextProps.info["name"],
      title: nextProps.info["title"],
      description: nextProps.info["description"]
    });
  },
  componentDidMount: function () {

  },
  toggleModal: function () {
    this.setState({isOpen: true, state: "PENDING"});
  },
  closeModal: function () {
    this.setState({isOpen: false});
  },
  cancelSubmit: function () {
    xhr = new XMLHttpRequest();
    xhr.open('POST', api + '/cancel?id=' + this.state.id);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.send();
    this.closeModal();
    this.setState({state: "SIGNUP"});
  },
  render: function() {
    if (this.state.category == "Creative") {
      box = [boxStyle.base, boxStyle.creative];
    }
    else if (this.state.category == "Entrepreneur")  {
      box = [boxStyle.base, boxStyle.entrepreneur];
    }
    else if (this.state.category == "Technology")  {
      box = [boxStyle.base, boxStyle.technology];
    }
    else if (this.state.category == "Kitchen Sink")  {
      box = [boxStyle.base, boxStyle.kitchenSink];
    }
    var signupCardStyle = box.concat(boxHoverStyle);

    if (this.state.state == "SIGNUP") {
      var currentState = (
        <div onClick={this.toggleModal} style={signupCardStyle}>
          <CategoryImage image={this.state.catImageURL} bgColor={this.state.color} />
          <ClearFloats />
          <SignupContent />
        </div>
      );
    } else if (this.state.state == "PENDING") {
      var currentState = (
        <div style={box}>
          <CategoryImage image={this.state.catImageURL} bgColor={this.state.color} />
          <ClearFloats />
          <PendingContent />
        </div>
      );
    } else if (this.state.state == "SET") {
      var currentState = (
        <div style={box}>
          <Name name={this.state.name} />
          <CategoryImage image={this.state.catImageURL} bgColor={this.state.color}/>
          <ClearFloats />
          <Title title={this.state.title} />
          <Description description={this.state.description} />
        </div>
      );
    }
    var modalBack = (
      <div style={modalBackground} onClick={this.cancelSubmit} />
    );

    if (window.innerWidth < media_width) {
      var modal = (
        <MobileModal close={this.closeModal} />
      )
    } else {
      var modal = (
        <SignUpModal id={this.state.id} category={this.state.category} close={this.closeModal} />
      )
    }
    
    return (
      <div>
        {currentState}
        {this.state.isOpen ? modal : null}
        {this.state.isOpen ? modalBack : null}
      </div>
    )
  }
});

module.exports = Radium(Card);