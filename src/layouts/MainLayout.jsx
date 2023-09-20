import { Spinner } from 'flowbite-react';
import { NavLink, Outlet, useNavigation } from 'react-router-dom';

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div>
      <section className="flex justify-between px-10 shadow-md py-7">
        <div>
          <h1 className="text-2xl font-bold">
            A<span className="text-[#FF9900]">maz</span>on
          </h1>
        </div>
        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'bg-green-400 text-white' : ''
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'bg-green-400 text-white' : ''
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'bg-green-400 text-white' : ''
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? 'pending' : isActive ? 'bg-green-400 text-white' : ''
            }
          >
            About
          </NavLink>
        </nav>
      </section>

      {navigation.state === 'loading' ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen p-6 max-w-[1440px] mx-auto">
          <Outlet></Outlet>
        </div>
      )}

      <footer className="flex justify-between bg-slate-800 text-white px-10 py-7 shadow-md mt-6">
        <aside className="items-center grid-flow-col">
          <p>Copyright © 2023 - All right reserved</p>
        </aside>
        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </footer>
    </div>
  );
};

export default MainLayout;
