"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useSearchParams } from "next/navigation";
function AuthComponent({ settings } : { settings?:any }) {
  const pathname = usePathname();
  const [tab,setTab] = useState('login')




  if (tab === ("login")) {
    return <LoginForm />;
  }

  if (tab === ("register")) {
    return <SignUpForm  />;
  }
  return <>
  <div className="text-white z-50 relative">
    <div onClick={(() => setTab('login'))}>
LOGIN
    </div>
    <div onClick={(() => setTab('register'))}>
REGISTER
</div>
  </div>
  </>;
}

export default AuthComponent;

const LoginForm = () => {
  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 w-screen ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/" className="flex items-center p-8">
         
        </Link>
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-zinc-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="/auth/login"
              method="post"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  //  onChange={(e) => setEmail(e.target.value)}
                  //  value={email}
                  id="email"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-md focus:ring-teal-900 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-800 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-teal-900 dark:focus:border-teal-900"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  //  onChange={(e) => setPassword(e.target.value)}
                  //  value={password}
                  placeholder="••••••••"
                  className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-md focus:ring-teal-900 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-800 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-teal-900 dark:focus:border-teal-900"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-zinc-300 rounded bg-zinc-50 focus:ring-3 focus:ring-primary-300 dark:bg-zinc-700 dark:border-zinc-800 dark:focus:ring-teal-900 dark:ring-offset-zinc-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-zinc-500 dark:text-zinc-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <a
                  href="#"
                  className="text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </a>
              </div>
              <button
                formAction={"/auth/login"}
                //  onClick={() =>signInWithEmail(email, password)}
                type="submit"
                className="w-full text-white font-semibold bg-teal-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-teal-900  rounded-md text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/register"
                  className="font-medium text-zinc-800 dark:text-zinc-300 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const SignUpForm = () => {
  // const pathname = usePathname()
  const params = useSearchParams().toString();
  console.log(params);
    return (
      <React.Fragment>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link href="/" className="flex items-center p-8">
     
          </Link>
          <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-zinc-800">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-zinc-900 md:text-2xl dark:text-white">
                Register a new account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="/auth/sign-up"
                method="post"
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    //  onChange={(e) => setEmail(e.target.value)}
                    //  value={email}
                    id="email"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-md focus:ring-teal-900 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-800 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-teal-900 dark:focus:border-teal-900"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-zinc-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    //  onChange={(e) => setPassword(e.target.value)}
                    //  value={password}
                    placeholder="••••••••"
                    className="bg-zinc-50 border border-zinc-300 text-zinc-900 sm:text-sm rounded-md focus:ring-teal-900 focus:border-zinc-800 block w-full p-2.5 dark:bg-zinc-700 dark:border-zinc-800 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-teal-900 dark:focus:border-teal-900"
                    required
                  />
                </div>

                <button
                  formAction="/auth/sign-up"
                  type="submit"
                  className="w-full text-white font-semibold bg-teal-950 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-md text-sm px-5 py-2.5 text-center "
                >
                  Sign Up
                </button>
                <p className="text-sm font-light text-zinc-500 dark:text-zinc-400">
                  Already have an account?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-zinc-800 dark:text-zinc-300 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  };
  const renderConfirmForm = () => {
    return (
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-md shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-black dark:border-zinc-800">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-full">
            <p className="text-base font-semibold leading-tight text-center tracking-tight text-zinc-900 md:text-lg dark:text-white">
              Please check your inbox and confirm your email.
            </p>
          </div>
        </div>
      </div>
    );
  };



