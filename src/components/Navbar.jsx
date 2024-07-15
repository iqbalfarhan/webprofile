import { User2 } from 'lucide-react';
import { NotebookTabs } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100 shadow-sm'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Iqbalfarhan</a>
      </div>
      <div className='flex-none'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <NavLink to={'/'}>
              <User2 size={18} />
              <span>Profile</span>
            </NavLink>
          </li>
          <li>
            <NavLink to={'/contact'}>
              <NotebookTabs size={18} />
              <span>Kontak</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
