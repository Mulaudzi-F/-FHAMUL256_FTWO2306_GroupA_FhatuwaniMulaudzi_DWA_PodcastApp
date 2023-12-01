import React from "react";

export default function Authentication(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    isAuthenticated,
    setIsAuthenticated,
  } = props;

  function handleSubmit() {
    if (email && password) {
      setIsAuthenticated(true);
    }
  }
  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <form
          className="w-full md:w-1/2 h-3/4 bg-gray-300 flex flex-col text-center justify-center leading-48 p-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="mt-8 md:mt-12">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="py-2 md:py-4 px-4 md:px-10 mt-2 md:mt-6"
            />
          </div>

          <div className="mt-4 md:mt-8">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 md:mt-10 py-2 md:py-4 px-4 md:px-10"
            />
          </div>

          <button
            className="bg-stone-400 rounded-sm p-2 md:p-4 px-4 md:px-9 mt-4 md:mt-5 bg-amber-200"
            type="submit"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}
