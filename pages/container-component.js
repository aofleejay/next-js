import Page from '../layouts/main'

export default () => (
  <Page>
    <p>Container Component</p>
    <p>จากการออกแบบ component โดยแบ่งเป็น Presentational component และ Container component ในหน้านี้จะพูดถึง Container component ครับ</p>
    <p>Container component จะเป็น component ที่เกี่ยวกับการจัดการข้อมูล ลักษณะของมันมีประมานนี้ครับ</p>
    <ul>
      <li>เป็น component ที่บอกว่าการทำงานของมันทำงานอย่างไร โดยไม่สนการแสดงผล</li>
      <li>เป็น component ที่เก็บข้อมูล และ callback ที่ใช้จัดการข้อมูล โดยจะส่งต่อให้กับ Presentational component ผ่าน props</li>
      <li>ถ้าใช้ redux จะใช้ที่นี่ โดยจะส่ง state และ action ผ่าน props ไปยัง children component</li>
    </ul>
    <p>เราจะทดสอบอะไรได้บ้าง</p>
    <ul>
      <li>ทดสอบค่า state เริ่มต้น</li>
      <li>ทดสอบ function ที่ส่งผลต่อ state ว่าทำงานถูกต้องหรือไม่</li>
      <li>render Presentational ถูกต้องหรือไม่</li>
    </ul>
  </Page>
)
