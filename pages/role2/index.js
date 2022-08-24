import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BaseService } from "../api/BaseService";

const Role = ({ props }) => {
  console.log("IM HERE");
  console.log(props);
  return (
    <div>
      <div className="card"></div>
    </div>
  );
};

Role.getInitialProps = async () => {
  let emptySearchModel = {
    first: 0,
    pageSize: 10,
    page: 1,
    sort: null,
    filter: null,
    ignorePagination: false,
  };
  let errorText = {};
  const baseService = new BaseService("role");
  baseService
    .search(emptySearchModel)
    .then((response2) => {
      const roleData = response2.data.data.model;
      console.log("HERE 3");
      console.log(roleData);
      return { props: { data: "Helloooowww" } };
    })
    .catch((err) => {
      errorText = err;
    });
  return { props: { data: "Helloooowww" } };
};

export default Role;
