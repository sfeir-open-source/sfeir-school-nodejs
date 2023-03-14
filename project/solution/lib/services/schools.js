const { v1: uuidv1 } = require("uuid");

const service = (db) => {
  const getSchools = async () => {
    await db.createIndex({
      index: {
        fields: ["type"],
      },
    });
    const result = await db.find({ selector: { type: "school" } });
    return result.docs;
  };

  const createSchool = async (school) => {
    school.type = "school";
    school._id = uuidv1();
    await db.put(school);
  };
  return {
    getSchools,
    createSchool,
  };
};

module.exports = service;
