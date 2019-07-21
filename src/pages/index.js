import styles from './common.css';
import { connect } from 'dva';
import NewsList from '../components/NewsList';


export const Index = ({ dispatch, news }) => {
  return (
    <div className={styles.listContainer}>
      <NewsList news={news} />
    </div>
  );
};


export default connect(({ news }) => ({
  news,
}))(Index);
