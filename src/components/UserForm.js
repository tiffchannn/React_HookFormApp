import React from 'react';

//within form: name label needs to match state label

const UserForm = props => {
  const {user, setUser} = props;


  const handleChange = (e) => {
    setUser({
      ...user, // allows you to grab all the diff inputs
      [e.target.name]: e.target.value // targets the specific input field at that name label
    })

  };

  return(
    <form>

      <div class="form-group row">
        <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">First Name:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="colFormLabelSm" name="firstName" onChange= { handleChange } />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Last Name:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="colFormLabelSm" name="lastName" onChange= { handleChange } />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Email:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="colFormLabelSm" name="email" onChange= { handleChange } />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Password:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="colFormLabelSm" name="password" onChange= { handleChange } />
        </div>
      </div>
      <div class="form-group row">
        <label htmlFor="colFormLabelSm" class="col-sm-2 col-form-label col-form-label-sm">Confirm Password:</label>
        <div class="col-sm-10">
          <input type="text" class="form-control form-control-sm" id="colFormLabelSm" name="confirmpw" onChange= { handleChange } />
        </div>
      </div>
      <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>

    </form>
  );
}

export default UserForm;

// changed -> onChange= { (e) => handleChange(e, "lastName") }
// to -> onChange={ handleChange }