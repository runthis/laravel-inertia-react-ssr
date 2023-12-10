import { Head } from '@inertiajs/react';

function ApplicationHead({ title, children }) {
  return (
    <Head>
      <title>{title ? `${title} - My App` : 'My App'}</title>
      {children}

    </Head>
  );
}

export default ApplicationHead;
