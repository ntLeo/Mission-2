import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { HiBars3 } from "react-icons/hi2";
import { motion } from "framer-motion";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <motion.header
    // FRAMER MOTION ANIMATION
    initial={{ y: -100,  opacity: 0 }}
    transition={{ delay: 0.2 }}
    animate={{ y: 0,  opacity: 1 }}
    >
      <div className="flex text-center justify-between w-full px-2 bg-slate-100/80  shadow-md ">
        <h1 className="pt-[0.2rem] ml-5 font-semibold text-gray-800 text-2xl">TurnersCars</h1>
        <div className="flex">
          <ul className="flex text-lg text-gray-800 gap-6 pt-[0.4rem] cursor-pointer ">
            <li className="hover:text-gray-600">Sign in</li>
            <li className="hover:text-gray-600">Contact us</li>
          </ul>
          <Menu as="div" className="relative inline-block text-left mx-5">
            <div>
              <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white/0 p-2 text-2xl  hover:scale-110 active:scale-105 transition-all">
                <HiBars3 className="text-[1.8rem]" />
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-50 bg-opacity-80 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none backdrop-blur-[0,5rem] ">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Account settings
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Support
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-gray-900"
                            : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        License
                      </a>
                    )}
                  </Menu.Item>
                  <form method="POST" action="#">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="submit"
                          className={classNames(
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "block w-full px-4 py-2 text-left text-sm"
                          )}
                        >
                          Sign out
                        </button>
                      )}
                    </Menu.Item>
                  </form>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </motion.header>
  );
};
export default Header;
