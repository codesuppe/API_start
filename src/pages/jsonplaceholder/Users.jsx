import React, { useEffect } from 'react'

//import eget hook
import useGetData from '../../hooks/useGetData'


const Users = () => {

    //request-hook
    const { error, loading, data, getData } = useGetData()

    useEffect (() => {

        getData("https://jsonplaceholder.typicode.com/users/4")



    }, [] )





  return (
    <div id="printout">Indsæt spændende data fra useGetData()</div>
  )
}

export default Users
