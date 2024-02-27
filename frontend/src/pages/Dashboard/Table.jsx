import { useEffect, useState } from "react";
import Datatable from "usereactable";

const Table = ({user}) => {
    // const [name,number,email,role] = user
    const columns = [
        {
          headerName: " Name",
          field: "name",
        },
        {
          headerName: "Email",
          field: "email",
        },
        {
          headerName: "Mobile",
          field: "number",
        },
        {
          headerName: "Role",
          field: "role",
        },
        
      ];
      const [data, setdata] = useState([]);
      useEffect(() => {
        setdata(user.slice(0, 10))
      }, []);
    
    
  return (
    <div>
         <div>
      <Datatable
        rows={data}
        columns={columns}
        title={"Customer list"}
        actionButtons
        excelDownload
        pagination
      />
    </div>
    </div>
  )
}

export default Table