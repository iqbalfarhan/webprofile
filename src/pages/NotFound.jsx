import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='w-96 space-y-10 text-center'>
        <img src='/404.svg' alt='' />
        <div className='space-y-4'>
          <h1 className='font-bold text-4xl'>
            Oh tidak, kamu seharusnya tidak melihat ini
          </h1>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            voluptates, iusto.
          </p>
          <Link to={'/'} className='btn btn-neutral'>
            Go back to dashboard
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
