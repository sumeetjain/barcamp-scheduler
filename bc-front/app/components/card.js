var React = require('react');
var Radium = require('radium');
var Name = require('./card/name.js');
var Title = require('./card/title.js');
var CategoryLetter = require('./card/category_letter.js');
var Description = require('./card/description.js');
var CategoryImage = require('./card/category_image.js');
var SignUpModal = require('./signup.js');
var MobileModal = require('./mobile.js');
var Loader = require('react-loader');
var api = APP_CONFIG.api_url;

var boxStyle = {
  base: {
    width: "300px",
    height: "300px",
    backgroundColor: "grey",
    fontFamily: "Helvetica",
    paddingLeft: "5px",
    paddingRight: "5px",
    position: "relative",
    margin: "0 auto 10px auto",
    '@media (min-width: 576px)': {
      marginRight: "10px"
    },
  },
  creative: {
    backgroundColor: "pink",
    ':hover': {
      backgroundColor: "red"
    }
  },
  entrepreneur: {
    backgroundColor: "lightblue",
    ':hover': {
      backgroundColor: "blue"
    }
  },
  technology: {
    backgroundColor: "lightgreen",
    ':hover': {
      backgroundColor: "green"
    }
  },
  kitchenSink: {
    backgroundColor: "lightyellow",
    ':hover': {
      backgroundColor: "yellow"
    }
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
      var url = "./app/images/track_creative_2016.png"
      var letter = "C"
    }
    else if (this.props.category == "Entrepreneur")  {
      var url = "./app/images/track_entrepreneurship_2016.png"
      var letter = "E"
    }
    else if (this.props.category == "Technology")  {
      var url = "./app/images/track_technology_2016.png"
      var letter = "T"
    }
    else if (this.props.category == "Kitchen Sink")  {
      var url = "./app/images/track_kitchen-sink_2016.png"
      var letter = "K"
    }
    return {
      catImageURL: url,
      catLetter: letter,
      category: this.props.category,
      id: this.props.info["id"],
      state: this.props.info["state"],
      name: this.props.info["name"],
      title: this.props.info["title"],
      description: this.props.info["description"],
      isOpen: false,
      loaded: true
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
      box = [boxStyle.base, boxStyle.creative]
    }
    else if (this.state.category == "Entrepreneur")  {
      box = [boxStyle.base, boxStyle.entrepreneur]
    }
    else if (this.state.category == "Technology")  {
      box = [boxStyle.base, boxStyle.technology]
    }
    else if (this.state.category == "Kitchen Sink")  {
      box = [boxStyle.base, boxStyle.kitchenSink]
    }
    if (this.state.state == "SIGNUP") {
      var currentState = (
        <div onClick={this.toggleModal} style={box}>
          <CategoryImage image={this.state.catImageURL} />
          <ClearFloats />
          <Title title="Sign up for this slot!" />
          <Description description="Click here to sign up!" />
          <CategoryLetter letter={this.state.catLetter} />
        </div>
      );
    } else if (this.state.state == "PENDING") {
      var currentState = (
        <div style={box}>
          <CategoryImage image={this.state.catImageURL}/>
          <ClearFloats />
          <Title title="Get outta here!" />
          <Description description="Someone is currently attempting to sign up for this time slot. Bug them if you think they left it open in error :D" />
          <CategoryLetter letter={this.state.catLetter} />
        </div>
      );
    } else if (this.state.state == "SET") {
      var currentState = (
        <div style={box}>
          <Loader loaded={this.state.loaded}>
          <Name name={this.state.name} />
          <CategoryImage image={this.state.catImageURL}/>
          <ClearFloats />
          <Title title={this.state.title} />
          <Description description={this.state.description} />
          <CategoryLetter letter={this.state.catLetter} />
          </Loader>
        </div>
      );
    }
    var modalBack = (
      <div style={modalBackground} onClick={this.cancelSubmit} />
    );

    if (window.innerWidth < 576) {
      var modal = (
        <MobileModal close={this.closeModal} />
      )
    } else {
      var modal = (
        <SignUpModal id={this.state.id} close={this.closeModal} />
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