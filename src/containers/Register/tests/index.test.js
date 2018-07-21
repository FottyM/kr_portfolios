import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

import Register from '../index'

describe('<Register />', () => {
  const mockStore = configureStore()
  let component
  let store

  beforeEach(() => {
    store = mockStore({ key: 'key', value: 'value' })
    component = shallow(<Register store={store} />)
  })

  it('renders without crushing', () => {
    expect(component.length).toBe(1)
  })

  it('matches snapshot', () => {
    component.update()
    expect(component).toMatchSnapshot()
  })

})
