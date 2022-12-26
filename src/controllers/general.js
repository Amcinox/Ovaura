const _ = require("lodash");

module.exports.save = async (Model, instanceObj) => {
  const instance = new Model({ ...instanceObj });
  await instance.save();
  return instance;
};

module.exports.update = async (Model, instanceObj, id) => {
  const instance = await Model.findOneAndUpdate(
    { _id: id },
    { $set: _.omit(instanceObj, "_id") },
    { new: true, useFindAndModify: false }
  );
  return instance;
};

module.exports.getAll = async (Model) => {
  return await Model.find();
};

module.exports.getOne = async (Model) => {
  return await Model.findOne({});
};

module.exports.getById = async (Model, id, populate) => {
  try {
    const instance = await Model.findById(id).populate(populate);
    return instance;
  } catch (err) {
    console.log(err);
    return;
  }
};

module.exports.deleteById = async (Model, id) => {
  try {
    const instance = await Model.findByIdAndRemove(id);
    return instance;
  } catch (err) {
    return;
  }
};

module.exports.getAllPerPage = async (
  Model,
  limit,
  skip,
  sort,
  fields,
  filter,
  populate
) => {
  return await Model.find(filter, fields)
    .limit(limit)
    .skip(skip)
    .sort(sort)
    .populate(populate);
};

/// bot Methods
module.exports.getByName = async (Model, name) => {
  const instance = await Model.findOne({ name: name });
  return instance;
};

/// user Methods

module.exports.getOneByUsername = async (Model, username) => {
  return await Model.findOne({ username: username });
};
