import { Link } from '@inertiajs/react';
import Head from '../Head';
import Layout from '../Layout';

export default function Welcome() {
  return (
    <Layout>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello welcome to your first Inertia app!</p>
      <Link href="/test2">Next Page</Link>
    </Layout>
  );
}
