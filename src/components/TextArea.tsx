import { twMerge } from 'tailwind-merge';
import type { TextAreaProps } from '../interface/TextArea';

export default function TextArea({ id, name, label, placeholder, className, onChange, value } : TextAreaProps){
  const baselabel = "text-sm font-medium text-white";
  const mergeLabel = twMerge(baselabel, className?.label);

  const baseTextArea = "w-full p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-primary-yellow bg-white text-gray-800 placeholder-gray-500 shadow-sm resize-none"
  const mergeTextArea = twMerge(baseTextArea, className?.textArea);
  
  const baseWrapper = "flex flex-col gap-1.5"
  const mergeWrapper = twMerge(baseWrapper, className?.wrapper);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // bloquea saltos de línea manuales
    }
  };

  return (
    <div className={mergeWrapper}>
      {label && (
        <label htmlFor={id} className={mergeLabel}>
          {label}
        </label>
      )}
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onChange={onChange}
        className={mergeTextArea}
        value={value}
      />
    </div>
  );
};