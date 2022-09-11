import { Menu } from 'antd';

import { items } from './data/MenuItems';
import { useNavigate } from 'react-router-dom';
import './index.css'

export default function SidebarPage() {
  const navigate = useNavigate()

  function selectEvt(item) {
    // 选中的 key 值
    switch (item.key) {
      case 'k1':
        // console.log(item.key)
        navigate('workbench')
        break;
      case 'k5':
        const L = selectEvt2('k5')
        // console.log(L.label)
        // 员工档案
        navigate('employee-files', { state: L.label })
        break;
      case 'k6':
        // 工作台
        navigate('employee-contract')
        break;
      case 'k7':
        // 奖赏予和处罚
        navigate('reward-punishment')
        break;
      case 'k8':
        // 申请转正
        navigate('qualified-employees')
        break;
      case 'k9':
        // 离职申请
        navigate('apply-resignation')
        break;
      case 'k10':
        // 申请调薪
        navigate('add-salary')
        break;
      case 'k11':
        // 人事调动
        navigate('personnel-transfer')
        break;
    }
  }

  function selectEvt2(value) {
    const label = items.find((item) => {
      if (item.children != undefined) {
        const label = item.children.find((item) => {
          if (item.key == value) {
            return (item)
          }
        })
        return label
      }
    }
    )
    return label
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