
import './index.less'
import { Card } from 'antd'
export default function PersonnelTransfer() { 
  return (
    <div className='card-div'>
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730
        }}
      >
        人员调动
      </Card>
    </div>
  )
}