import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export const getStaticProps = async () => {
  debugger
  const result = await fetch("http://185.4.30.29:8090/api/portal/role/search", {
    method: "POST",
    body: {
      sort: [],
      filter: [],
    },
  });
  const data = await result.json();
  return {
    props: data,
  };
};

const Role = ({ data }) => {
  return (
    <div>
      {JSON.stringify(data, 2, null)}
      <div className="card">
        <DataTable value={data} responsiveLayout="scroll">
          <Column field="name" header="Name"></Column>
          <Column field="code" header="Code"></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default Role;
