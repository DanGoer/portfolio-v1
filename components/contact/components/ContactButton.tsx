import { ContactButtonI } from "../../../types/interfaces";

function ContactButton({ text, isSubmitting }: ContactButtonI) {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="border-buttonB text-buttonBOn duration-300
       bg-buttonB hover:bg-buttonA hover:text-buttonAOn border-2
       font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
    >
      {text}
    </button>
  );
}

export default ContactButton;
