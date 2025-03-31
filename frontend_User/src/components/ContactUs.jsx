import { useEffect, useState } from "react";
import { client } from "../utils/sanity/client";

export default function Contact() {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        '*[_type == "contact"][0]{image, title, phone, email, branches}'
      );
      setContact(data);
    };
    fetchData();
  }, []);

  if (!contact) return <p>Loading...</p>;
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-10 transition-colors pt-20 duration-300 bg-white text-black dark:bg-black dark:text-white">
      <h1 className="text-3xl md:text-4xl font-bold text-t3_blue mb-6 uppercase">
        CONTACT US
      </h1>
      <div className="w-full max-w-3xl bg-white dark:bg-black text-black dark:text-white p-6 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700">
        <p className="sm:text-2xl text-xl text-white font-semibold mb-4">
          {contact.title}
        </p>
        <p className="text-lg">
          📞{" "}
          <a href={`tel:${contact.phone}`} className="text-t3_blue font-medium">
            {contact.phone}
          </a>{" "}
          (WhatsApp & Calls)
        </p>
        <p className="text-lg">
          📧{" "}
          <a
            href={`mailto:${contact.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-t3_blue font-medium"
          >
            {contact.email}
          </a>
        </p>

        <div className="w-full max-w-3xl mt-8 grid md:gap-6 gap-4 md:grid-cols-2 grid-cols-1">
          {contact.branches.map((branch, index) => (
            <div
              key={index}
              className="bg-white w-full h-full hover:bottom-1 relative transition-all hover:shadow-lg hover:dark:shadow-gray-500 duration-400 cursor-pointer dark:bg-black text-black dark:text-white p-6 rounded-xl shadow-md border border-gray-300 dark:border-gray-700"
            >
              <p className="sm:text-2xl text-xl text-white font-semibold mb-2">
                {branch.name}
              </p>
              <p className="sm:text-lg text-base">📍 {branch.addressLine1}</p>
              <p className="sm:text-lg text-base">{branch.addressLine2}</p>
              <p className="sm:text-lg text-base">{branch.addressLine3}</p>
              <p className="sm:text-lg text-base">
                📞{" "}
                <a
                  href={`tel:${branch.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-t3_blue font-medium"
                >
                  {branch.phone}
                </a>{" "}
                (WhatsApp)
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
