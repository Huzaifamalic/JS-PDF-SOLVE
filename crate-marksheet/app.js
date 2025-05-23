
    var math = +prompt('Enter your Math marks');
    var eng = +prompt('Enter your English marks');
    var isl = +prompt('Enter your Islamiat marks');
    var phy = +prompt('Enter your Physics marks');
    var urdu = +prompt('Enter your Urdu marks');
        var total = math + eng + isl + phy + urdu;
        var perc = (total / 500) * 100;
        var grade;

        if (perc >= 80 && perc <= 100) {
            grade = 'A+';
        } else if (perc >= 70) {
            grade = 'A';
        } else if (perc >= 60) {
            grade = 'B';
        } else if (perc >= 50) {
            grade = 'C';
        } else if (perc >= 40) {
            grade = 'D';
        } else if (perc >= 33) {
            grade = 'E';
        } else {
            grade = 'F';
        }

        document.write(`<h1>Result</h1>`);
        document.write(`
        <table border='2px'> 
            <tr>
                <th>Math</th>
                <th>English</th>
                <th>Islamiat</th>
                <th>Physics</th>
                <th>Urdu</th>
                <th>Percentage</th>
                <th>Grade</th>
            </tr>
            <tr>
                <td>${math}</td>
                <td>${eng}</td>
                <td>${isl}</td>
                <td>${phy}</td>
                <td>${urdu}</td>
                <td>${perc.toFixed(2)}%</td>
                <td>${grade}</td>
            </tr>
        </table>`);
    
