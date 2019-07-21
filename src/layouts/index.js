import { Layout } from 'antd';
import styles from './index.css';
const { Header, Footer, Sider, Content } = Layout;

function BasicLayout(props) {
  return (
    <Layout className={styles.main}>
      <Header></Header>
      <Layout>
        <Sider></Sider>
        <Content>{props.children}</Content>
        <Sider></Sider>
      </Layout>
    </Layout>
  );
}

export default BasicLayout;
