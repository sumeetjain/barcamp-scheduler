var React = require('react')
var Title = require('../app/components/card/title.js');
var Name = require('../app/components/card/name.js');
var Description = require('../app/components/card/description.js');
var renderer = require('react-test-renderer');

test('Title changes to prop when passed', () => {
  var component = renderer.create(
    <Title title="Doing Big Things" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Name changes to prop when passed', () => {
  var component = renderer.create(
    <Name name="Jamie" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Description changes to prop when passed', () => {
  var component = renderer.create(
    <Description name="This is a description of something!" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});