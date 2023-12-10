import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome" />
      <h1>Welcome Back</h1>
      <p>Hello again and welcome to your first Inertia page!</p>
      <Link href="/test">Previous Page</Link>
    </>
  );
}
