import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AutoComplete = ()=>{
  const [data, setData] = useState([])
  const [selected, setSelected] = useState({
    id: '',
    name: ''
  })

  const getUser = (name)=>{
    axios.get(`http://localhost:3005/${ selected.name }`)
    .then(res=>{
      setData(res.data.users)
      console.log(res.data.users);
    })
    .catch(err=>{
      setData([])
      console.log(err);
    })
  }

  return(
    <div className="form-group autoPos">
      <label>Select User</label>
      <input
        type="search"
        value={ selected.name }
        className="form-control"
        onChange={ (e)=> {
          setSelected({
            ...selected,
            name: e.target.value
          })
          getUser(e.target.value)
        } }
      />
      { data && data.length>0?
        <div className="datalist">
          <ul>
            { data.map((e, i)=>(
              <li key={ i } onClick={ ()=>{
                setSelected({
                  id: e._id,
                  name: e.name
                })
                setData([])
              } }>{ e.name }</li>
            )) }
          </ul>
        </div>
      :null }
    </div>
  )
}

export default AutoComplete;
