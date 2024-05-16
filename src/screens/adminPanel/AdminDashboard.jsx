import React from 'react';
import StatsCard from './widgets/StatsCard';
import LineChart from './widgets/LineChart';
import DataTable from "./widgets/DataTable"
import HeatMap from './widgets/HeatMap';
import PieChart from './widgets/PieChart'
import BarChart from './widgets/BarChart';

const AdminDashboard = () => {
  console.log("HI from dashboard");
  return (
    <div className="grid grid-cols-12 grid-rows-12 gap-3 h-screen w-full dark:bg-gray-900">
      <StatsCard name= {"Total Orders"} count = {20} />
      <StatsCard name= {"Sales"} count = {20}/>
      <StatsCard name= {"Customers"} count = {20}/>
      <StatsCard name= {"Total Products"} count = {20}/>

      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-800 col-span-8 row-span-5">
        <h3 className="text-cyan-50 font-sans px-10 pt-4 text-2xl">Orders and sales</h3>
        <div className="h-64">
        <LineChart isDashboard = {true}/>
        </div>
      </div>

<div className="bg-white shadow sm:rounded-lg dark:bg-gray-800 col-start-9 col-end-13 row-start-1 row-end-6 overflow-auto">
      <PieChart/>
</div>
{/* 
<div className="col-span-12 flex">
      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900 col-span-8 row-span-5" style={{overflowY: 'auto' }}>
        <DataTable/>
      </div>

      <div class="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-900 col-span-4 row-span-5" style={{overflowY: 'auto' }}>
        <DataTable/>
      </div>
</div> */}


<div className="bg-white shadow sm:rounded-lg dark:bg-gray-800 col-span-8 row-span-5 overflow-auto">
      <DataTable/>
</div>

<div className="bg-white shadow sm:rounded-lg dark:bg-gray-800 col-start-9 col-end-13 row-start-6 row-end-12 overflow-auto">
      <BarChart/>
</div>





    </div>
  )
}

export default AdminDashboard