import React from "react";

const InputForm = ({
  title,
  placeholder,
  type = "text",
  required = true,
  name,
}) => {
  return (
    <div className="field w-full">
      <label className="flex flex-col gap-2 w-full">
        <span className="font-medium text-sm color-azul-escuro">
          {title}
          {required && "*"}
        </span>
        {type === "textarea" ? (
          <textarea
            name={name}
            placeholder={placeholder || ""}
            required={required}
            rows={3}
            className="px-4 py-2 bg-cinza rounded-lg resize-y min-h-[3rem] max-h-[20rem]"
          />
        ) : (
          <input
            name={name}
            type={type}
            placeholder={placeholder || ""}
            required={required}
            className="px-4 py-2 bg-cinza rounded-lg min-w-full"
          />
        )}
      </label>
    </div>
  );
};

export default InputForm;
