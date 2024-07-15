const HomePage = () => {
  return (
    <div className='flex justify-center items-center flex-1'>
      <div className='grid grid-cols-2 max-w-3xl gap-10'>
        <div className='flex flex-col gap-4'>
          <div>
            <h4 className='font-semibold opacity-50'>
              Hi! Nama saya iqbal farhan syuhada
            </h4>
            <h1 className='font-bold text-4xl'>Product Designer</h1>
          </div>
          <p className='line-clamp-4'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
            veritatis atque exercitationem fugiat numquam, esse, dolore ipsa
            voluptatem ipsam porro dolorum aut similique ratione cupiditate
            magni fugit ipsum cumque quos?
          </p>

          <div>
            <button className='btn btn-neutral'>Get Started</button>
          </div>

          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro atque
            sit explicabo unde ea
          </small>
        </div>
        <div className='flex justify-center items-center'>
          <img src='netflix.svg' alt='' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
