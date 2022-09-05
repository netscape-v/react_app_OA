

import './index.css'
import { Space, Card } from 'antd'
export default function Workbench() {
  const c_height = 160;
  const c_width = 392; 
  return (
    <div className='contentDiv'>
      <Space
        direction='vertical'
      >
        {/* 顶部 4 张卡片 */}
        <Space size={30}>
          <Card
            hoverable='ture'
            style={{
              height: c_height,
              width: c_width,
              borderRadius: 8,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            <h4>卡片1</h4>
          </Card>

          <Card
            hoverable='ture'
            style={{
              height: c_height,
              width: c_width,
              borderRadius: 8,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            <h4>卡片1</h4>
          </Card>

          <Card
            hoverable='ture'
            style={{
              height: c_height,
              width: c_width,
              borderRadius: 8,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            <h4>卡片1</h4>
          </Card>

          <Card
            hoverable='ture'
            style={{
              height: c_height,
              width: c_width,
              borderRadius: 8,
              marginTop: 10,
              marginLeft: 10
            }}
          >
            <h4>卡片1</h4>
          </Card>
        </Space>

        {/* 中间一条卡片 */}
        <Space>
          <Card
            hoverable='ture'
            style={{
              height: 100,
              width: 1685,
              marginLeft: 10,
              borderRadius: 8
            }}
          >
            <h4>一条卡片</h4>
          </Card>
        </Space>

        {/* 最下面两张大的 */}
        <Space direction='horizontal' >
          <Card
            hoverable='ture'
            style={{
              height: 440,
              width: 833,
              marginLeft: 10,
              borderRadius: 8
            }}
          >
            <h3>大卡片1</h3>
          </Card>

          <Card
            hoverable='ture'
            style={{
              height: 440,
              width: 833,
              marginLeft: 10,
              borderRadius: 8
            }}
          >
            <h3>大卡片2</h3>
          </Card>
        </Space>
      </Space>
    </div>
  )
}