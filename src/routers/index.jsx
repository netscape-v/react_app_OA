import Wellcome from '../componets/Wellcome'
import Main from '../componets/Main'
import Workbench from '../componets/Everything/Workbench'

// children:
export default [
  { path: '/', element: <Wellcome /> },
  {
    path: '/home', element: <Main />, children: [
      {
        path: 'workbench', element: <Workbench/>
      }
    ]
  },
]