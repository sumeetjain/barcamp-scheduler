var React = require('react')
var Title = require('../app/components/card/title.js');
var Name = require('../app/components/card/name.js');
var Description = require('../app/components/card/description.js');
var CategoryLetter = require('../app/components/card/category_letter.js');
var renderer = require('react-test-renderer');

test('Title changes to a prop value when passed', () => {
  var component = renderer.create(
    <Title title="Doing Big Things" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Name changes to a prop value when passed', () => {
  var component = renderer.create(
    <Name name="Jamie" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Description changes to a prop value when passed', () => {
  var component = renderer.create(
    <Description name="This is a description of something!" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Category letter changes to a prop value when passed', () => {
  var component = renderer.create(
    <CategoryLetter name="X" />
  ).toJSON();
  expect(component).toMatchSnapshot();
});

test('Category image changes to a prop value when passed', () => {
  var component = renderer.create(
      <div><img src='./app/images/track_technology_2016.png' width="40" /></div>  ).toJSON();
  expect(component).toMatchSnapshot();
});