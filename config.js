require("dotenv").config();

module.exports = {
  google_application_credentials: process.env.GOOGLE_APPLICATION_CREDENTIALS,
  project_id: process.env.PROJECT_ID,
  location: process.env.LOCATION,
  processor_id: process.env.PROCESSOR_ID,
};
