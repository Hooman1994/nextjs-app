import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { BaseService } from "../api/BaseService";

const Role = ({ items }) => {
  console.log("IM HERE");
  console.log(items);
  return (
    <div>
      <div className="card">
        {items &&
          items.map((item, index) => {
            return (
              <div key={index}>
                <h1>{item}</h1>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default Role;

Role.getInitialProps = async () => {
  let emptySearchModel = {
    first: 0,
    pageSize: 10,
    page: 1,
    sort: null,
    filter: null,
    ignorePagination: false,
  };
  const baseService = new BaseService("role");
  const data = await baseService.search(emptySearchModel);
  debugger
  const items = await data.json();
  return {
    props: items,
  };
};

