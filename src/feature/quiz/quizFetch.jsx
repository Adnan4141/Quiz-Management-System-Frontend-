// actions.js

import axios from "axios";





export const createQuizAndSendServer = async(obj) => {
    try {
       console.log(obj)
      const response = await axios.post('http://localhost:3000/quizzes',obj);
      console.log(response)
      console.log('Question created:', response.data);
      // Call dataPass or handle the response as needed
    } catch (error) {
      console.error('Error:', error);
    }

};





export const fetchQuizById = async(id) => {
 
      console.log(id)
        try {
            const response = await fetch(`http://localhost:3000/quizzes/${id}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            console.log(data)
           return data;
        } catch (error) {
           console.log(error)
           console.log(error.message)
        }

};


// Function to delete a participant from quiz participant history
export const deleteParticipant = async (quizId, participantId) => {
  try {
    const response = await axios.delete(`http://localhost:3000/quizzes/${quizId}/participant/${participantId}`);
    return response.data; // Return the response data if successful
  } catch (error) {
    throw error.response.data; // Throw an error if request fails
  }
};






export const submitQuizAttemptForQuizzes = async(userInfo)=>{
        console.log(userInfo)
     
    const url = `http://localhost:3000/quizzes/${userInfo.quizId}`; // Replace with your server-side URL
    try {
      const response = await axios.put(url, userInfo, {
        headers: { 'Content-Type': 'application/json' },
      });
       console.log("sucessfully Submitted to server")
      return response.data;
    } catch (error) {
      throw new Error(`Error submitting quiz attempt: ${error.response.data.message || error.message}`);
    }


}

