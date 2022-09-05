import { Menu } from 'antd';

import { items } from './data/MenuItems';
import './index.css'

export default function SidebarPage() {

  function selectEvt(item) {
    // 选中的 key 值
    console.log(item.key)
  }
  
  return (
    <div className='sidebarDiv'>
      <div className='titleDiv'>
        <h1 style={{ paddingTop: '16%' }}>OA 管理系统</h1>
      </div>
      <Menu
        onClick={selectEvt}
        style={{
          width: 200,
          height: '90%',
          marginTop: '-10px',
        }}
        items={items}
        mode="inline"
      />
    </div>
  )
}