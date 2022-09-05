const options = {
    method: 'POST',
    headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '4c838acf39msh9c261784b6df4f4p1cdb7ejsnbb7885bcb9e4',
        'X-RapidAPI-Host': 'trains.p.rapidapi.com'
    },
    body: '{"search":"Rajdhani"}'
};
fetch('https://trains.p.rapidapi.com/', options)
    .then(response => response.json())
    .then(dat => {
        console.log(dat);
        var text = ""
        for (let i = 0; i < dat.length; i++) {
            text +=
            
            "<tr class='color_on' id='forin'>"+
            "<td>ID</td>" +
                "<td>Day</td>"+
                "<td>DepartTime</td>"+
                "<td>Train Number</td>"+
                "<td>Name of Train</td>"+
                "<td>Train_from</td>"+
                "<td>Train_to</td>"+
                "<td>ArriveTime</td>"+
                "</tr>"+
                "<tr id='one'>" + "<td>" + dat[i].data.id + "</td>" +
                " <td id='by_Day'>" +
                " Mon <spam>" + dat[i].data.days.Mon + "</spam>" +
                "<br>" +
                "Tue <spam>" + dat[i].data.days.Tue + "</spam>" +
                "<br>" +
                " Wed <spam>" + dat[i].data.days.Wed + "</spam>" +
                "<br>" +
                " Thu <spam id='Thu'>" + dat[i].data.days.Thu + "</spam>" +
                "<br> " +
                " Fri <spam id='Fri'>" + dat[i].data.days.Fri + "</spam>" +
                " <br>" +
                " Sat <spam id='Sat'>" + dat[i].data.days.Sat + "</spam>" +
                " <br>" +
                " Sun <spam id='Sun'>" + dat[i].data.days.Sun + "</spam>" +
                "</td>" +
                "<td >" + dat[i].data.departTime + "</td>" +
                "<td >" + dat[i].train_num + "</td>" +
                "<td >" + dat[i].train_to + "</td>" +
                "<td >" + dat[i].name + "</td>" +
                "<td >" + dat[i].train_from + "</td>" +
                "<td >" + dat[i].data.arriveTime + "</td>" +
                "</tr>" 
                ;
        }
        document.getElementById("one").innerHTML = text;
    })




