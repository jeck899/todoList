module.exports.getDate = getDate;



function getDate() {
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const todate = new Date();
const today = todate.getDay()
const day = days[today];

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

const formatted_day = todate.toLocaleDateString("en-US", options); 
return formatted_day;
};

module.exports.getDay = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const todate = new Date();
    const today = todate.getDay()
    const day = days[today];
    
    const options = {
        weekday: "long"
    };
    
    const formatted_day = todate.toLocaleDateString("en-US", options); 
    return formatted_day;
    };
    

