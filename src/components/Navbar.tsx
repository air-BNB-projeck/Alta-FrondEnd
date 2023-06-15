import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-cyan-600 w-screen">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl text-black border-x-8">Air BNB</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="data:image/png;base64,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" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">Profile</a>
              </li>
              <li>
                <a>Sewakan</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
