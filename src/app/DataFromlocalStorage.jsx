

export const loadUserFromLocalStorage = () => {
    const currentUserString = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUserString) {
      return currentUserString;
    }
    return null;
  };
  
  
export const quizFromLocalStorage = () => {
    const currentUserString = localStorage.getItem('quiz');
  
    if (currentUserString) {
      const currentUser = JSON.parse(currentUserString);
      return currentUser;
    }
    return null;
  };
  
  