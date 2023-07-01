function getDaysBetween(start, end) {
    let days = [];
    let currentDay = new Date(start);
    while (currentDay <= end) {
      days.push(currentDay.toDateString());
      currentDay.setDate(currentDay.getDate() + 1);
    }
    return days;
  }

  function showDays() {
    let startDate = new Date(document.getElementById("start-date").value);
    let endDate = new Date(document.getElementById("end-date").value);

    let result = getDaysBetween(startDate, endDate);
    document.getElementById("result-days").innerHTML = "Бронированно эти дни:" + "<br>" + "<br>" + result.join("<br>");
    document.getElementById("result-days").style.padding = "20px";
    document.getElementById("result-difference").style.padding = "20px";
    document.getElementById("result-difference").style.paddingLeft = "45px";
    document.getElementById("result-difference").style.paddingRight = "45px";
    
    let differenceInDays = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("result-difference").innerHTML = "В общем : " + differenceInDays + " Дней";
  }