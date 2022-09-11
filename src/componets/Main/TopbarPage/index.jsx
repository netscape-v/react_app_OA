
import { useState } from 'react'
import { Card, Input, Space, Image, Button, Modal, message } from 'antd';
import { SearchOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons';
import './index.less'

export default function TopbarPage() {

  function inputPressEnter(params) {
    console.log(params.target.value)
  }

  const [modalBox, setModalBox] = useState(false)

  function onClickQuitBtn() {
    setModalBox(true)
  }
  // 处理确认事件
  function hideModal(value) {
    if (value == 'ok') {
      message.success('退出登录')
      setModalBox(false)
      return
    }
    message.info('取消退出！')
    setModalBox(false)
    return
  }

  return (
    <>
      <Modal
        open={modalBox}
        footer={null}
        onOk={() => { hideModal('ok') }}
        onCancel={() => { hideModal('cancel') }}
        className='modalTop'
      >
        <h1>确定退出 ?</h1>
        <div style={{ marginTop: 60 }}>
          <Button onClick={() => { hideModal('ok') }} size='large' type='primary' style={{ marginLeft: 40 }}>确认</Button>
          <Button onClick={() => { hideModal('cancel') }} size='large' style={{ marginLeft: 195, backgroundColor:'#FFB2DE',color:'white' }}>取消</Button>
        </div>
      </Modal>
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
    </>
  )
}