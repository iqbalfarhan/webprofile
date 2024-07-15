import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='flex justify-center items-center flex-1'>
      <div className='grid grid-cols-2 max-w-3xl gap-10'>
        <div className='flex justify-center items-center'>
          <img src='search.svg' alt='' />
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <h4 className='font-semibold opacity-50'>
              Sepertinya kau butuh bantuan
            </h4>
            <h1 className='font-bold text-4xl'>Kemari</h1>
          </div>
          <p className='line-clamp-3'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            veritatis atque exercitationem fugiat numquam, esse, dolore ipsa
            voluptatem ipsam porro dolorum aut similique ratione cupiditate
            magni fugit ipsum cumque quos?
          </p>

          <div>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>What is your name?</span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Email address</span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
            </label>
            <label className='form-control w-full'>
              <div className='label'>
                <span className='label-text'>Message</span>
              </div>
              <input
                type='text'
                placeholder='Type here'
                className='input input-bordered w-full'
              />
            </label>
          </div>

          <div className='space-x-2'>
            <button className='btn btn-neutral'>Submit</button>
            <Link to={'/schedule'} className='btn btn-outline'>
              Schedule a Meeting
            </Link>
          </div>

          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque
            sit explicabo unde ea
          </small>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
