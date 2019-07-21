import { Layout, PageHeader } from 'antd';
import styles from './index.css';
const { Header, Footer, Sider, Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.main}>
      <Header>
        <PageHeader title="Newyork Times Most Popular"  />
      </Header>
      <Layout>
        <Sider></Sider>
        <Content>{props.children}</Content>
        <Sider></Sider>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
