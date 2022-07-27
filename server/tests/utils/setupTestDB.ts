const mongoose = require('mongoose');

export const setupTestDB = () => {
  beforeAll(async () => {
    await mongoose.connect(
      'mongodb+srv://rahman:rahman123@cluster0.nj8kg.mongodb.net/mortgage'
    );
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
};
