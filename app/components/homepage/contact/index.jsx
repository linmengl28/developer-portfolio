// // @flow strict
// @flow strict
import { personalData } from '@/utils/data/personal-data';
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGithub, IoMdCall } from "react-icons/io";
import { MdAlternateEmail } from "react-icons/md";

function ContactSection() {
  return (
    <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
        <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
          CONTACT
        </span>
        <span className="h-36 w-[2px] bg-[#1a1443]"></span>
      </div>
      <div className="flex justify-center">
        <div className="w-full lg:w-3/4">
          <div className="mb-8">
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Get In Touch</p>
            <p className="text-sm text-[#d3d8e8] mb-6">
              {"If you have any questions or would like to discuss potential opportunities, feel free to reach out to me through any of the following channels:"}
            </p>
          </div>
          
          <div className="flex flex-col gap-5 lg:gap-9">
            <p className="text-sm md:text-xl flex items-center gap-3">
              <MdAlternateEmail
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <a href={`mailto:${personalData.email}`} className="hover:text-[#16f2b3] transition-colors duration-300">
                {personalData.email}
              </a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <IoMdCall
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <a href={`tel:${personalData.phone.replace(/\D/g, '')}`} className="hover:text-[#16f2b3] transition-colors duration-300">
                {personalData.phone}
              </a>
            </p>
            <p className="text-sm md:text-xl flex items-center gap-3">
              <CiLocationOn
                className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={36}
              />
              <span>
                {personalData.address}
              </span>
            </p>
          </div>
          
          <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
            <Link target="_blank" href={personalData.github}>
              <IoLogoGithub
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            <Link target="_blank" href={personalData.linkedIn}>
              <BiLogoLinkedin
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link>
            {/* Uncomment if you want to add these social links */}
            {/* <Link target="_blank" href={personalData.twitter}>
              <FaXTwitter
                className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
                size={48}
              />
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
// import { personalData } from '@/utils/data/personal-data';
// import Link from 'next/link';
// import { BiLogoLinkedin } from "react-icons/bi";
// import { CiLocationOn } from "react-icons/ci";
// import { FaFacebook, FaStackOverflow } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
// import { IoLogoGithub, IoMdCall } from "react-icons/io";
// import { MdAlternateEmail } from "react-icons/md";
// import ContactForm from './contact-form';

// function ContactSection() {
//   return (
//     <div id="contact" className="my-12 lg:my-16 relative mt-24 text-white">
//       <div className="hidden lg:flex flex-col items-center absolute top-24 -right-8">
//         <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
//           CONTACT
//         </span>
//         <span className="h-36 w-[2px] bg-[#1a1443]"></span>
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
//         <ContactForm />
//         <div className="lg:w-3/4 ">
//           <div className="flex flex-col gap-5 lg:gap-9">
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <MdAlternateEmail
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>{personalData.email}</span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <IoMdCall
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.phone}
//               </span>
//             </p>
//             <p className="text-sm md:text-xl flex items-center gap-3">
//               <CiLocationOn
//                 className="bg-[#8b98a5] p-2 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={36}
//               />
//               <span>
//                 {personalData.address}
//               </span>
//             </p>
//           </div>
//           <div className="mt-8 lg:mt-16 flex items-center gap-5 lg:gap-10">
//             <Link target="_blank" href={personalData.github}>
//               <IoLogoGithub
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             <Link target="_blank" href={personalData.linkedIn}>
//               <BiLogoLinkedin
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link>
//             {/* <Link target="_blank" href={personalData.twitter}>
//               <FaXTwitter
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//             {/* <Link target="_blank" href={personalData.stackOverflow}>
//               <FaStackOverflow
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//             {/* <Link target="_blank" href={personalData.facebook}>
//               <FaFacebook
//                 className="bg-[#8b98a5] p-3 rounded-full hover:bg-[#16f2b3] hover:scale-110 transition-all duration-300 text-gray-800 cursor-pointer"
//                 size={48}
//               />
//             </Link> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactSection;