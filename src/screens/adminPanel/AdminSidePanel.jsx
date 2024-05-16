import React from 'react';
import logo_no_background from "../../assets/logo/logo_no_background.png";
import { Link ,Outlet} from 'react-router-dom';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import MopedIcon from '@mui/icons-material/Moped';
import InventoryIcon from '@mui/icons-material/Inventory';
import FolderSharedRoundedIcon from '@mui/icons-material/FolderSharedRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import DescriptionIcon from '@mui/icons-material/Description';
// import { Outlet } from 'react-router-dom';


const AdminSidePanel = () => {
  return (
    <div className="dark:bg-gray-900">
<div className="flex flex-row dark:bg-gray-900">
<div class="fixed overflow-y-auto py-5 px-3 w-1/6 h-screen bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="w-full flex flex-row justify-around items-center mb-4 dark:text-white">
        <div className="h-12 ">
        <img className="h-full" src={logo_no_background} alt="logo" />
        </div>
        <span class="sans text-2xl font-bold">SneekShop</span>
    </div>
      <ul class="space-y-2">
          <li>
              <Link to="/admin/dashboard" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <SpaceDashboardRoundedIcon/>
                  <span class="ml-3">Dashboard</span>
              </Link>
          </li>
          <li>
            <Link to="/admin/orders" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <MopedIcon/>
                <span class="ml-3">Orders</span>
            </Link>
          </li>
          <li>
          <Link to="/admin/products" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                    <InventoryIcon/>
                  <span class="ml-3">Products</span>
              </Link>
          </li>
          <li>
              <Link to="/admin/customers" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                  <FolderSharedRoundedIcon/>
                  <span class="flex-1 ml-3 whitespace-nowrap">Customers</span>
              </Link>
          </li>

      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
          <li>
              <Link to="/admin/settings" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <SettingsRoundedIcon/>
                  <span class="ml-3">Settings</span>
              </Link>
          </li>
          <li>
              <Link to = "/admin/employeemanagement" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <ManageAccountsRoundedIcon/>
                  <span class="ml-3">Employee Management</span>
              </Link>
          </li>
          <li>
              <Link to = "/admin/reports" class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group">
                  <DescriptionIcon/>
                  <span class="ml-3">Reports</span>
              </Link>
          </li>
      </ul>
  </div>

</div>
  <div className="ml-64 p-5 dark:bg-gray-900">
  <Outlet />
  </div>
</div>
  )
}

export default AdminSidePanel
