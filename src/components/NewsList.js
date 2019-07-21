import { Skeleton, Switch, List, Avatar, Icon } from 'antd';
import styles from './newslist.css';
import router from 'umi/router';


const NewsList = ({ news }) => {
  const IconText = ({ type, text }) => (
    <span>
      <Icon type={type} style={{ marginRight: 8 }} />
      {text}
    </span>
  );

  let SkeletonList = [];
  for (let i = 0; i < 5; i++) {
    SkeletonList.push(<Skeleton key={'index-'+i} className={styles.skeletonElt} active avatar /> );
  }

  if (news.loading) {
    return SkeletonList;
  } else {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={news.data}
        renderItem={item => (
          <List.Item
          // onClick={()=> {  router.push('/newsArticle')}}
          key={item.id}
          extra={
            <div className={styles.imageBlock}>
            <img
            className={styles.imageItem}
            alt="logo"
            src={item['media'][0]['media-metadata'][1].url}
            />
            <p className={styles.imageCaption}><em>{item['media'][0]['caption']}</em></p>  
            </div>          
          }
          >
            <div className={styles.articleSection}>#{item.section}</div>
            <List.Item.Meta
              className={styles.articleTitle}              
              title={<a href={item.url} target="_blank">{item.title}</a>}
              description={item.abstract}
            />
            <div className={styles.byLineStyle}>
              {item.views} views  
              <span className={styles.verticalSpace}>|</span> 
              {item.byline} 
              <span className={styles.verticalSpace}>|</span>
              On {item.published_date}
            </div>
            <div className={styles.viewStyle}>
            </div>
          </List.Item>
        )}
      />
    );
  }
};

export default NewsList;
