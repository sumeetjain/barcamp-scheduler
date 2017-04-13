var React = require('react');
var Name = require('./card/name.js');
var Title = require('./card/title.js');
var CategoryLetter = require('./card/category_letter.js');
var Description = require('./card/description.js');
var CategoryImage = require('./card/category_image.js');
var SignUpModal = require('./signup.js');

const boxC = {
  width: "300px",
  height: "300px",
  backgroundColor: "red",
  fontFamily: "Helvetica",
  marginRight: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  position: "relative"
};

const boxE = {
  width: "300px",
  height: "300px",
  backgroundColor: "blue",
  fontFamily: "Helvetica",
  marginRight: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  position: "relative"
};

const boxT = {
  width: "300px",
  height: "300px",
  backgroundColor: "green",
  fontFamily: "Helvetica",
  marginRight: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  position: "relative"
};

const boxK = {
  width: "300px",
  height: "300px",
  backgroundColor: "yellow",
  fontFamily: "Helvetica",
  marginRight: "10px",
  paddingLeft: "5px",
  paddingRight: "5px",
  position: "relative"
};

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
      box = boxC
    }
    else if (this.state.category == "Entrepreneur")  {
      box = boxE
    }
    else if (this.state.category == "Technology")  {
      box = boxT
    }
    else if (this.state.category == "Kitchen Sink")  {
      box = boxK
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
    return (
      <div>
        <div style={box}>
          {currentState}
        </div>
        {this.state.isOpen ? <SignUpModal id={this.state.id} /> : null}
        {this.state.isOpen ? modalBack : null}
      </div>
    )
  }
});

module.exports = Card;