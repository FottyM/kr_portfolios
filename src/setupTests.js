import { configure } from 'enzyme'
// import { expect } from 'chai'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import sinon from 'sinon'
global.sinon = sinon
// global.expect = expect
configure({ adapter: new Adapter() })