import React from "react";

function ContactTextArea({ placeholder }: any) {
  return (
    <div className="w-full relative">
      <textarea className="peer h-96 pt-2 px-1" placeholder={placeholder} />
      <label>{placeholder}</label>
    </div>
  );
}

export default ContactTextArea;
