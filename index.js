/* Your Code Here */
function createEmployeeRecord(employeeDetails) {
    return {
       firstName: employeeDetails[0],
       familyName: employeeDetails[1],
       title: employeeDetails[2],
       payPerHour: employeeDetails[3],
       timeInEvents: [],
       timeOutEvents: []
    };
}


function createEmployeeRecords(employeesData) {
    return employeesData.map(createEmployeeRecord);
}

function createTimeInEvent(dateStamp) {
    const [date, time] = dateStamp.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(time, 10),
        date,
    })

    return this
}

function createTimeOutEvent (dateStamp){
    let [date, time] = dateStamp.split(' ')

    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(time, 10),
        date,
    })

    return this
}

function hoursWorkedOnDate(date) {
    const timeInEvent = this.timeInEvents.find(event => event.date === date);
    const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
    if (!timeInEvent || !timeOutEvent) return 0;
    return (timeOutEvent.hour - timeInEvent.hour)/100
   
}

function wagesEarnedOnDate(date){
    let rawWage = hoursWorkedOnDate.call(this, date)
        * this.payPerHour
    return parseFloat(rawWage.toString())
}

function findEmployeeByFirstName (srcArray, firstName) {
    return srcArray.find(function(rec){
      return rec.firstName === firstName
    })
  
}
  
function calculatePayroll (arrayOfEmployeeRecords){
      return arrayOfEmployeeRecords.reduce(function(memo, rec){
          return memo + allWagesFor.call(rec)
      }, 0)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

