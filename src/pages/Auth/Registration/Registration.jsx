import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import img from "../../../assets/auth/register.jpg";
import { motion } from "framer-motion";
import useAuth from "./../../../hooks/useAuth";

const Registration = () => {
  const [match, setMatch] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    if (data.password === data.confirmPassword) {
      console.log("Passwords match");
      setMatch("");
    } else {
      setMatch("Passwords do not match");
      return;
    }
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);

      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          const saveUser = {
            name: data.name,
            email: data.email,
            role: "user",
          };
          fetch(`https://buy-sell-point-server.vercel.app/users`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(saveUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                Swal.fire({
                  title: "SignUp SuccessFully",
                  position: "center",
                  icon: "success",
                  showConfirmButton: false,
                  timer: 1500,
                });
                navigate("/");
              }
            });
        })
        .catch((err) => console.log(err));
    });
  };

  return (
    <div className="bg-base-300 hero min-h-screen pt-28">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="md:w-1/2 w-4/5 md:mr-12"
        >
          <img src={img} alt="image" />
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
        >
          <div className="card-body">
            <h1 className="text-3xl text-center font-bold">Registration</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  name="name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered"
                  name="email"
                  {...register("email", { required: true })}
                />
                {errors.name && (
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
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                  })}
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-600">Password is required</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-600">Password must be 6 characters</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="confirm password"
                  name="confirmPassword"
                  className="input input-bordered"
                  {...register("confirmPassword", {
                    required: true,
                  })}
                />
                {match && (
                  <p className="text-red-600">Passwords do not match</p>
                )}
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL Link"
                  className="input input-bordered"
                  name="photoURL"
                  {...register("photoURL", { required: true })}
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
              <div className="form-control">
                <p className="my-3 text-center">
                  Already have an account ?{" "}
                  <Link className="text-orange-600 font-bold" to="/login">
                    Login
                  </Link>
                </p>
              </div>
              <div className="form-control">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Register"
                />
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Registration;
