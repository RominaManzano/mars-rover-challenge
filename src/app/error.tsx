'use client';

import BackHomeButton from '@/components/buttons/BackHomeButton';
import PageTitle from '@/components/common/PageTitle';

interface ErrorProps {
  error: Error;
}

const Error: React.FC<ErrorProps> = ({ error }) => (
  <div className="w-full h-screen p-24">
    <PageTitle title="Something went wrong!" />

    <div className="flex justify-center mt-8">
      <p className="italic opacity-80 border border-white rounded-md p-20">
        {error.message}
      </p>
    </div>

    <BackHomeButton containerClassName="w-full flex justify-center mt-8" />
  </div>
);

export default Error;
