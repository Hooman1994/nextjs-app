import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";

const Role = ({data}) => {
  return (
    <div>
      <div className="card">
        <DataTable value={data} responsiveLayout="scroll">
          <Column field="name" header="Name"></Column>
          <Column field="code" header="Code"></Column>
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
      console.log(res.data.data.model);
      return {
        props: { data: res.data.data.model },
      };
    });
};
export default Role;
