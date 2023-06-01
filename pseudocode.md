# PSEUDOCODE FOR ALARM CLOCK # 

## DECLARE VARIABLES ## 

 * Use the **Date( )** Object to retrieve some of these values for the variable <br>
    Initiliaze a new variable, currentTime, and *make it = new Date ();* 
 * HOURS
    <br>
    Use the date.getHours() method to store the number in this variable (i.e. currentTime.getHours()); Should update every hour without refreshing the page
    <br>
 * MINUTES
    <br>
    Use the date.getMinutes() method to store the number in this variable; Should update every minute without refreshing the page
    <br>
 * SECONDS
    <br>
    Use the date.getSeconds() method with a combination of a function to constantly update and display the number in this variable;
    <br>
 * Display all of these together by storing them in a HTML id using document.getElementById
    <br>
 * ALARM TIME
    <br>
    Store a time in this variable for when you want the alarm to go off.
   
   ## FUNCTIONALITY ##
   
   **Preparation**
      
     * Need to create a function that if the value of hours/minutes/seconds is less than 10 to add a 0 in the front of it
          ```
          FUNCTION formatTime  
              IF (variable) < 10
                  THEN ADD "0" to (variable)
                      END
   
   
     * Need to create a function to display hour/minutes/seconds incrementing in seconds. How to display a live count?
          ```
          FUNCTION
              WHILE Seconds < 60 INCREMENT by 1 (need to convert to milliseconds?)
                  THEN when seconds goes over 60 increment minutes by 1
                      THEN when minutes goes over 60 increment hours by 1
                          END

     * Need to create a function that subtracts the difference of the currentTime and alarmTime, when it === 0, the alert will go off
          ```
          FUNCTION
              IF currentTime minus alarmTime === 0
                  THEN alert();
                      END
          

  ## RUN THE PROGRAM ##
  
  **START**
  
  **END**
 
   
   
   


