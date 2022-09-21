import { useParams } from "react-router-dom";

function Vault() {
  const params = useParams();
  return (
    <div className="container">
      <div>Vault AppRoles</div>
      <br></br>
      <p>data ={params.id}</p>
    </div>
  );
}
export default Vault;