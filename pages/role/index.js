import React, { useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import handler from "../api/role/[id]";
import generalHandler from "../api/role/index";
import styles from "../../styles/dataTable.module.scss";

const Role = ({ data }) => {
  const emptyModel = {
    id: null,
    name: "",
    active: true,
  };
  const [baseModel, setBaseModel] = useState(emptyModel);
  const [newModel, setNewModel] = useState();

  const confirmDeleteProduct = (rowData) => {
    handler({ method: "DELETE", body: { id: rowData.id } }, {});
    setNewModel();
    location.reload();
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <React.Fragment>
        <Button
          icon="pi pi-trash"
          className="p-button-rounded p-button-warning"
          onClick={() => confirmDeleteProduct(rowData)}
        />
      </React.Fragment>
    );
  };

  useEffect(() => {
    debugger;
    generalHandler({ method: "POST", body: { sort: [], filter: [] } });
  }, [newModel]);

  function handleInputChange(e, name) {
    const val = (e.target && e.target.value) || "";
    let _baseModel = { ...baseModel };
    _baseModel[name] = val;
    setBaseModel(_baseModel);
  }
  function handleSubmit() {
    debugger;
    let _baseModel = baseModel;
    handler({ method: "PUT", body: _baseModel }, {})
      .then(() => {
        setBaseModel({ ...baseModel, name: "" });
      })
      .then(() => {
        location.reload();
      });
  }
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.formField}>
          <InputText onChange={(e) => handleInputChange(e, "name")} />
          <Button label="Submit" onClick={handleSubmit} />
        </div>
        <div className={styles.formField}>
          <DataTable value={data} responsiveLayout="scroll">
            <Column field="name" header="Name"></Column>
            <Column body={actionBodyTemplate} exportable={false}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export function getStaticProps() {
  return axios
    .post("http://api.fartakda.com/v1/portal/role/search", {
      sort: [],
      filter: [],
    })
    .then((res) => {
      return {
        props: { data: res.data.data.model },
      };
    });
}
export default Role;
