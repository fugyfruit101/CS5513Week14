import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getSortedList } from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList('https://dev-cs5513-back-end-site.pantheonsite.io/wp-json/twentytwentyone-child/v1/customer');
  return {
    props: {
      allData
    },
    revalidate: 60
  }
}
export default function Home({ allData }) {
  return (
      <Layout home>
        <h1>Customers</h1>
        <div className="list-group col-6">
        {allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))}
          <Link href="/">
            <a class="btn btn-primary row-mt-10"> Product</a>
          </Link>
          <Link href="/identity">
            <a class="btn btn-primary row-mt-10"> Identification #</a>
          </Link>
        </div>
      </Layout>
  );
}
