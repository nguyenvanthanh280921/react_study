import React from "react";

const edit = () => {
  return (
    <div>
      <form className="form-app">
        <h1>Study React-redux</h1>
        <label>Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Your name"
          value=""
        />
        <label>Email Address</label>
        <input type="email" id="email" name="email" placeholder="Your emali" />
        <button>Save</button>
      </form>
    </div>
  );
};

export default edit;
