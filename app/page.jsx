"use client";
import React, { useEffect, useState } from "react";

import {
  getAllCategories,
  getOptionsChildId,
  getSubCategoriesId,
} from "../services/Api/common";
import ModelTable from "@/components/Model/ModelTable";

const page = () => {
  // STATES
  const [categories, setCategories] = useState([]);
  const [categoriesId, setCategoriesId] = useState(null);
  const [subCategories, setSubCategories] = useState([]);
  const [subCategoriesId, setSubCategoriesId] = useState(null);
  const [subCategoriesData, setSubCategoriesData] = useState([]);
  const [selectedValues, setSelectedValues] = useState({});
  const [selectedValuesCate, setSelectedValuesCat] = useState({});
  const [classId, setClassId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectChange = (itemId, selectedValue, id) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [itemId]: { value: selectedValue, id: id },
    }));
  };

  console.log("classId === >> ", selectedValues);

  // fetch categories
  const getDataCategories = async () => {
    try {
      const res = await getAllCategories();
      console.log("RES", res.data.categories);
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataCategories();
  }, []);

  const filterCategories = async () => {
    const filterCategories = categories.filter((cat) => cat.id == categoriesId);
    setSubCategories(filterCategories[0]?.children);
    setSelectedValuesCat(filterCategories[0]);
  };

  useEffect(() => {
    filterCategories();
  }, [categoriesId]);

  // fetch subCategories
  const getDataSubCategories = async () => {
    try {
      const res = await getSubCategoriesId(subCategoriesId);
      setSubCategoriesData(res.data);
      console.log("Data", res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getDataSubCategories();
  }, [subCategoriesId]);

  console.log("selectedValues.Class.id", selectedValues?.Class?.id);

  const getDataClass = async () => {
    try {
      const res = await getOptionsChildId(selectedValues?.Class?.id);
      console.log("DataClassId", res.data);
      setClassId(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!selectedValues?.Class?.id) {
      return;
    }
    getDataClass();
  }, [selectedValues?.Class?.id]);

  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-16 py-40 xl:w-5/12  lg:w-full md:w-full sm:w-full h-auto">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Select Main Category
        </label>
        <select
          id="categoriesId"
          onChange={(e) => setCategoriesId(e.target.value)}
          aria-placeholder="Choose Main Categories"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {<option selected>Choose Main Categories </option>}
          {categories ? (
            categories.map((cat) => (
              <option key={cat?.id} value={cat?.id}>
                {cat.name}
              </option>
            ))
          ) : (
            <option>No Main Categories Yet</option>
          )}
        </select>

        <div className="mt-6">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Select Sub Category
          </label>
          <select
            id="subCategoriesId"
            onChange={(e) => setSubCategoriesId(e.target.value)}
            aria-placeholder="Choose Sub Categories"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="US" selected>
              Choose Sub Categories{" "}
            </option>
            {subCategories ? (
              subCategories?.map((cat) => (
                <option value={cat?.id} key={cat?.id}>
                  {cat.name}
                </option>
              ))
            ) : (
              <option>No Sub Categories Yet</option>
            )}
          </select>
        </div>

        {subCategoriesId &&
          subCategoriesData.map((item) => (
            <div key={item.name}>
              {item.options.length > 0 ? (
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">
                    {item.name}{" "}
                  </label>
                  <select
                    value={selectedValues[item.name]?.value || ""}
                    onChange={(e) =>
                      handleSelectChange(
                        item.name,
                        e.target.value,
                        e.target.selectedOptions[0].getAttribute("data-id")
                      )
                    }
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Select an option</option>
                    {item?.options?.length > 0 &&
                      item?.options?.map(
                        (option) =>
                          option && (
                            <option
                              key={option.id}
                              value={option.name}
                              data-id={option.id}
                            >
                              {option.name}
                            </option>
                          )
                      )}
                    <option value="other">other</option>
                  </select>
                  {selectedValues.hasOwnProperty("Class") ? (
                    <div>
                      {classId?.map((item) => (
                        <div key={item.id}>
                          {classId?.options?.length > 0 ? (
                            <div key={item.id}>
                              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-5">
                                {item.name}
                              </label>
                              <select
                                value={selectedValues[item.name]?.value || ""}
                                onChange={(e) =>
                                  handleSelectChange(
                                    item.name,
                                    e.target.value,
                                    e.target.selectedOptions[0].getAttribute(
                                      "data-id"
                                    )
                                  )
                                }
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                              >
                                <option value="">Select an option</option>
                                {item?.options?.length > 0 &&
                                  item?.options?.map(
                                    (option) =>
                                      option && (
                                        <option
                                          key={option.id}
                                          value={option.name}
                                          data-id={option.id}
                                        >
                                          {option.name}
                                        </option>
                                      )
                                  )}
                                <option value="other">other</option>
                              </select>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      ))}{" "}
                    </div>
                  ) : (
                    ""
                  )}
                  {selectedValues[item.name]?.value === "other" && (
                    <div>
                      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-2">
                        Other {item.name} :
                      </label>
                      <input
                        type="text"
                        value={
                          selectedValues[`other_${item.name}`]?.value || ""
                        }
                        onChange={(e) =>
                          handleSelectChange(
                            `other_${item.name}`,
                            e.target.value,
                            0
                          )
                        }
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}

        <button
          type="submit"
          onClick={() => setIsOpen(true)}
          className=" font-bold py-2 px-6  flex items-center justify-center  rounded-2xl mt-6 text-amber-500 w-4/12"
          style={{ backgroundColor: "#FFF5E9", border: "2px solid #FF951D" }}
        >
          <span style={{ color: "#FF951D" }} className=" ml-2 text-center ">
            Submit
          </span>
        </button>
        <ModelTable
          data={selectedValues}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          cat={selectedValuesCate}
        />
      </div>
    </form>
  );
};

export default page;
