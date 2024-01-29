import React from "react";

function Footer() {
  return (
    <>
      <div className="bg-black text-white flex items-start justify-evenly">
        <div className="mt-10">
          <h3 className="font-black text-3xl"> Swiggy Limited</h3>
          <div className="text-zinc-400">
            <a href="/about" className="text-xl mt-3 block">
              About
            </a>
            <a href="/careers" className="text-xl mt-3 block">
              Careers
            </a>
            <a href="/team" className="text-xl mt-3 block">
              Team
            </a>
            <a href="/swiggy-one" className="text-xl mt-3 block">
              Swiggy One
            </a>
            <a href="/instamart" className="text-xl mt-3 block">
              Swiggy Instamart
            </a>
            <a href="/genie" className="text-xl mt-3 block">
              Swiggy Genie
            </a>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-black text-3xl">Company</h3>
          <div className="text-zinc-400">
            <a href="/help-support" className="text-xl mt-3 block">
              Help & Support
            </a>
            <a href="/partner" className="text-xl mt-3 block">
              Partner with Us
            </a>
            <a href="/ride" className="text-xl mt-3 block">
              Ride with Us
            </a>
          </div>
        </div>
        <div>
          <div className="mt-10">
            <h3 className="font-black text-3xl">Legal</h3>
            <div className="text-zinc-400">
              <a href="/terms" className="text-xl mt-3 block">
                Terms & Condition
              </a>
              <a href="/cookie-policy" className="text-xl mt-3 block">
                Cookie Policy
              </a>
              <a href="/privacy-policy" className="text-xl mt-3 block">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="font-black text-3xl">We Deliver to</h3>
          <div className="text-zinc-400">
            <a href="/bangalore" className="text-xl mt-3 block">
              Bangalore
            </a>
            <a href="/gurgaon" className="text-xl mt-3 block">
              Gurgaon
            </a>
            <a href="/hyderabad" className="text-xl mt-3 block">
              Hyderabad
            </a>
            <a href="/delhi" className="text-xl mt-3 block">
              Delhi
            </a>
            <a href="/mumbai" className="text-xl mt-3 block">
              Mumbai
            </a>
            <a href="/kochi" className="text-xl mt-3 block">
              Kochi
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
