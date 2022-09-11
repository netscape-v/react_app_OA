import {
  TableOutlined,
  TeamOutlined,
  FormOutlined,
  UserOutlined,
  PaperClipOutlined,
  AreaChartOutlined,
  PieChartOutlined,
  SettingOutlined,
  LineChartOutlined
} from '@ant-design/icons';


const items = [
  {
    label: '工作台', icon: <TableOutlined />, key: 'k1'
  },
  {
    label: '人员管理', icon: <TeamOutlined />, key: 'k4', children: [
      { label: '人员档案', icon: <UserOutlined />, key: 'k5', },
      { label: '员工合同', icon: <UserOutlined />, key: 'k6', },
      { label: '奖惩处罚', icon: <UserOutlined />, key: 'k7', },
      { label: '转正申请', icon: <UserOutlined />, key: 'k8', },
      { label: '离职申请', icon: <UserOutlined />, key: 'k9', },
      { label: '调薪申请', icon: <UserOutlined />, key: 'k10', },
      { label: '人事调动', icon: <UserOutlined />, key: 'k11', },
    ]
  },
  {
    label: '审批中心', icon: <FormOutlined />, key: 'k12', children: [
      { label: '审批管理', icon: <PaperClipOutlined />, key: 'k13' },
      { label: '我参与的审批', icon: <PaperClipOutlined />, key: 'k14' },
      { label: '审批流程', icon: <PaperClipOutlined />, key: 'k15' },
    ]
  },
  {
    label: '图形数据', icon: <LineChartOutlined />, key: 'k19', children: [
      { label: '折线图', icon: <AreaChartOutlined />, key: 'k20' },
      { label: '饼图', icon: <PieChartOutlined />, key: 'k21' },
    ]
  },
  {
    label: '系统设置', icon: <SettingOutlined />, key: 'k17',
    children: [
      {
        label: '模板管理', icon: <SettingOutlined />, key: 'k18'
      },
    ]
  },
]

export { items }