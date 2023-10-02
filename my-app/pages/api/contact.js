//handles HTTP POST requests, validates input data, stores messages in a MongoDB database, and responds with appropriate status codes and messages at each step.
import { MongoClient } from 'mongodb';
// This is an async function for handling HTTP requests
async function handler(req, res) {
  // Check if the request method is POST
  if (req.method === 'POST') {
    // Extract the email, name, and message data from the request body
    const { email, name, message } = req.body;
    // Validate the input data
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      // If the input is not valid, respond with a 422 status and an error message
      res.status(422).json({ message: 'Invalid input.' });
      return;
    }
    // Store the new message data in a JavaScript object
    const newMessage = {
      email,
      name,
      message,
    };
    let client;
    
    // Construct the MongoDB connection string using environment variables
    const connectionString = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.dsxgyrn.mongodb.net/${process.env.mongodb_database}Tikd327TWV3MJIMl`
    try {
      // Attempt to connect to the MongoDB database
      client = await MongoClient.connect(connectionString);
    } catch (error) {
      // If the connection fails, respond with a 500 status and an error message
      res.status(500).json({ message: 'Could not connect to database.' });
      return;
    }
    // Access the MongoDB database
    const db = client.db();
    try {
      // Insert the new message into the 'messages' collection
      const result = await db.collection('messages').insertOne(newMessage);
      newMessage.id = result.insertedId;
    } catch (error) {
      // If storing the message fails, close the database connection and respond with a 500 status
      client.close();
      res.status(500).json({ message: 'Storing message failed!' });
      return;
    }
    // Close the database connection
    client.close();
    // Respond with a 201 status (resource created) and a success message
    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage });
  }
}
// Export the handler function as the default export
export default handler;