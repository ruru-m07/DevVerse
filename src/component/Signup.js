import React, { useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const Login = (props) => {
  let location = useLocation();
   const [image, setImage] = useState("");
   const [imagecon, setImagecon] = useState("flex");
   const [progress, setProgress] = useState("");

   let navigate = useNavigate();
   const [credentials, setCredentials] = useState({
     name: "",
     lname: "",
     email: "",
     password: "",
     cpassword: "",
   });

   const onChange = (e) => {
     setCredentials({ ...credentials, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
     let host = "http://localhost:3005";
     setProgress("cursor-progress");
     e.preventDefault();
     const responce = await fetch(`${host}/api/auth/createuser`, {
       method: "POST",
       headers: {
         "Content-Type": "application/json",
       },
       body: JSON.stringify({
         name: credentials.name,
         lname: credentials.lname,
         email: credentials.email,
         image: image,
         password: credentials.password,
       }),
     });

     const json = await responce.json();
     // console.log(json);
     if (json.success) {
       // redirect
       localStorage.setItem("token", json.authToken);
       navigate("/");
       window.location.reload();
      //  props.showAlert("Account Created successfully", "success");
     } else {
      console.log("signup faill")
      //  props.showAlert("Invalid Credentials", "danger");
     }
   };

   function convertToBase64(e) {
     // console.log(e);
     var reader = new FileReader();
     reader.readAsDataURL(e.target.files[0]);
     reader.onload = () => {
       console.log(reader.result);
       setImage(reader.result);
       setImagecon("hidden");
     };
     reader.onerror = (error) => {
       console.log("error: ", error);
     };
   }

   const rmimage = () => {
     setImage("");
     setImagecon("flex");
   };



  return (
    // <section className="bg-gray-50 dark:bg-gray-900">
    //   <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    //     <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
    //       <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
    //         <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
    //           Login to account
    //         </h1>
    //         <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
    //           {/* // Email */}
    //           <div>
    //             <label
    //               htmlFor="email"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Your email
    //             </label>
    //             <input
    //               type="email"
    //               name="email"
    //               id="email"
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               placeholder="name@company.com"
    //               value={credentials.email}
    //               onChange={onChange}
    //               minLength={5}
    //               required
    //             />
    //           </div>
    //           <div>
    //             <label
    //               htmlFor="password"
    //               className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    //             >
    //               Password
    //             </label>
    //             <input
    //               type="password"
    //               name="password"
    //               id="password"
    //               placeholder="••••••••"
    //               value={credentials.password}
    //               onChange={onChange}
    //               minLength={8}
    //               className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    //               required
    //             />
    //           </div>
    //           <button
    //             type="submit"
    //             className={`${progress} w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
    //           >
    //             Login
    //           </button>
    //           <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //             Don't have an account?{" "}
    //             <Link
    //               to="/signup"
    //               className="font-medium text-primary-600 hover:underline dark:text-primary-500"
    //             >
    //               Signup here
    //             </Link>
    //           </p>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section class="bg-white dark:bg-gray-900">
      <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
        <form class="w-full max-w-md" onSubmit={handleSubmit}>
          <div class="flex justify-center mx-auto">
            <img
              class="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <div class="flex items-center justify-center mt-6">
            <Link
              to="/login"
              class={`${
                location.pathname === "/login"
                  ? "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                  : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              }`}
            >
              log in
            </Link>
            <Link
              to="/signup"
              class={`${
                location.pathname === "/signup"
                  ? "w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white"
                  : "w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300"
              }`}
            >
              sign up
            </Link>
          </div>

          <div class="relative flex items-center mt-8">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="First name"
              name="name"
              value={credentials.name}
              onChange={onChange}
              minLength={2}
              required
            />

            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>

            <input
              type="text"
              class="block ml-1 w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Last name"
              name="lname"
              value={credentials.lname}
              onChange={onChange}
              minLength={2}
              required
            />
          </div>

          {/* image old plase */}
          <div class="relative flex items-center mt-6">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </span>

            <input
              type="email"
              class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Email address"
              name="email"
              value={credentials.email}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Password"
              name="password"
              value={credentials.password}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <div class="relative flex items-center mt-4">
            <span class="absolute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
            </span>

            <input
              type="password"
              class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Confirm Password"
              name="cpassword"
              value={credentials.cpassword}
              onChange={onChange}
              minLength={8}
              required
            />
          </div>

          <div
            className={` ${imagecon} items-center justify-center w-full mt-6`}
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg
                  className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  PNG, JPGE or JPG (MAX. 400x400px)
                </p>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                onChange={convertToBase64}
              />
            </label>
          </div>
          {image === "" || image === null ? (
            ""
          ) : (
            <div className="flex jc justify-center items-center mt-5  ">
              <img
                className="rounded-full w-32 h-32  "
                width={100}
                height={100}
                alt={image}
                src={image}
              />
              <div className="grid ml-2">
                <button
                  className="m-2 p-2 bg-red-800 text-white font-semibold rounded-lg shadow-md hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
                  onClick={rmimage}
                >
                  romove image
                </button>
              </div>
            </div>
          )}

          <div class="mt-6">
            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
              Sign Up
            </button>

            <div class="mt-6 text-center ">
              <Link
                to="/login"
                class="text-sm text-blue-500 hover:underline dark:text-blue-400"
              >
                Already have an account?
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
