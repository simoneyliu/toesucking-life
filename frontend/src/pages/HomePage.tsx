import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="bg-black text-gray-300 min-h-screen">
      {/* Sticky Navbar */}
      <nav className="bg-black fixed w-full top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-pink-600 font-bold text-2xl">
            ToeSucking.Life
          </div>
          <ul className="hidden md:flex space-x-6 text-gray-300">
            <li>
              <a
                href="/"
                className="hover:text-pink-500 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/explore"
                className="hover:text-pink-500 transition duration-300"
              >
                Explore
              </a>
            </li>
            <li>
              <a
                href="/premium"
                className="hover:text-pink-500 transition duration-300"
              >
                Premium Content
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-pink-500 transition duration-300"
              >
                Login
              </a>
            </li>
            <li>
              <a
                href="/signup"
                className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg transition duration-300"
              >
                Sign Up
              </a>
            </li>
          </ul>

          {/* Mobile Menu */}
          <div className="md:hidden text-gray-300">
            <button>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="bg-cover bg-center h-screen flex items-center justify-center relative"
        style={{
          backgroundImage:
            "url('https://example.com/mysterious-sexy-background.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold text-pink-600 mb-6 drop-shadow-lg">
            Indulge in ToeSucking.Life
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">
            Exclusive content, seductive experiences, and all for your eyes
            only.
          </p>
          <a
            href="/explore"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Explore Your Desires
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-100">
            Unlock Your Fantasies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-black p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Exclusive Content
              </h3>
              <p className="text-gray-400">
                Sensual videos and photos from your favorite creators. Hidden,
                until you want to indulge.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Support Your Desires
              </h3>
              <p className="text-gray-400">
                Tip and subscribe to access deeper, more intimate experiences
                curated just for you.
              </p>
            </div>
            <div className="bg-black p-8 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300">
              <h3 className="text-2xl font-semibold mb-4 text-pink-500">
                Safe and Private
              </h3>
              <p className="text-gray-400">
                We ensure your deepest desires remain hidden and secure, for
                only you and your favorite creators to share.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Teaser Section */}
      <section className="py-16 bg-black text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">
          Unlock Premium Content
        </h2>
        <p className="text-lg md:text-xl text-gray-400 mb-8">
          Want more? Upgrade to unlock exclusive videos and behind-the-scenes
          seduction from your favorite creators.
        </p>
        <a
          href="/premium"
          className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-lg font-semibold transition duration-300 shadow-lg"
        >
          Access Premium Desires
        </a>
      </section>

      {/* Sexy Feet Posts Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-pink-600 mb-12">
            Explore Sexy Feet Posts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Post 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1578641915798-950f58b9499c?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sexy Feet 1"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-500"></h3>
                <p className="text-gray-400 text-sm mt-2">
                  That girl has pretty good legs and feet, eh?
                </p>
              </div>
              <div className="p-4 flex justify-between items-center">
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-heart"></i> 120 Likes
                </button>
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-comment"></i> 34 Comments
                </button>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579068310805-338fa88c42ff?q=80&w=2948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sexy Feet 2"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-500"></h3>
                <p className="text-gray-400 text-sm mt-2">
                  Stockings, Cuffs, Fishnet
                </p>
              </div>
              <div className="p-4 flex justify-between items-center">
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-heart"></i> 250 Likes
                </button>
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-comment"></i> 58 Comments
                </button>
              </div>
            </div>

            {/* Post 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1579006415735-7b1277e6ab26?q=80&w=2786&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sexy Feet 3"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-pink-500"></h3>
                <p className="text-gray-400 text-sm mt-2">
                  One leg is cuffed, the other is free. Which one suits her
                  more?
                </p>
              </div>
              <div className="p-4 flex justify-between items-center">
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-heart"></i> 340 Likes
                </button>
                <button className="text-pink-500 hover:text-pink-600 transition duration-300">
                  <i className="fas fa-comment"></i> 75 Comments
                </button>
              </div>
            </div>

            {/* Add more posts as necessary */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-6 text-gray-400 text-center">
        <p>
          &copy; {new Date().getFullYear()} ToeSucking.Life. All Rights
          Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
