import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import sinon from 'sinon'
global.sinon = sinon
configure({ adapter: new Adapter() })