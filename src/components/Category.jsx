import React from "react";
import { useEffect } from "react";
import { getCategory } from "../utils";
import { useState } from "react";

const Category = ({ type, selectedCategories, setSelectedCategories}) => {
  const [categs, setCategs] = useState(null);

  useEffect(() => {
    getCategory(type).then(setCategs).catch(() => setCategs([]));
  }, [type]);

  const handleChange = (id) => {
    setSelectedCategories(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  }

  return (
    <div className="flex flex-wrap justify-center p-2 gap-2">
        {categs && categs.map(obj =>
            <fieldset key={obj.id} className="rounded-md border border-slate-600 bg-slate-700 px-1 py-0 text-slate-200">
            <label className="flex cursor-pointer items-center gap-2 p-1 text-sm">
                <input
                  type="checkbox"
                  className="checkbox checkbox-sm border-slate-300 bg-slate-800"
                  checked={selectedCategories.includes(obj.id)}
                  onChange={() => handleChange(obj.id)}
                />
                {obj.name}
            </label>
            </fieldset>
        )}
    </div>
  )
};

export default Category;