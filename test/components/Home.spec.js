import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Home from '../../app/components/Home';

function setup() {
  const actions = {
    changeSearch: spy(),
    history: {
        push: spy()
    }
  };
  const component = shallow(<Home search={"hash"} {...actions} />);
  return {
    component,
    actions,
    button: component.find('button'),
    input: component.find('input')
  };
}

describe('Home component', () => {
  it('should call the changeSearch action when field is edited', () => {
    const { input, actions } = setup();
    input.at(0).simulate('change', {target: {value: 'test'}});
    expect(actions.changeSearch.called).toBe(true);
  });

  it('should call the action to go the table', () => {
    const { button, actions } = setup();
    button.at(0).simulate('click');
    expect(actions.history.push.called).toBe(true);
  });

});
