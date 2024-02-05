import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {fetchAllUser} from '../../redux/slices/users/userSlice';
import LoadingComponent from '../../components/LoadingComponent';

function Dashboard() {
  //dispatch
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllUser())
  },[dispatch]);

  //get data from store
  const {users, error, loading} = useSelector((state)=>state?.users);
  users?.users?.map((user)=>{
    console.log(user?.isAdmin)
  })

  return (
    <div className="px-4 sm:px-6 lg:px-8">

      <h3 className="text-lg font-medium leading-6 text-gray-900 mt-3">
        All Users
      </h3>
      <div className="-mx-4 mt-3  overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg">
            <table className="min-w-full divide-y divide-gray-300">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    name
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    email
                  </th>
                  <th
                    scope="col"
                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                    description
                  </th>
                  <th
                    scope="col"
                    className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell">
                    zone
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                    admin status
                  </th>
                </tr>
              </thead>
              {loading ? <LoadingComponent/> :
              <tbody className="divide-y divide-gray-200 bg-white">
            {users?.users?.map((user) => (
              <tr key = {user?.email}>
                <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                  {user?.username}
                  
                </td>
                <td className="px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {user?.email}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {user?.description}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {user?.zone}
                </td>
                <td className="px-3 py-4 text-sm text-gray-500">
                  {user.isAdmin ? <div>true</div>: <div>false</div>}
                  
                </td>
                <td className="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
              
              }
              
            </table>
      </div>
      
    </div>
  )
}

export default Dashboard