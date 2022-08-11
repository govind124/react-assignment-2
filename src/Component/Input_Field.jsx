import React,{useState} from 'react'
import './style.css'

const InputField=()=>{
    const [store,setStore]=useState({
        name:'',
        department:'',
        rating:'',
    });
    const [out,setOut]=useState([]);
    const input1=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        console.log(name,value);
    setStore({...store,[name]:[value]});
    };
    const submited = (e)=>{
        e.preventDefault();
        setOut([...out,{...store,id:out.length}])
    }

    return(
   <div >
   <h1>EMPLOYEE FEEDBACK FORM </h1>
    <form onSubmit={submited} className='Input'>
        <label >
         NAME: <input className='Input_work' type="text" name='name' value={store.name} onChange={input1} required />
        </label><br />
        <label >
         DEPARTMENT:<input className='Input_work' type="text" name='department' value={store.department} onChange={input1} required />
        </label><br />
        <label >
         RATING: <input className='Input_work' type="number" name='rating' value={store.rating} onChange={input1}  />
          </label>
          {/* <button >Submit</button> */}
          <input className='button' type="submit" />
      </form>
      <div className='output_Result1'>{out.map(ele=>(<h4 className='output_Result'> Name:{ele.name} || Department:{ele.department} || Rating:{ele.rating}</h4>))}</div>
    </div>
    )
}

export default InputField;
