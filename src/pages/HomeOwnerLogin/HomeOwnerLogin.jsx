import { useState } from "react";
import "./HomeOwnerLogin.css"

export const HomeOwnerLogin = () => {
    const [flatNumber, setFlatNumber] = useState('');

    const handleChange = (e) => {
      setFlatNumber(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Perform submit action with the flatNumber
    };
  return (
    <div style={{width:"100%", height:"100vh", display:"flex" , alignItems:"center", justifyContent:"center"}}>
    <form onSubmit={handleSubmit}>
      <label htmlFor="flatNumber" className="label" >Flat Number</label>
      <div className="input-wrapper" style={{marginTop:"10px"}}>
        <input
          type="text"
          id="flatNumber"
          value={flatNumber}
          onChange={handleChange}
          placeholder="Enter flat number"
          className="input"
        />
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
    </div>
  )
}
