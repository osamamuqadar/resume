// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqn7PUlhGehvGbZkYfQ7NgQEcNB1SJ91E",
    authDomain: "osammuqadar.firebaseapp.com",
    projectId: "osammuqadar",
    storageBucket: "osammuqadar.appspot.com",
    messagingSenderId: "1012126953979",
    appId: "1:1012126953979:web:408e0e30a93cd38391db5e",
    measurementId: "G-533Z3NV76G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Contact() {
  const currentDate = new Date();

  // Get individual components
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Format the date and time
  const formattedDateTime = `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hours < 10 ? "0" + hours : hours}:${
    minutes < 10 ? "0" + minutes : minutes
  }:${seconds < 10 ? "0" + seconds : seconds}`;

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    date: formattedDateTime,
  });

  const [result, setResult] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [career, setCareer] = useState(false);
  useEffect(() => {
    // Get the URLSearchParams object
    const urlSearchParams = new URLSearchParams(window.location.search);

    // Get the value of the 'career' parameter
    const isCareerQuery = urlSearchParams.get("career") === "true";

    // If 'career' is true, update the formData state
    if (isCareerQuery) {
      setCareer(true);
      setFormData((prevData) => ({
        ...prevData,
        career: true,
        job_title: "Sales Executive",
      }));
    }
  }, [window.location]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contacts"), formData);
      if (docRef) setResult(true);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      setResult(false);
      console.error("Error adding document: ", e);
    }
  };

  return (
    <>
      <main className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-lg mx-auto space-y-3 sm:text-center">
            <h3 className="text-green-800 font-semibold">Contact</h3>
            <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Get in touch
            </p>
            <p>We’d love to hear from you! Please fill out the form bellow.</p>
          </div>
          <div className="mt-12 max-w-lg mx-auto">
            {result === false && (
              <form onSubmit={handleSubmit} className="space-y-5">
                {career === true && (
                  <div className="pb-2">
                    You are applying for <b>Sales Executive</b> Position.
                  </div>
                )}
                <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
                  <div>
                    <label className="font-medium">First name</label>
                    <input
                      type="text"
                      name="firstName"
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange(e)}
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                    />
                  </div>
                  <div>
                    <label className="font-medium">Last name</label>
                    <input
                      value={formData.lastName}
                      onChange={(e) => handleChange(e)}
                      name="lastName"
                      id="lastName"
                      type="text"
                      required
                      className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Email</label>
                  <input
                    value={formData.email}
                    onChange={(e) => handleChange(e)}
                    name="email"
                    id="email"
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  />
                </div>
                <div>
                  <label className="font-medium">Phone number</label>
                  <div className="relative mt-2">
                    <input
                      value={formData.phoneNumber}
                      onChange={(e) => handleChange(e)}
                      name="phoneNumber"
                      id="phoneNumber"
                      type="number"
                      required
                      className="w-full pl-2 pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange(e)}
                    name="message"
                    id="message"
                    required
                    className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-green-600 shadow-sm rounded-lg"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-white font-medium bg-green-700 hover:bg-green-800 active:bg-green-900 rounded-full duration-150"
                >
                  Submit
                </button>
              </form>
            )}
            {result === true && (
              <>
                <div className="text-center">
                  <h1>Form Submitted Successfully.</h1>
                </div>
              </>
            )}
          </div>
        </div>
      </main>

      <div className="text-center max-w-screen-2xl m-auto">
        <div className="hidden md:inline-block">
          <iframe
            title="Markhor Marketing & Developer"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.805834458791!2d71.47952992633952!3d33.971829771971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d917ab100b4d5b%3A0x27bb12f47b164794!2sMarkhor%20Marketing%20%26%20Developers!5e0!3m2!1sen!2s!4v1702710988711!5m2!1sen!2s"
            width="600"
            className="!border"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </>
  );
}
