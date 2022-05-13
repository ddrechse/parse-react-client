import React, { useState } from "react";

const Input = ({ handleObjectId }) => {
    
    return (
        <div>
            <form>
            <label>
              Name:
              <input type="text" name="name" onChange={handleObjectId}/>
            </label>
        </form>
        </div>
    )
}

export default Input