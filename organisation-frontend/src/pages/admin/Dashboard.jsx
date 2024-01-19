import React from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { useEffect } from "react";
import {fetchAllUser} from '../../redux/slices/users/userSlice';

function Dashboard() {
  //dispatch
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchAllUser())
  },[dispatch]);

  //get data from store
  //const {allProducts, error, loading} = useSelector((state)=>state?.products);

  return (
    <div>
      <h1>hello world</h1>
    </div>
  )
}

export default Dashboard