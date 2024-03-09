import { useEffect, useState } from "react";
import Datatable from "usereactable";

const DocAppTable = ({ docters }) => {
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
      headerName: "ToTal Appoints",
      field: "appointments",
      renderCell: (row) => {
        const appointments = row.appointments;
        console.log(row.appointments);
        return (
          <>
            {appointments.map((appointment, i) => {
              return (
                <div key={i}>
                  {appointment.user.name},{appointment.user.number}{" "}
                </div>
              );
            })}
          </>
        );
      },
    },
    
  ];
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(docters.slice(0, 10));
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
  );
};

export default DocAppTable;
