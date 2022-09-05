
import { Card, Input, Space, Image, Button, Modal, message } from 'antd';
import { SearchOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
import './index.css'
const { confirm } = Modal;

export default function TopbarPage() {

  function inputPressEnter(params) {
    console.log(params.target.value)
  }

  function onClickQuitBtn() {
    confirm({
      title: 'Confirm',
      icon: <SettingOutlined />,
      content: '退出操作',
      onOk() {
        hideModal('ok')
      },
      onCancel() {
        hideModal('cancel')
      },
    })
  }
  // 处理确认事件
  function hideModal(value) {
    if (value == 'ok') {
      message.success('退出登录')
      return
    } else {
      message.warning('取消退出！')
      return
    }
  }


  return (
    <div className="topBar">
      <Card
        hoverable='ture'
        bordered='false'
        style={{
          width: '98.5%',
          height: '82%',
          marginTop: '10px',
          marginLeft: '10px',
          borderRadius: 8
        }}
      >
        <Space style={{ marginTop: 3 }}>
          <SearchOutlined />
          {/* 搜索输入框 */}
          <Input
            style={{ width: 500 }}
            onPressEnter={inputPressEnter}
            bordered='false'
            allowClear='true'
            size='large'
            placeholder="输入关键字, 按回车搜索想要的信息" />
          <SettingOutlined style={{ marginLeft: 400, fontSize: 25 }} />
          <BellOutlined style={{ marginLeft: 20, fontSize: 25 }} />

          <Image
            style={{ borderRadius: 25, marginLeft: 20 }}
            width={50}
            height={50}
            preview={false}
            src="http://rhb4wmfy0.bkt.clouddn.com/peiqi.jpg"
            fallback="http://rhb4wmfy0.bkt.clouddn.com/qiaozhi.jpg"
          />
          <h3 style={{ marginLeft: 30 }}>admin</h3>
          {/* 退出按钮 */}
          <Button onClick={onClickQuitBtn} style={{ marginBottom: 5, marginLeft: 30 }} type="link">退出登录</Button>

        </Space>
      </Card>
    </div>
  )
}