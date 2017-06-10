import Page from '../layouts/main'
import Link from 'next/link'

var Highlight = require('react-highlight');

export default () => (
  <Page>
    <h1>Presentational component</h1>
    <hr/>
    <p>ก่อนที่จะพูดถึงวิธีการเทส <strong>Presentational component</strong> เรามาทำความเข้าใจกันก่อนว่า Presentational component คืออะไร?</p>
    <p>ในปัจจุบัน มีวิธีในการออกแบบคอมโพนเนนอยู่หลายรูปแบบ หนึ่งในวิธีที่ได้รับความนิยมมากๆนั้นคือ แบ่งคอมโพนเนนออกเป็น 2 ประเภทด้วยกันตามการใช้งาน นั้นก็คือ Presentational component และ <strong><Link href="/container-component">Container component</Link></strong> ครับ</p>
    <p>Presentational component จะเป็นคอมโพเนนที่ทำหน้าที่แสดงผลครับ ส่วน Container component จะมีหน้าที่ในการควบคุมการทำงาน</p>
    <p>ลักษณะ Presentational component จะประมานนี้ครับ</p>
    <ul>
      <li>เป็นคอมโพเนนที่บอกว่าหน้าตาเป็นอย่างไร</li>
      <li>รับข้อมูลที่จะแสดงผลและ callback function ผ่าน props</li>
      <li>ไม่จำเป็นต้องมีโค้ดที่ใช้ดึงข้อมูล เพราะหน้าที่ของมันคือแสดงผลอย่างเดียว</li>
      <li>มี state น้อยมาก ถ้าจะมีจริงๆจะเป็น state เกี่ยวกับ UI จะไม่มี state ที่เกี่ยวกับข้อมูล
      <li>เขียนอยู่ในรูปของ functional component ยกเว้นจะใช้ lifecycle ของ react ค่อยเขียนในรูปของ class</li>
      </li>
    </ul>
    <p>ปกติแล้วเราสามารถทดสอบอะไรได้บ้าง</p>
    <ul>
      <li>ทดสอบว่าแสดงผล UI ได้ถูกต้องหรือไม่ เช่น มี element อะไรบ้าง, มี child component อะไรบ้าง</li>
      <li>ทดสอบว่าเมื่อมี interaction กับ UI แล้วเรียกใช้ callback ที่ส่งมาเป็น props ถูกหรือไม่ เช่น กด button แล้ว เรียกใช้ callback ถูกหรือไม่</li>
      <li>ทำ snapshot เพื่อเก็บ UI ปัจจุบัน</li>
    </ul>
    <h4>ตัวอย่างของ Presentational component</h4>
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
    <p>หรือบางคนอาจจะเขียนในรูปของ Function component แบบนี้</p>
    <Highlight className='js'>
      {`
        import React, { Component } from 'react'

        const Foo = () => (
          <div>
            Hello, Stateless Component
          </div>
        )

        export default Foo
      `}
    </Highlight>
    <h4>ตัวอย่างการเทส</h4>
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
