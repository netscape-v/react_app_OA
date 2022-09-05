import SidebarPage from './SidebarPage'
import ContentPage from './ContentPage'
import TopbarPage from './TopbarPage'

import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default function Main() {
  return (
    <>
      <Layout>
        {/* 侧边栏 */}
        <Sider>
          <SidebarPage />
        </Sider>
        <Layout>
          {/* 头部 */}
          <Header style={{ padding: 0 ,height:120,backgroundColor: '#F2F2F2'}}>
            <TopbarPage />
          </Header>
          {/* 主体区 */}
          <Content>
            <ContentPage/>
          </Content>
          {/* 底部 */}
          <Footer><h3>React Not Simple!</h3></Footer>
        </Layout>
      </Layout>
    </>
  )
}