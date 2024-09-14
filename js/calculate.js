$(document).ready(function () {
    // Function to increment the number
    $("#plus").click(function () {
        var num = parseInt($("#num").text());
        num++;
        $("#num").text(num);
        calculateTotal();
    });

    // Function to decrement the number
    $("#minus").click(function () {
        var num = parseInt($("#num").text());
        if (num > 0) {
            num--;
            $("#num").text(num);
            calculateTotal();
        }
    });

    // Function to calculate total and display it
    function calculateTotal() {
        var num = parseInt($("#num").text());
        var roomPrice = parseInt($("#roomPrice").text());
        var result = num * roomPrice;

        // Store result in local storage
        localStorage.setItem('result', result);
        localStorage.setItem('roomPrice', roomPrice);
        localStorage.setItem('num', num);

        // Display the result in #showResult
        $("#showResult").text(result);
        $("#showPrice").text(roomPrice);
        $("#showNum").text(num);
    }

    // Calculate total when the page loads
    calculateTotal();

    // Function to handle total calculation
    $("#resultOfCal").click(function () {
        calculateTotal();
    });
});





//Second one




$(document).ready(function () {
    // Function to increment the number
    $("#plus1").click(function () {
        var num = parseInt($("#num1").attr("value"));
        num++;
        $("#num1").attr("value", num).text(num + " คน");
        calculateTotal();
    });

    // Function to decrement the number
    $("#minus1").click(function () {
        var num = parseInt($("#num1").attr("value"));
        if (num > 0) {
            num--;
            $("#num1").attr("value", num).text(num + " คน");
            calculateTotal();
        }
    });

    // Function to calculate total and display it
    function calculateTotal() {
        var num = parseInt($("#num1").attr("value"));
        var roomPrice = parseInt($("#roomPrice1").text());
        var result1 = num * roomPrice;

        // Store result in local storage
        localStorage.setItem('result1', result1);
        localStorage.setItem('roomPrice1', roomPrice);
        localStorage.setItem('num1', num);

        // Display the result in #showResult1
        $("#showResult1").text(result1);
        $("#showPrice1").text(roomPrice);
        $("#showNum1").text(num);
    }

    // Calculate total when the page loads
    calculateTotal();

    // Function to handle total calculation
    $("#resultOfCal").click(function () {
        calculateTotal();
    });
});
