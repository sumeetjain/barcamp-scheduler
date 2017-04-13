var React = require('react');

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

module.exports = Description;