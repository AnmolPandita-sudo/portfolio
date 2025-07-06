"use client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:anmol.ap12@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="contactme"
      className="h-screen flex relative overflow-hidden flex-col text-white text-center md:flex-row max-w-full px-10 justify-evenly items-center "
    >
      <h3 className="absolute top-24 uppercase tracking-[10px] md:tracking-[15px] text-gray-500 text-xl md:text-2xl">
        {"Let's Connect"}
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-10 sm:mt-10 md:mt-5 xl:mt-20">
        <h4 className="text-xl lg:text-2xl 2xl:text-3xl font-semibold text-center md:mt-4">
          I have got just what you need.{" "}
          <span className="decoration-accent-600/50 underline">Lets talk.</span>
        </h4>

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-accent-600 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+919796657649</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-accent-600 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              anmol.ap12@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-accent-600 h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">Jammu & Kashmir</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col space-y-2 md:w-fit mx-auto "
        >
          <div className="flex md:flex-row flex-col md:space-y-0 space-y-2 md:space-x-2">
            <input
              {...register("name")}
              placeholder="Name"
              className="contactInput text-center"
              type="text"
            />
            <input
              {...register("email")}
              placeholder="Email"
              className="contactInput text-center"
              type="email"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="contactInput text-center"
            type="text"
          />
          <textarea
            {...register("message")}
            placeholder="Message"
            className="contactInput text-center"
          />
          <button className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-sans">
            {" "}
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  );
}