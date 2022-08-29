import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import handler from "../api/role/[id]";

const Role = ({ data }) => {
  const emptyModel = {
    id: null,
    name: "",
    active: true,
  };

  const [baseModel, setBaseModel] = useState(emptyModel);

  function handleInputChange(e, name) {
    const val = (e.target && e.target.value) || "";
    let _baseModel = { ...baseModel };
    _baseModel[name] = val;
    setBaseModel(_baseModel);
  }

  function handleSubmit() {
    let _baseModel = baseModel;
    handler({ method: "PUT", body: _baseModel }, {});
    // async () => {
    //   return axios
    //     .put("http://185.4.30.29:8090/api/portal/role/merge", {
    //       name: _baseModel.name,
    //       active: _baseModel.active,
    //     })
    //     .then((response) => {
    //       console.log(response);
    //       setBaseModel(emptyModel);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // };
  }

  return (
    <div>
      <InputText onChange={(e) => handleInputChange(e, "name")} />
      <Button label="Submit" onClick={handleSubmit} />
      <div className="card">
        <DataTable value={data} responsiveLayout="scroll">
          <Column field="name" header="Name"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  return axios
    .post("http://185.4.30.29:8090/api/portal/role/search", {
      sort: [],
      filter: [],
    })
    .then((res) => {
      return {
        props: { data: res.data.data.model },
      };
    });
};
export default Role;
