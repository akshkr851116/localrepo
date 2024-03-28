import React, { useEffect, useState } from "react";
import Breadcrum from "../../Breadcrum";
import Sidebar from "../Sidebar";
import { Link } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
export default function Maincategory() {
  const columns = [
    { field: "id", headerName: "ID",width: 70 },
    { field: "name", headerName: "Name", width: 130 },
    { field: "edit", headerName: "Edit",renderCell:(({row})=><Link to={`/admin/maincategory/update/${row.id}`}className='btn btn-primary'><i className='fa fa-edit'></i></Link>) , width: 130 },
    {
      field: "del",
      headerName: "Delete",
      renderCell:(({row})=><button className='btn btn-danger' onClick={()=>{getDeletedata(row.id)}}><i className='fa fa-trash'></i></button>),
      width: 90,
    },
  ];
  let [data, setData] = useState([]);
  async function getDeletedata(id) {
    if (window.confirm("Are you sure to delete that item")) {
      let response = await fetch("http://localhost:8000/maincategory/" + id, {
        method: "delete",
        headers: {
          "content-type": "application/json", //For multiple data ,not mandatory
        },
      });
      response = await response.json();
      getApiData();
    }
  }
  async function getApiData() {
    let response = await fetch("http://localhost:8000/maincategory", {
      method: "get",
      headers: {
        "content-type": "application/json", //For multiple data ,not mandatory
      },
    });
    response = await response.json();
    setData(response.reverse());
  }
  useEffect(() => {
    getApiData();
  }, []);
  return (
    <>
      <Breadcrum title="Admin" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-md-12">
                <h5 className="bg-primary text-light text-center p-2">
                  Maincategory
                  <Link
                    to={`/admin/maincategory/create`}
                    className="float-end text-light"
                  >
                    <i className="fa fa-plus"></i>
                  </Link>
                </h5>
                {/* <table className='table table-bordered'>
                  <thead>
                    <tr>
                      <th>id</th>
                      <th>Name</th>
                    </tr>
                  </thead>
                  <tbody>
                  {data.map((item,index)=>{return(
                    <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td><Link to={`/admin/maincategory/update/${item.id}`}className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                    <td><button className='btn btn-danger' onClick={()=>{getDeletedata(item.id)}}><i className='fa fa-trash'></i></button></td>
                  </tr>)
                  })}
                  </tbody>
                </table> */}
                <div className="table-responsive">
                  <DataGrid
                    rows={data}
                    columns={columns}
                    initialState={{
                      pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                      },
                    }}
                    pageSizeOptions={[5, 10]}
                    checkboxSelection
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
