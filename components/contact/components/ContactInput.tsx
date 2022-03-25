import React, { useState } from "react";

function ContactInput({ placeholder, inputType, fieldType }: any) {
  const [first, setfirst] = useState("");
  return (
    <div className="w-full relative">
      <input
        value={first}
        onChange={(e) => setfirst(e.target.value)}
        type={inputType}
        className="peer focus:"
        autoComplete={fieldType}
        required={true}
        placeholder={placeholder}
      />
      <label htmlFor={inputType}>{placeholder}</label>
    </div>
  );
}

export default ContactInput;
