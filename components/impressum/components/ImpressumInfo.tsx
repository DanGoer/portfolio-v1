import { impressumData } from "../../../assets/data";

function ImpressumInfo() {
  return (
    <address className="text-lg">
      {impressumData.address.name}
      <br />
      {impressumData.address.street}
      <br />
      {impressumData.address.city}
    </address>
  );
}

export default ImpressumInfo;
