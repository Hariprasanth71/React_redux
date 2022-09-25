import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Field } from "formik";

const Input = ({ inputList, setInputList, errors, setErrors }) => {
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const Names = inputList.map((el) => el.name);
    if (Names.includes(e.target.value.trim())) {
      setErrors((errList) => {
        errList[index] = index;
        return errList;
      });
    } else {
      setErrors((errList) => {
        errList[index] = null;
        return errList;
      });
    }
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, { id: uuidv4(), name: "" }]);
  };

  return (
    <div>
      <h3>Lists</h3>
      <br /> <br />
      {inputList.map((el, i) => (
        <div>
          <Field
            id="name"
            name="name"
            placeholder="Fields"
            value={el.name}
            onChange={(e) => handleInputChange(e, i)}
            required
          />
          <span>{i === errors[i] && errors[i] && "Name already exists"}</span>
          <div>
            <button
              className="tool"
              type="button"
              onClick={() => handleRemoveClick(i)}
            >
              Delete
            </button>
          </div>
          <div>
            {inputList.length - 1 === i && (
              <button type="button" onClick={handleAddClick}>
                Add field
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

Input.propTypes = {};

export default Input;
