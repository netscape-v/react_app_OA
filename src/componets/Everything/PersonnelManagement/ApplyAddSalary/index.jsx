
import './index.less'
import { Card } from 'antd'
export default function ApplyAddSalary() { 
  return (
    <div className='card-div'>
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730
        }}
      >
        调薪申请
      </Card>
    </div>
  )
}