var React = require('react');
var renderer = require('react-test-renderer');
var App = require('../app/components/app.js');

test('Renders without crashing', () => {
  var component = renderer.create(<App />).toJSON();
  expect(component).toMatchSnapshot();
});