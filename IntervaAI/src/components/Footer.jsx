import { ChevronUp, MailIcon, MapPin, PhoneForwarded } from "lucide-react";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col mt-20 h-100vh bg-black border">
      <div className="flex justify-around my-auto p-10">
        <div className="text-white flex flex-col gap-5 w-100">
          <h1 className="font-bold text-4xl">Interva.ai</h1>
          <p className="flex gap-2">
            <MapPin />
            1800, Walt Disney World, Bay Lake, Orlando United States
          </p>
          <p className="flex gap-2">
            <MailIcon />
            support@intervaai.com
          </p>
          <p className="flex gap-2">
            <PhoneForwarded />
            (+91) 987654321
          </p>
        </div>

        <div className="text-white flex flex-col">
          <h4 className="text-2xl font-semibold mb-5">Company</h4>
          <ul className="text-md list-none font-light flex flex-col gap-2">
            <li>Contact Us</li>
            <li>Blog</li>
            <li>Pricing</li>
            <li>Sign Up/Sign in</li>
          </ul>
        </div>

        <div className="text-white">
          <h4 className="text-2xl font-semibold mb-5">Quick Navigation</h4>
          <ul className="text-md list-none font-light flex flex-col gap-2">
            <li>Home</li>
            <li>Career Preparation</li>
            <li>Learn & Grow</li>
          </ul>
        </div>

        <div className="text-white">
          <h4 className="text-2xl font-semibold mb-5">Tools</h4>
          <ul className="text-md list-none font-light flex flex-col gap-2">
            <li>Career Vault</li>
            <li>The prep Engine</li>
            <li>Mock Interview</li>
            <li>Smart Career Coach</li>
            <li>Questions Hub</li>
          </ul>
        </div>
      </div>

      <hr className="text-white" />

      <div className="flex text-white mx-10 justify-between mt-5">
        <div>&copy; 2026 Intervaai. All rights reserved.</div>
        <a href="#hero" className="flex gap-2">
          Back to the top <ChevronUp />
        </a>
      </div>

      <div className="text-[10rem] text-center font-black opacity-10 text-white">
        INTERVA.AI
      </div>
    </footer>
  );
}

export default Footer;
