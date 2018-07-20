import React from 'react'
import { shallow } from 'enzyme'

import Input from '../index'

describe('<Input />', () => {
  it('renders without crashing', () => {
    const spy = sinon.spy()
    const component = shallow(<Input id={'id'} label={'label'} name={'name'} onChange={spy} value={'value'} />)
    expect(component).toMatchSnapshot()
  })
})
