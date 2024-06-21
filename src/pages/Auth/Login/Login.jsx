import img from "../../../assets/auth/login.jpg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import useAuth from "./../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import Google from "../Google/Google";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log("Login data:", data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Login SuccessFully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <div className="bg-base-300 hero min-h-screen pt-28">
      <div className="hero-content flex-col lg:flex-row">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 w-4/5 md:mr-12"
        >
          <img className="rounded-3xl" src={img} alt="image" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <span>Admin: admin@gmail.com Pass: 123456</span>
            <span>Seller: seller@gmail.com Pass: 123456</span>
            <span>User: user@gmail.com Pass: 123456</span>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.email?.type === "required" && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  {...register("password", { required: true })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {error && <p className="text-red-600">{error}</p>}
                <p className="text-center my-3">
                  New to user ?{" "}
                  <Link className="text-orange-600 font-bold" to="/register">
                    Registration
                  </Link>{" "}
                </p>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
            <Google />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
