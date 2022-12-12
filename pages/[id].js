import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id, 'https://dev-cs5513-back-end-site.pantheonsite.io/wp-json/twentytwentyone-child/v1/complete');
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds('https://dev-cs5513-back-end-site.pantheonsite.io/wp-json/twentytwentyone-child/v1/complete');
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-3">
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.description}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.price}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.cost}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.customer}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.password}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.address}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.item_id}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.customer_id}} />
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.acf_fields.location_id}} />
        </div>
        
      </article>
    </Layout>
  ); 
}