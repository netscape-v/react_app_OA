import './index.less'
import { Card } from 'antd'
export default function ApplyForResignation() { 
  return (
    <div className='card-div'>
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730
        }}
      >
        辞职申请
      </Card>
    </div>
  )
}