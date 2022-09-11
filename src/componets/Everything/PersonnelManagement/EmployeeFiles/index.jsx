
import { DoubleLeftOutlined, CloseCircleOutlined, UserOutlined } from '@ant-design/icons';
import {
  message,
  Card,
  Button,
  Divider,
  Input,
  Table,
  Form,
  Typography,
  Popconfirm,
  InputNumber,
  Modal,
  Tabs,
  Image,
  Avatar
} from 'antd';

import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import './index.less'

// 行数据, 假数据, 后台获取 
const originData = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    job: '打杂',
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡兵',
    age: 42,
    job: '唱歌',
    address: '西湖区湖底公园2号',
  },
  {
    key: '3',
    name: '胡八一',
    age: 42,
    job: '跳舞',
    address: '西湖区湖底公园3号',
  },
  {
    key: '4',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '5',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '6',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '7',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '8',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '9',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
  {
    key: '10',
    name: '胡汉三',
    age: 42,
    job: 'rap',
    address: '西湖区湖底公园4号',
  },
];

// 创建100条
for (let i = 10; i < 100; i++) {
  originData.push({
    key: i.toString(),
    name: `Edrward ${i}`,
    age: 32,
    address: `London Park no. ${i}`,
  });
}

// 固定写法
const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Please Input ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

export default function EmployeeFiles() {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.key === editingKey;
  const [tabsChangekey, setTabsChangekey] = useState('');

  // 弹出modal对话框
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 路由参数
  const location = useLocation()

  // 固定写法, 取消
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  // 固定写法, 取消
  const cancel = () => {
    setEditingKey('');
  };

  // 固定写法, 保存
  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };

  // 固定写法, 删除
  const handleDelete = (key) => {
    const newData = data.filter((item) => item.key !== key);
    setData(newData);
  };

  // 列的数据定义
  const columns = [
    {
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      editable: true,
    },
    {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      editable: true,
    },
    {
      title: 'address',
      dataIndex: 'address',
      width: '20%',
      editable: true,
    },
    {
      title: 'job',
      dataIndex: 'job',
      width: '20%',
      editable: true,
    },
    {
      title: 'operation',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <a onClick={() => cancel()}>取消</a>
          </span>
        ) : (
          <>
            <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
              编辑
            </Typography.Link>
            <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
              <a style={{ marginLeft: 20 }}>删除</a>
            </Popconfirm>

            <a onClick={() => { confirm(record.key) }} style={{ marginLeft: 20 }}>更多</a>
          </>
        );
      },
    },
  ];

  // 固定写法
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  // 更多操作, 呼出modal 对话框
  const confirm = () => {
    setIsModalOpen(true)
  };

  // 取消与确定
  function hideModal() {
    setIsModalOpen(false)
  }

  // tabs 切换
  const tabsOnChange = (key) => {
    setTabsChangekey(key)
    console.log(key);
  };

  /******************************假数据*************************************/

  // 工作经历 columns 假数据
  const columnsWork = [
    {
      title: '名字',
      dataIndex: 'name',
      width: '15%',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      width: '15%',
      key: 'age',
    },
    {
      title: '地址',
      dataIndex: 'address',
      width: '20%',
      key: 'address',
    },
    {
      title: '职位',
      dataIndex: 'job',
      width: '10%',
      key: 'job',
    },
    {
      title: '单位名称',
      dataIndex: 'companyName',
      width: '20%',
      key: 'companyName',
    },
  ]
  // 工作经历 data 假数据
  const dataWork = [
    {
      key: '1',
      name: '张三',
      age: 32,
      address: '杭州',
      job: '组长',
      companyName: '阿里巴巴'
    },
    {
      key: '2',
      name: '李四',
      age: 33,
      address: '北京',
      job: '组长',
      companyName: '华为'
    },

  ]

  // 教育经历 columns 假数据
  const columnsEducate = [
    {
      title: '开始时间',
      dataIndex: 'startTime',
      width: '10%',
      key: 'startTime',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: '10%',
      key: 'endTime',
    },
    {
      title: '学历',
      dataIndex: 'education',
      width: '10%',
      key: 'education',
    },
    {
      title: '专业',
      dataIndex: 'major',
      width: '20%',
      key: 'major',
    },
    {
      title: '学校名称',
      dataIndex: 'schoolName',
      width: '20%',
      key: 'schoolName',
    },
  ]
  // 教育经历 Data 假数据
  const dataEducate = [
    {
      key: '001',
      startTime: 2013 - 9,
      endTime: 2017 - 10,
      education: '杭州',
      major: '计算机专业',
      schoolName: '杭州大学'
    },
    {
      key: '002',
      startTime: 2014 - 9,
      endTime: 2018 - 10,
      education: '温州',
      major: '计算机专业',
      schoolName: '温州大学'
    },


  ]

  // 员工合同 columns 假数据
  const columnsContract = [
    {
      title: '签署人',
      dataIndex: 'autographName',
      width: '10%',
      key: 'autographName',
    },
    {
      title: '合同名称',
      dataIndex: 'contractName',
      width: '13%',
      key: 'contractName',
    },
    {
      title: '签署单位',
      dataIndex: 'signedtName',
      width: '12%',
      key: 'signedtName',
    },
    {
      title: '合同类型',
      dataIndex: 'contractType',
      width: '12%',
      key: 'contractType',
    },
    {
      title: '起始时间',
      dataIndex: 'startDate',
      width: '14%',
      key: 'startDate',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '8%',
      key: 'status',
    },
    {
      title: '提前终止日期',
      dataIndex: 'advanceEndtDate',
      width: '15%',
      key: 'advanceEndtDate',
    },
    {
      title: '说明',
      dataIndex: 'explain',
      width: '15%',
      key: 'explain',
    },
  ]
  // 员工合同 Data 假数据
  const dataContract = [
    {
      key: '001',
      autographName: '王五',
      contractName: '试用期合同',
      signedtName: '阿里巴巴',
      contractType: '劳动合同',
      startDate: '2019-10-12 ~2022-10-14',
      status: '有效',
      advanceEndtDate: '2020-3-14',
      explain: '试用不合格',
    },
  ]

  // RandPcolumns 赏罚 假数据
  const columnsRandP = [
    {
      title: '申请日期',
      dataIndex: 'applyDate',
      width: '10%',
      key: 'applyDate',
    },
    {
      title: '发生时间',
      dataIndex: 'happenDate',
      width: '10%',
      key: 'happenDate',
    },
    {
      title: '发生地点',
      dataIndex: 'happenPlace',
      width: '10%',
      key: 'happenPlace',
    },
    {
      title: '奖罚类型',
      dataIndex: 'RandPType',
      width: '10%',
      key: 'RandPType',
    },
    {
      title: '奖罚结果',
      dataIndex: 'RandPTypeResult',
      width: '14%',
      key: 'RandPTypeResult',
    },
    {
      title: '奖罚金额',
      dataIndex: 'RandPmoney',
      width: '10%',
      key: 'RandPmoney',
    },
    {
      title: '说明',
      dataIndex: 'explan',
      width: '10%',
      key: 'explan',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      key: 'status',
    },
  ]
  // RandPdata 赏罚 假数据
  const dataRandP = [
    {
      applyDate: '2020-10-12',
      happenDate: '2020-10-13',
      happenPlace: '办公室',
      RandPType: '奖励',
      RandPTypeResult: '奖励一辆法拉利',
      RandPmoney: '1000000',
      explan: '销冠',
      // 此处应该根据status的布尔值来渲染
      status: <h3 style={{ color: 'green' }} >已通过</h3>,
    },
  ]

  // 转正申请 假数据
  const columnsRegularStaff = [
    {
      title: '申请日期',
      dataIndex: 'applyDate',
      width: '10%',
      key: 'applyDate',
    },
    {
      title: '职位',
      dataIndex: 'position',
      width: '10%',
      key: 'position',
    },
    {
      title: '入职时间',
      dataIndex: 'happenPlace',
      width: '10%',
      key: 'happenPlace',
    },
    {
      title: '试用期到期日',
      dataIndex: 'onTrialPeriod',
      width: '12%',
      key: 'onTrialPeriod',
    },
    {
      title: '转正日期',
      dataIndex: 'qualifiedDate',
      width: '14%',
      key: 'qualifiedDate',
    },
    {
      title: '申请说明',
      dataIndex: 'explan',
      width: '10%',
      key: 'explan',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      key: 'status',
    },
  ]
  // 转正申请 赏罚 假数据
  const dataRegularStaff = [
    {
      applyDate: '2020-10-10',
      position: '销售',
      happenPlace: '2020-9-9',
      onTrialPeriod: '2020-10-8',
      qualifiedDate: '2020-10-30',
      explan: '试用合格',
      status: <h3 style={{ color: 'green' }} >已通过</h3>,
    },
  ]

  // 离职申请 假数据
  const columnsQuitApply = [
    {
      title: '申请日期',
      dataIndex: 'applyDate',
      width: '10%',
      key: 'applyDate',
    },
    {
      title: '职位',
      dataIndex: 'position',
      width: '10%',
      key: 'position',
    },
    {
      title: '入职时间',
      dataIndex: 'happenPlace',
      width: '10%',
      key: 'happenPlace',
    },
    {
      title: '离职类型',
      dataIndex: 'quitType',
      width: '12%',
      key: 'quitType',
    },
    {
      title: '离职原因',
      dataIndex: 'quitReason',
      width: '14%',
      key: 'quitReason',
    },
    {
      title: '申请说明',
      dataIndex: 'explan',
      width: '10%',
      key: 'explan',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      key: 'status',
    },
  ]
  // 离职申请 赏罚 假数据
  const dataQuitApply = [
    {
      applyDate: '2020-10-10',
      position: '销售',
      happenPlace: '2020-9-9',
      quitType: '2020-10-8',
      quitReason: '没买社保',
      explan: '伙食太差',
      status: <h3 style={{ color: 'green' }} >已通过</h3>,
    },
  ]

  // 调薪申请 假数据
  const columnsAddSalary = [
    {
      title: '申请日期',
      dataIndex: 'applyDate',
      width: '10%',
      key: 'applyDate',
    },
    {
      title: '职位',
      dataIndex: 'position',
      width: '8%',
      key: 'position',
    },
    {
      title: '调薪幅度',
      dataIndex: 'range',
      width: '10%',
      key: 'range',
    },
    {
      title: '生效日期',
      dataIndex: 'effectiveDate',
      width: '12%',
      key: 'effectiveDate',
    },
    {
      title: '说明',
      dataIndex: 'explan',
      width: '10%',
      key: 'explan',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      key: 'status',
    },
  ]
  // 调薪申请 赏罚 假数据
  const dataAddSalary = [
    {
      applyDate: '2020-10-10',
      position: '销售',
      range: '1000',
      effectiveDate: '2020-11-8',
      explan: '工作量加大了',
      status: <h3 style={{ color: 'green' }} >已通过</h3>,
    },
  ]

  // 认识调度 假数据
  const columnsPeopleDispatch = [
    {
      title: '申请日期',
      dataIndex: 'applyDate',
      width: '10%',
      key: 'applyDate',
    },
    {
      title: '调动类型',
      dataIndex: 'dispatchType',
      width: '8%',
      key: 'dispatchType',
    },
    {
      title: '原来部门',
      dataIndex: 'originalDepartment',
      width: '10%',
      key: 'originalDepartment',
    },
    {
      title: '生效日期',
      dataIndex: 'effectiveDate',
      width: '12%',
      key: 'effectiveDate',
    },
    {
      title: '调动后职位',
      dataIndex: 'dispatchedDepartment',
      width: '12%',
      key: 'dispatchedDepartment',
    },
    {
      title: '说明',
      dataIndex: 'explan',
      width: '10%',
      key: 'explan',
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: '10%',
      key: 'status',
    },
  ]
  // 认识调度 假数据
  const dataPeopleDispatch = [
    {
      applyDate: '2020-10-10',
      dispatchType: '升职',
      originalDepartment: '出纳',
      dispatchedDepartment: '经理',
      effectiveDate: '2020-1-1',
      explan: '优秀员工',
      status: <h3 style={{ color: 'green' }} >已通过</h3>,
    },
  ]

  return (
    <div>
      <Modal
        title={<h3>{location.state}</h3>}
        open={isModalOpen}
        onOk={() => { hideModal() }}
        onCancel={() => { hideModal() }}
        closeIcon={<CloseCircleOutlined />}
        width={850}
        footer={null}
        className='modalDiv'
      >
        <Tabs
          defaultActiveKey="1"
          onChange={tabsOnChange}
          style={{ marginTop: -15 }}
          items={[
            // 个人资料
            {
              label: `个人资料`,
              key: '1',
              children:
                <div className='div-tab'>
                  <div className='div-image'>
                    <Image
                      width={120}
                      height={140}
                      src='http://rhb4wmfy0.bkt.clouddn.com/peiqi2.jpg'
                    />
                    <div className='div-input'>
                      <div>
                        <Input addonBefore='姓名' style={{ width: 200 }}></Input>
                        <Input addonBefore='部门' style={{ width: 200, marginLeft: 30 }}></Input>
                        <Input addonBefore='职位' style={{ width: 200, marginLeft: 30 }}></Input>
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <Input addonBefore='电话' style={{ width: 200 }}></Input>
                        <Input addonBefore='手机' style={{ width: 200, marginLeft: 30 }}></Input>
                        <Input addonBefore='邮箱' style={{ width: 200, marginLeft: 30 }}></Input>
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <Input addonBefore='紧急联系人' style={{ width: 200 }}></Input>
                        <Input addonBefore='联系电话' style={{ width: 200, marginLeft: 30 }}></Input>
                      </div>
                    </div>
                  </div>
                  <Divider style={{ marginTop: 10 }} />
                  <div style={{ marginTop: -15 }}>
                    <h3><strong><p>人员状态信息</p></strong></h3>
                    <div>
                      <Input addonBefore='人员状态' style={{ width: 220 }}></Input>
                      <Input addonBefore='入职时间' style={{ width: 220, marginLeft: 30 }}></Input>
                      <Input addonBefore='试用到期' style={{ width: 220, marginLeft: 30 }}></Input>
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Input addonBefore='转正时间' style={{ width: 220 }}></Input>
                      <Input addonBefore='所属部门' style={{ width: 220, marginLeft: 30 }}></Input>
                      <Input addonBefore='离职时间' style={{ width: 220, marginLeft: 30 }}></Input>
                    </div>
                  </div>
                  <Divider style={{ marginTop: 10 }} />
                  <div style={{ marginTop: -20 }}>
                    <h3><strong><p>个人信息</p></strong></h3>
                    <div>
                      <Input addonBefore='学历' style={{ width: 220 }}></Input>
                      <Input addonBefore='民族' style={{ width: 220, marginLeft: 30 }}></Input>
                      <Input addonBefore='生日' style={{ width: 245, marginLeft: 30 }}></Input>
                    </div>
                    <div style={{ marginTop: 15 }}>
                      <Input addonBefore='籍贯' style={{ width: 220 }}></Input>
                      <Input addonBefore='婚姻状况' style={{ width: 220, marginLeft: 30 }}></Input>
                      <Input addonBefore='身份证号' style={{ width: 245, marginLeft: 30 }}></Input>
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <Input addonBefore='现住址' style={{ width: 345 }}></Input>
                      <Input addonBefore='家庭住址' style={{ width: 350, marginLeft: 50 }}></Input>
                    </div>
                  </div>
                  <Divider style={{ marginTop: 10 }} />
                  <div style={{ marginTop: -15 }} >
                    <h3><strong><p>工资卡信息</p></strong></h3>
                    <Input addonBefore='开户行' style={{ width: 345 }}></Input>
                    <Input addonBefore='工资卡号' style={{ width: 350, marginLeft: 50 }}></Input>
                  </div>
                </div>
            },
            // 工作经历
            {
              label: `工作经历`,
              key: '2',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsWork}
                    dataSource={dataWork}
                    pagination={false}
                  />
                </div>,
            },
            // 教育经历
            {
              label: `教育经历`,
              key: '3',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsContract}
                    dataSource={dataContract}
                    pagination={false}
                  />
                </div>,
            },
            // 员工合同
            {
              label: `员工合同`,
              key: '4',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsContract}
                    dataSource={dataContract}
                    pagination={false}
                  />
                </div>,
            },
            // 奖励处罚
            {
              label: `奖励处罚`,
              key: '5',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsRandP}
                    dataSource={dataRandP}
                    pagination={false}
                  />
                </div>,
            },
            // 转正申请
            {
              label: `转正申请`,
              key: '6',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsRegularStaff}
                    dataSource={dataRegularStaff}
                    pagination={false}
                  />
                </div>,
            },
            // 离职申请
            {
              label: `离职申请`,
              key: '7',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsQuitApply}
                    dataSource={dataQuitApply}
                    pagination={false}
                  />
                </div>,
            },
            // 调薪申请
            {
              label: `调薪申请`,
              key: '8',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsAddSalary}
                    dataSource={dataAddSalary}
                    pagination={false}
                  />
                </div>,
            },
            // 人事调动
            {
              label: `人事调动`,
              key: '9',
              children:
                <div className='div-tab'>
                  <Table
                    columns={columnsPeopleDispatch}
                    dataSource={dataPeopleDispatch}
                    pagination={false}
                  />
                </div>,
            },
          ]}
        />
        <div>
          <Divider />
          <h4 style={{ marginTop: -15 }} ><strong><p>历史查询记录</p></strong></h4>
          <Avatar
            size={45}
            src='http://rhb4wmfy0.bkt.clouddn.com/peiqi2.jpg'
            style={{
              marginLeft: 18
            }}
          />
          <div style={{
            textAlign: 'center',
            width: 80,
          }} >
            <h5 style={{ padding: 0, margin: 0, marginTop: 5 }} >李小璐</h5>
            <h6 style={{ padding: 0, margin: 0 }} >2022-09-10</h6>
            <div style={{ height: 5 }} />
          </div>
          {
            tabsChangekey == 1 ? <Button
              style={{
                marginRight: 400,
                backgroundColor: '#5989FF',
                color: 'white',
                borderRadius: 5
              }}
            >保存修改</Button> : ''
          }
        </div>
      </Modal>
      <Card
        hoverable='ture'
        style={{
          height: 730,
          width: '98.5%',
          marginLeft: 10,
          borderRadius: 8,
        }}
      >
        <DoubleLeftOutlined />
        <Button style={{ marginLeft: 10, borderRadius: 5 }}>
          人员档案 <CloseCircleOutlined />
        </Button>
        <Divider />
        搜索&nbsp;:&nbsp;&nbsp;<Input
          placeholder='输入搜索内容...'
          style={{ width: 200, borderRadius: 5, marginRight: 50 }}
        />
        状态选择&nbsp;:&nbsp;&nbsp;<Input
          placeholder='输入搜索内容...'
          style={{ width: 200, borderRadius: 5, marginRight: 50 }}
        />
        部门&nbsp;:&nbsp;&nbsp;<Input
          placeholder='输入搜索内容...'
          style={{ width: 200, borderRadius: 5, marginRight: 50 }}
        />
        入职时间&nbsp;:&nbsp;&nbsp;<Input
          placeholder='输入搜索内容...'
          style={{ width: 200, borderRadius: 5, marginRight: 50 }}
        />

        <Button style={{ marginLeft: 10, borderRadius: 5, backgroundColor: '#5989FF', color: 'white' }}>搜索</Button>
        <Button style={{ marginLeft: 10, borderRadius: 5, backgroundColor: '#CBCCCB', color: 'white' }}>重置</Button>
        <Button style={{ marginLeft: 10, borderRadius: 5, color: 'blue' }}>更新数据</Button>
        <div style={{ height: 30 }} />
        <Form
          form={form}
          component={false}
        >
          <Table
            components={{
              body: {
                cell: EditableCell,
              },
            }}
            bordered
            dataSource={data}
            columns={mergedColumns}
            rowClassName="editable-row"
            scroll={{
              y: 440,
            }}
            pagination={{
              onChange: cancel,
            }}
          />
        </Form>
      </Card>
    </div>
  )
}