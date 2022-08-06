import { ContactButtonI } from "../../../types/interfaces";

function ContactButton({ text, isSubmitting }: ContactButtonI) {
  return (
    <button
      disabled={isSubmitting}
      type="submit"
      className="text-buttonAOn duration-300 bg-buttonA hover:bg-buttonB hover:text-buttonBOn font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
    >
      {text}
    </button>
  );
}

export default ContactButton;
