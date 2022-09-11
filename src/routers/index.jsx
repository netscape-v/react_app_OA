import Wellcome from '../componets/Wellcome'
import Main from '../componets/Main'
import Workbench from '../componets/Everything/Workbench'
import EmployeeFiles from '../componets/Everything/PersonnelManagement/EmployeeFiles'
import EmployeeContract from '../componets/Everything/PersonnelManagement/EmployeeContract'
import RewardAndPunishment from '../componets/Everything/PersonnelManagement/RewardAndPunishment'
import QualifiedEmployees from '../componets/Everything/PersonnelManagement/QualifiedEmployees'
import ApplyForResignation from '../componets/Everything/PersonnelManagement/ApplyForResignation'
import ApplyAddSalary from '../componets/Everything/PersonnelManagement/ApplyAddSalary'
import PersonnelTransfer from '../componets/Everything/PersonnelManagement/PersonnelTransfer'

// children:
export default [
  { path: '/', element: <Wellcome /> },
  {
    path: '/home', element: <Main />, children: [
      {
        // 工作台
        path: 'workbench', element: <Workbench />
      },
      {
        // 人员档案
        path: 'employee-files', element: <EmployeeFiles />
      },
      {
        // 员工合同
        path: 'employee-contract', element: <EmployeeContract />
      },
      {
        // 奖赏与处罚
        path: 'reward-punishment', element: <RewardAndPunishment />
      },
      {
        // 申请转正
        path: 'qualified-employees', element: <QualifiedEmployees />
      },
      {
        // 离职申请
        path: 'apply-resignation', element: <ApplyForResignation />
      },
      {
        // 申请调薪
        path: 'add-salary', element: <ApplyAddSalary />
      },
      {
        // 人事调动
        path: 'personnel-transfer', element: <PersonnelTransfer />
      },
    ]
  },
]