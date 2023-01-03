import { impressumData } from "../../../assets/data";

function ImpressumContact() {
  return <address className="text-lg">{impressumData.contact.email}</address>;
}

export default ImpressumContact;
