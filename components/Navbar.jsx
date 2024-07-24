"use client";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);
  //console.log("Session:", session);
  return (
    <nav className="flex justify-between items-center w-full mb-16 pt-3">
      <Link href="/" className="flex-center gap-2">
        <Image
          src="/assets/images/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          className="object-contain "
        />
        <p className="logo-text">PromptVault</p>
      </Link>
      {/* Desktop Navigation */}
      {session?.user ? (
        <div className="hidden sm:flex gap-3 md:gap-5">
          <Link href="/create-prompt" className="black-btn">
            Create Post
          </Link>
          <button type="button" onClick={signOut} className="outline-btn">
            Sign Out
          </button>
          <Link href="/profile">
            <Image
              src={Object(session)?.user.image}
              alt="img"
              width={37}
              height={37}
              className="rounded-full "
            />
          </Link>
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className="black-btn"
              >
                Sign In
              </button>
            ))}
        </>
      )}

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src="/assets/images/logo.svg"
              alt="profile"
              width={37}
              height={37}
              className="rounded-full"
              onClick={() => setToggle((prev) => !prev)}
            />
            {toggle && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown-link"
                  onClick={() => setToggle(false)}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown-link"
                  onClick={() => setToggle(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggle(false), signOut();
                  }}
                  className="mt-5 w-full black-btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
