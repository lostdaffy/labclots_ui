import React from "react";
const AddPatient = () => {
  return (
    <section className="main">
      <div className="head1">
        <h3>Booking</h3>
        <div className="head2">
          <h4> Total:: 20414Count::75000::51</h4>
        </div>

        <form>
          <div className="form-group">
            <label for="Number">RNo:</label>
            <input type="number" placeholder="6346809862" required />
            <label for="text">Center *:</label>
            <input type="text" placeholder="Enter Lab Name" required />
            <label for="options">Select Org</label>
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <label for="datetime">Select Date </label>
            <input type="datetime-local" id="datetime" name="datetime" />
            <label for="options">B Type </label>
            <select>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
              <option value="option4">Option 4</option>
            </select>
            <br /> <br /> <hr />
          </div>
          <div className="form-grp2">
            <label for="text">Patient :</label>
            <input
              type="text"
              id="email"
              placeholder="Patient Name"
              required
            />
            <br />
            <label for="text">Email :</label>
            <input
              type="text"
              id="email"
              placeholder="Patient email"
              required
            />
            <br />
            <label for="text">Age :</label>
            <input
              type="text"
              id="email"
              placeholder="Patient Age"
              required
            />
            <br />
            <label for="text">Doctor:</label>
            <input
              type="text"
              id="email"
              placeholder="Doctor Name"
              required
            />
            <br />
            <label for="text">Mobile No:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Mobile No"
              required
            />
            <br />
            <label for="text">Address:</label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Address"
              required
            />
            <br />
            <label>
            
              <input type="radio" name="gender" value="male" required /> Male
            </label>
            <input type="radio" name="gender" value="female" /> Female
            <div className="form3">
              <label for="text">UIID :</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your UIID No"
                required
              />
              <button>Check UIID</button>
              <br />
              <label for="text">SRFID :</label>
              <input
                type="text"
                id="email"
                placeholder="SRFID No"
                required
              />
              <br />
              <label for="text">Sample By :</label>
              <input
                type="text"
                id="email"
                placeholder=""
                required
              />
              <br />
              <label for="Select">Sample </label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <label for="Select">P Type </label>
              <select>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
            </div>
            <div class="form4">
              <label for="Select">Panel </label>
              <select>
                <option value="select">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              <input type="text" placeholder="File" /> <br />
              <label for="text">Web id :</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Web id"
                required
              />
              <br />
              <label for="text">Remark :</label>
              <input
                type="text"
                id="email"
                placeholder="Enter your Remark"
                required
              />
              <br />
              <label for="text">CareOf :</label>
              <input
                type="text"
                id="email"
                placeholder=""
                required
              />
              <br />
              <label>
                
                <input type="checkbox" /> SMS
              </label>
              <label>
                
                <input type="checkbox" /> Email
              </label>
              <label>
                
                <input type="checkbox" /> Post
              </label>
              <label>
                
                <input type="checkbox" /> Print
              </label>
            </div>
            <hr />
            <div className="form5">
              <button className="btns"> Edit </button>
              <button className="btns"> Delete </button>
              <button className="btns"> Code </button>
              <button className="btns"> Test Name </button>
              <button className="btns"> Delivery Date </button>
              <button className="btns"> Rate </button>
            </div>
            <div className="form6">
              <label for="Select">Extra </label>
              <select>
                <option value="select">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              Rs. <input type="text" /> Total. <input type="text" /> <br />
              <label for="Select">Dics. By </label>
              <select>
                <option value="select">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              (%)
              <input type="text" /> Rs. <input type="text" /> <br />
              <label for="Cash">Pay Mode </label>
              <select>
                <option value="select">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
                <option value="option4">Option 4</option>
              </select>
              Net <input type="text" /> Paid <input type="text" /> <br />
              <label>
                <input type="checkbox" />
                Cancel Slip
              </label>
              <label>
                <input type="checkbox" />
                Booking+Sample
              </label>
            </div>
            <hr />
            <div className="btns">
              <button className="btns1 b">Cancel</button>
              <button className="btns2 b">Save</button>
              <button className="btns3 b ">Print</button>
              <button className="btns4 b">Refresh</button>
              <button className="btns5 b">Free</button>
              <button className="btns6 b ">Search</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddPatient;
