import { Card } from 'antd'
import './index.less'
export default function EmployeeContract() {
  return (
    <div className='contractDiv'>
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730
        }}
      >
        员工合同
      </Card>
    </div>
  )
}