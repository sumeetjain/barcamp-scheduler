var React = require('react');
var Radium = require('radium');
var Name = require('./card/name.js');
var Title = require('./card/title.js');
var CategoryLetter = require('./card/category_letter.js');
var Description = require('./card/description.js');
var CategoryImage = require('./card/category_image.js');
var SignUpModal = require('./signup.js');

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
    '@media (min-width: 500px)': {
      marginRight: "10px"
    }
  },
  creative: {
    backgroundColor: "pink"
  },
  entrepreneur: {
    backgroundColor: "lightblue"
  },
  technology: {
    backgroundColor: "lightgreen"
  },
  kitchenSink: {
    backgroundColor: "lightyellow"
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
      isOpen: false
    }
  },
  componentWillReceiveProps: function (nextProps) {
    this.setState({
      state: this.props.info["state"],
      name: this.props.info["name"],
      title: this.props.info["title"],
      description: this.props.info["description"]
    });
  },
  toggleModal: function () {
    this.setState({isOpen: true});
  },
  closeModal: function () {
    this.setState({isOpen: false});
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
        <div onClick={this.toggleModal}>
          <CategoryImage image={this.state.catImageURL} />
          <ClearFloats />
          <Title title="Sign up for this slot!" />
          <Description description="Click here to sign up!" />
          <CategoryLetter letter={this.state.catLetter} />
        </div>
      );
    } else if (this.state.state == "PENDING") {
      var currentState = (
        <div>
          <CategoryImage image={this.state.catImageURL}/>
          <ClearFloats />
          <Title title="Get outta here!" />
          <Description description="Someone is currently attempting to sign up for this time slot. Bug them if you think they left it open in error :D" />
          <CategoryLetter letter={this.state.catLetter} />
        </div>
      );
    } else if (this.state.state == "SET") {
      var currentState = (
        <div>
          <Name name={this.state.name} />
          <CategoryImage image={this.state.catImageURL}/>
          <ClearFloats />
          <Title title={this.state.title} />
          <Description description={this.state.description} />
          <CategoryLetter letter={this.state.catLetter} />
        </div>
      );
    }
    var modalBack = (
      <div style={modalBackground} onClick={this.closeModal} />
    );
    debugger

    if (window.innerWidth > 500) {
      var modal = (
        <MobileModal />
      )
    } else {
      var modal = (
        <SignUpModal id={this.state.id} />
      )
    }

    return (
      <div>
        <div style={box}>
          {currentState}
        </div>
        {this.state.isOpen ? modal : null}
        {this.state.isOpen ? modalBack : null}
      </div>
    )
  }
});

module.exports = Radium(Card);