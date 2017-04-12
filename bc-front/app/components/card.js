var React = require('react');
var SignUpModal = require('./signup.js')

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

const title = {
  fontSize: "1.5em"
};

const categoryImage = {
  float: "right"
};

const name = {
  paddingTop: "25px",
  float: "left",
  fontSize: "0.75em"
};

const clear = {
  clear: "both"
};

const letters = {
  color: "pink",
  position: "absolute",
  bottom: "5px",
  right: "15px",
  fontSize: "1.75em",
  fontFamily: "cursive"
}

var Name = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Jamie Locatis'
    }
  },
  render: function() {
    return(
      <div style={name}>{this.props.name}</div>
    );
  }
});

var Title = React.createClass({
  getDefaultProps: function () {
    return {
      title: 'This is a title of something'
    }
  },
  render: function() {
    return(
      <div style={title}>{this.props.title}</div>
    );
  }
});

var CategoryImage = React.createClass({
  getDefaultProps: function () {
    return {
      image: './app/images/track_technology_2016.png'
    }
  },
  render: function() {
    return(
      <div style={categoryImage}><img src={this.props.image} width="40" /></div>
    );
  }
});

var ClearFloats = React.createClass({
  render: function() {
    return(
      <div style={clear}></div>
    );
  }
});

var Description = React.createClass({
  getDefaultProps: function () {
    return {
      description: 'Celiac kitsch poutine, tacos stumptown cardigan jianbing pug pickled kinfolk try-hard put a bird on it air plant activated charcoal. Swag kinfolk marfa cornhole, ennui try-hard narwhal blue bottle forage gastropub schlitz keytar. Bicycle rights schlitz farm-to-table woke biodiesel, shoreditch scenester four dollar toast fashion axe heirloom godard tbh DIY skateboard. Offal cliche hashtag franzen asymmetrical art party.'
    }
  },
  render: function() {
    return(
      <div>{this.props.description}</div>
    );
  }
});

var CategoryLetter = React.createClass({
  getDefaultProps: function () {
    return {
      letter: 'N'
    }
  },
  render: function() {
    return(
      <div style={letters}>{this.props.letter}</div>
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
      id: this.props.value["id"],
      state: this.props.value["state"],
      name: this.props.value["name"],
      title: this.props.value["title"],
      description: this.props.value["description"]
    }
  },
  // handleSignUp: function () {
  //   this.setState({signUpControl: true});
  // },


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
        <div onClick={this.handleSignUp}>
          <CategoryImage image={this.state.catImageURL} />
          <ClearFloats />
          <Title title="Sign up for this slot!" />
          <Description description="Click on this box to sign up!" />
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

    return (
      <div style={box}>
        {currentState}
      </div>
    )
  }
});

module.exports = Card;