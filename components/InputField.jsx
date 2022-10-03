import React from "react";

const InputField = ({ name, label, type, formDetails, handleChange }) => {
  return (
    <div>
      <label className="text-primary font-semibold">{label}</label>
      <input
        type={type || "text"}
        name={name}
        value={formDetails[name]}
        onChange={handleChange}
        className="p-4 mt-3 rounded-lg w-full bg-[#f2f2f2] text-[#4F4F4F] focus:bg-secondary transition-all duration-200 outline-none"
      />
    </div>
  );
};

export default InputField;
