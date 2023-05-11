import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <footer className="text-center py-3  text-white bg-[#252525] mx-auto max-w-[28rem]">
      &copy; {date} #VANSLIFE{" "}
    </footer>
  );
}

export default Footer;
