
import './index.less'
import { Card } from 'antd'
export default function RewardAndPunishment() { 
  return (
    <div className='card-div'>
      <Card
        hoverable={true}
        style={{
          borderRadius: 5,
          height: 730,
        }}
      >
        奖赏与处罚
      </Card>
    </div>
  )
}