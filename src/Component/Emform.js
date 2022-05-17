import React, {useState} from 'react'
import style from './Emform.module.css'

function Emform() {
  const [userregister,setuserregister]= useState({
      name:"",
      Department:"",
      ratings:""
  });
  const [records, setrecords]=useState([]);
  const handleinput=(ev)=>{
      const name=ev.target.name;
      const value=ev.target.value;

      setuserregister({...userregister,[name]:value})
  }
   
  const handleSubmit=(e)=>{
      e.preventDefault();
      const newReco = {...userregister,id:new Date().getTime().toString()};
      setrecords([...records, newReco]);
  }


  return (
    <div className={style.mydiv}>
   <h1>EMPLOYEE FEEDBACK FORM</h1>
   <form action='' onSubmit={handleSubmit}>
       <label className={style.txtfrm}>Name: 
       <input className={style.txtfrm}  type="text" name='name' value={userregister.name} onChange={handleinput}/>
       </label>
       <br/>
       <label className={style.txtfrm}>Department: 
       <input className={style.txtfrm}  type="text" name='Department' value={userregister.Department} onChange={handleinput}/>
       </label>
       <br/>
       <label className={style.txtfrm}>Ratings: 
       <input className={style.txtfrm}  type="number" name='ratings' value={userregister.ratings} onChange={handleinput}/>
       </label>
       <br/>
       <input className={style.btn} type="submit" value="Submit"/>
       <div className={style.shodiv}>
           {
               records.map((elemt)=>{
                   const {name,Department,ratings,id}=elemt;
                   return(
                       <div className={style.myshow} key={id}>
                           <p className={style.mep}>Name:{name} | Department :
                           {Department} | Ratings : {ratings}</p>
                        </div>
                   )
               })
           }

       </div>



   </form>
   </div>
  )
}

export default Emform