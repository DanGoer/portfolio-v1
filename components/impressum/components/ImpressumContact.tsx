import { impressumData } from "../../../assets/data";

function ImpressumContact() {
  return (
    <p className="text-lg">
      {impressumData.contact.tel}
      <br />
      {impressumData.contact.email}
    </p>
  );
}

export default ImpressumContact;
