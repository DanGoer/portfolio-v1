import React from "react";

function ContactInput({ placeholder }: any) {
  return (
    <div className="w-full relative">
      <input
        type="text"
        name="name"
        id="name"
        className="peer"
        autoComplete="name"
        required={true}
        placeholder={placeholder}
      />
      <label htmlFor="email">{placeholder}</label>
    </div>
  );
}

export default ContactInput;
