import Page from '../layouts/main'

var Highlight = require('react-highlight');

export default () => (
  <Page>
    <h1>Stateless component</h1>
    <h4>Example</h4>
    <Highlight className='js'>
      {`
        import React, { Component } from 'react'

        class Foo extends Component {
          render() {
            return (
              <div>
                Hello, Stateless Component
              </div>
            )
          }
        }

        export default Foo
      `}
    </Highlight>
    <h4>can be tested like</h4>
    <Highlight className='js'>
      {`
        import React from 'react'
        import Foo from './Foo'
        import { shallow } from 'enzyme'

        describe('Testing Foo component', () => {
          it('Contain one div', () => {
            const wrapper = shallow(<Foo />)
            expect(wrapper.find('div')).to.have.length(1)
          })

          it('Match its snapshot', () => {
            const wrapper = shallow(<Foo />)
            expect(wrapper.html()).toMatchSnapshot()
          })
        })
      `}
    </Highlight>
  </Page>
)
