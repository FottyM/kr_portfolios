import React from 'react'
import { shallow } from 'enzyme'
import Jumbotron from '../index'

describe('<Jumbotro />', () => {
  it('renders', () => {
    const component = shallow(<Jumbotron />)
    expect(component).toMatchSnapshot()
  })
})
