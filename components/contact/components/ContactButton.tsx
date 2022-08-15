import { ContactButtonI } from "../../../types/interfaces";

function ContactButton({ text, isSubmitting }: ContactButtonI) {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="px-10 py-2 mb-2 mr-2 text-lg font-medium text-center duration-300 border-2 rounded-full border-buttonB text-buttonBOn bg-buttonB hover:bg-buttonA hover:text-buttonAOn"
    >
      {text}
    </button>
  );
}

export default ContactButton;
