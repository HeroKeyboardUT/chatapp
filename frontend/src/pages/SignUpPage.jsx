import { useState } from "react";
import { ShipWheelIcon } from "lucide-react"; // Adjust the import path as necessary
import { Link } from "react-router"; // Ensure you have react-router-dom installed
import useSignUp from "../hooks/useSignup";
import Logo from "../components/Logo";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { isPending, error, signupMutation } = useSignUp();

  const handleSignup = (e) => {
    e.preventDefault();
    signupMutation(signupData);
  };
  return (
    <div
      className="h-screen flex items-center justify-center p-4 sm:p-6 md:p-8"
      data-theme="forest"
    >
      {/* Form container - LEFT */}
      <div className="border border-primary/25 flex flex-col lg:flex-row w-full max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg overflow-hidden">
        <div className="w-full lg:w-1/2 p-4 sm:p-8 flex flex-col">
          {/* Logo */}
          <Logo />

          {/* Error Message */}
          {error && (
            <div className="alert alert-error shadow-lg mb-4">
              <span className="font-semibold">
                {error.response?.data?.message ||
                  "An error occurred during signup."}
              </span>
            </div>
          )}

          <div className="w-full">
            <form onSubmit={handleSignup}>
              <div className="space-y-4">
                <div>
                  <h2 className="text-xl font-semibold">Create an account</h2>
                  <p className="text-sm opacity-70">
                    Please fill in the details below to create your account.
                  </p>
                </div>

                <div className="space-y-3">
                  {/* Username Input */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">fullName</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your username"
                      className="input input-bordered w-full"
                      value={signupData.fullName}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          fullName: e.target.value,
                        })
                      }
                      required
                    />
                  </div>
                  {/* Email input field */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="input input-bordered w-full"
                      value={signupData.email}
                      onChange={(e) =>
                        setSignupData({ ...signupData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* Password input field */}
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="input input-bordered w-full"
                      value={signupData.password}
                      onChange={(e) =>
                        setSignupData({
                          ...signupData,
                          password: e.target.value,
                        })
                      }
                      required
                    />
                    <p className="text-sm opacity-70 mt-1">
                      Password must be at least 8 characters long.
                    </p>
                  </div>
                  {/* Agreement with term of service..  */}
                  <div className="form-control">
                    <label className="label">
                      <input
                        type="checkbox"
                        className="checkbox checkbox-primary"
                        required
                      />
                      <span className="text-sm leading-tight">
                        I agree to the{" "}
                        <a
                          href="#"
                          className=" text-primary link link-primary hover:underline"
                        >
                          Terms of Service
                        </a>{" "}
                        and{" "}
                        <a
                          href="#"
                          className="text-primary link link-primary hover:underline"
                        >
                          Privacy Policy
                        </a>
                      </span>
                    </label>
                  </div>
                </div>

                <button className="btn btn-primary w-full" type="submit">
                  {isPending ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      Loading...
                    </>
                  ) : (
                    "Create Account"
                  )}
                </button>

                <div className="text-center mt-4">
                  <p className="text-sm ">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-primary link link-primary hover:underline"
                    >
                      Log in here
                    </Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* SIGNUP FORM - RIGHT SIDE */}
        <div className="hidden lg:flex w-full lg:w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8">
            {/* Illustration */}
            <div className="relative aspect-square max-w-sm mx-auto">
              <img
                src="/i.png"
                alt="Language connection illustration"
                className="w-full h-full"
              />
            </div>

            <div className="text-center space-y-3 mt-6">
              <h2 className="text-xl font-semibold">
                Connect with language partners worldwide
              </h2>
              <p className="opacity-70">
                Practice conversations, make friends, and improve your language
                skills together
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div>HieuDepTrai</div>
  );
};

export default SignUpPage;
