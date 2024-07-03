import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Main = () => {
  return (
    <>
      <section className='main-section'>
        <div className='flex w-full'>
          <div className='flex flex-col w-full h-screen overflow-y-auto'>
            <Navbar />
            <div className='sidebar-content p-4 w-full h-full overflow-y-auto'>
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
