import { mount } from 'enzyme';

import React from 'react';

import Providers from '@contexts/Providers';
import { Button } from '@components/ui';

import Toggler from '../Toggler';

test('Toggle should toggle the children when clicked on button and state changed', () => {
  const App = (
    <Providers>
      <Toggler btnText={['show', 'hide']}>
        <h1>hello!</h1>
      </Toggler>
    </Providers>
  );
  const component = mount(App);
  const button = component.find(Button);

  expect(button.text()).toEqual('show');
  expect(component.find('h1')).toHaveLength(0);

  button.simulate('click');

  expect(button.text()).toEqual('hide');
  expect(component.find('h1')).toHaveLength(1);

  button.simulate('click');

  expect(button.text()).toEqual('show');
  expect(component.find('h1')).toHaveLength(0);
});
