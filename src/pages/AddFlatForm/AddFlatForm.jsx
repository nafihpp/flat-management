import "./AddFlatForm.css";
const AddFlatForm = () => {
  return (
    <div style={{width:"100%", height:"100vh", display:"flex" , alignItems:"center", justifyContent:"center"}}>
    <div className="container-flatform">
      <h1 className="title">Owner Information Form</h1>
      <form className="form-ok">
        <div className="form-group">
          <label htmlFor="blockNumber">Block Number</label>
          <input type="text" id="blockNumber" name="blockNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="ownerName">Owner's Name</label>
          <input type="text" id="ownerName" name="ownerName" />
        </div>
        <div className="form-group">
          <label htmlFor="maintenancePayment">
            Maintenance Payment (per month)
          </label>
          <input
            type="number"
            id="maintenancePayment"
            name="maintenancePayment"
            value={2000}
          />
        </div>
        <div className="form-group">
          <label htmlFor="tick">Payment Done</label>
          <div className="checkbox-group">
            <div className="checkbox">
              <input type="checkbox" id="january" name="january" />
              <label htmlFor="january">January</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" checked />
              <label htmlFor="february">February</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" checked />
              <label htmlFor="february">March</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" checked/>
              <label htmlFor="february">April</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" checked />
              <label htmlFor="february">May</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" />
              <label htmlFor="february">June</label>
            </div>
            <div className="checkbox">
              <input type="checkbox" id="february" name="february" />
              <label htmlFor="february">July</label>
            </div>
            {/* ... Add checkboxes for other months */}
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="contactNumber">Contact Number</label>
          <input type="tel" id="contactNumber" name="contactNumber" />
        </div>
        <div className="form-group">
          <label htmlFor="currentLocation">Current Location</label>
          <input type="text" id="currentLocation" name="currentLocation" />
        </div>
        <button type="submit" className="submit-add">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default AddFlatForm;
