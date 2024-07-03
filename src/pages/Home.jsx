import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='flex items-center justify-center'>
      <div className='w-full h-full max-w-5xl mx-auto flex items-center justify-center my-auto'>
        <div className='w-full'>
          <h3 className='text-4xl font-bold text-center py-6'>
            Welcome to Waqq.ly
          </h3>
          <h3 className='text-lg font-[500] text-center py-4'>
            At Waqq.ly, we connect loving pet owners with reliable, experienced
            dog walkers. Whether you're looking to ensure your furry friend gets
            the exercise and attention they need or you're a passionate dog
            walker seeking rewarding opportunities, Waqq.ly is the place for
            you.
          </h3>
          <h3 className='text-lg font-[500] text-center py-4'>
            For Pet Owners: Register your pets quickly and easily. Browse
            profiles of vetted dog walkers, read reviews, and choose the perfect
            match for your pet's needs.
          </h3>
          <h3 className='text-lg font-[500] text-center py-4'>
            For Dog Walkers: Join our community of trusted walkers. Create a
            profile, showcase your experience, and find flexible jobs that fit
            your schedule.
          </h3>
          <h3 className='text-lg font-[500] text-center py-4'>
            Join Waqq.ly today and give your pets the care they deserve, or turn
            your passion for pets into a fulfilling job!
          </h3>
        </div>
      </div>
    </div>
  );
};
