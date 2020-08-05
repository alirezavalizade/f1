import { mount } from 'enzyme';

import React from 'react';

import Providers from '@contexts/Providers';

import Select from '../Select';

const options = [
  {
    label: 'This is a label',
    value: 'This is a value'
  },
  {
    label: 'This is second label',
    value: 'This is second value'
  }
];
const name = 'test';
const onChange = jest.fn();

describe('Select.js', () => {
  const App = (
    <Providers>
      <Select options={options} name={name} onChange={onChange} />
    </Providers>
  );

  const component = mount(App);
  const select = component.find('select');

  it('Should have a name attr when receive "name" as a prop', () => {
    expect(select.prop('name')).toEqual(name);
  });

  it('Should render options when receive "options" as a prop', () => {
    expect(select.find('option')).toHaveLength(2);
  });

  it('Should call onChange function when the state changed', () => {
    select.simulate('change');
    expect(onChange).toHaveBeenCalledWith({ test: 'This is a value' });
  });
});
