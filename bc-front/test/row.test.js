var React = require('react');
var shallow = require('enzyme')
var mount = require('enzyme');
var render = require('enzyme');
var renderer = require('react-test-renderer');
var RowByTime = require('../app/components/row.js');

describe('<RowByTime />', () =>{
  it ('should render four <Card /> components', () => {
    const wrapper = shallow(<RowByTime />);
    expect(wrapper.find(Card[options.disableLifecycleMethods])).to.have.length(3);
  });
});

// test('Row prints with time prop when passed in', () => {
//   var component = renderer.create(
//     <RowByTime time="12:00am" />
//   ).toJSON();
//   expect(component).toMatchSnapshot();
// });