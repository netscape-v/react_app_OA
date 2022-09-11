import './index.less'
import { Card } from 'antd'
export default function QualifiedEmployees() { 
  return (
    <div className='card-div' >
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730
        }}
      >
        转正申请
      </Card>
    </div>
  )
}