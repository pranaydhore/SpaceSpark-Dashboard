// import { useEffect } from "react";

// const Logout = () => {
//   useEffect(() => {
//     // Clear user data from localStorage
//     localStorage.removeItem("currentUser");

//     // Redirect to frontend home/login page
//     window.location.href = "https://space-spark-frontend.vercel.app/";
//   }, []);

//   return (
//     <div className="container mt-5 text-center">
//       <h3>Logging out...</h3>
//     </div>
//   );
// };

// export default Logout;


import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    // Clear user data from localStorage
    localStorage.removeItem("currentUser");

    // Redirect to frontend home/login page after a short delay
    setTimeout(() => {
      window.location.href = "https://space-spark-frontend.vercel.app/";
    }, 1500); // 1.5 seconds delay
  }, []);

  return (
    <div className="container mt-5 text-center">
      <div className="alert alert-success" role="alert">
        You have been successfully logged out!
      </div>
      <h5>Redirecting to homepage...</h5>
    </div>
  );
};

export default Logout;

