import React from "react";

export const TaskRow = ({item, toggleTask}) =>{//obtener solo la propiedad desde el inicio
  
  return (
    <tr className="">
      <td className="d-flex justify-content-between">
        <h4>{item.name}</h4>
      </td>
      <td>
        <input type="checkbox"
          checked={item.done}
          onChange={(e) => toggleTask(item)}
        />
      </td>
    </tr>
  );
}