import { impressumData } from "../../../assets/data";

function ImpressumInfo() {
  return (
    <p className="text-lg">
      {impressumData.address.name}
      <br />
      {impressumData.address.street}
      <br />
      {impressumData.address.city}
    </p>
  );
}

export default ImpressumInfo;
