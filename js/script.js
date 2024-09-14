// Sample items data
var items = [
    { name: "โรงแรม อมารี ดอนเมือง แอร์พอร์ต กรุงเทพ<br>(Amari Don Muang Airport Bangkok Hotel )", province: "Bangkok", arrivalDate: "2024-05-10", departureDate: "2024-05-15", price: "8400 บาท", imageFileName: "hotelpic1/Hotel1_5.jpg", url: "hoteldetail.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "โรงแรมเซ็นทารา แกรนด์ แอท เซ็นทรัลพลาซา ลาดพร้าว<br>(Centara Grand at Central Plaza Ladprao Bangkok)", province: "Bangkok", arrivalDate: "2024-05-12", departureDate: "2024-05-17", price: "8500 บาท", imageFileName: "hotelpic2/Hotel2_1.jpg", url: "hoteldetail02.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "อันดามันตรา รีสอร์ท แอนด์ วิลล่า ภูเก็ต<br>(Andamantra Resort and Villa Phuket)", province: "Pattaya", arrivalDate: "2024-05-14", departureDate: "2024-05-19", price: "11500 บาท", imageFileName: "hotelpic3/Hotel3_4.jpg", url: "hoteldetail03.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "รีคอล อีสาน อีสาน คอนเซปต์ แอท เขาใหญ่<br>(Recall Isaan Isan Concept at Khaoyai)", province: "Nakhon Ratchasima", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "9000 บาท", imageFileName: "hotelpic4/Hotel4_1.jpg", url: "hoteldetail04.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "บีทู โคราช ไนท์มาร์เก็ต บูทิก แอนด์ บัดเจ็ต โฮเทล<br>(B2 Korat Night Market Boutique & Budget Hotel)", province: "Bangkok", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "3800 บาท", imageFileName: "hotelpic5/Hotel5_1.jpg", url: "hoteldetail05.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "โรงแรมฟลอร่า ครีก เชียงใหม่ (กฤษดาดอย)<br>(Flora Creek Chiang Mai)", province: "Chiangmai", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "2700 บาท", imageFileName: "hotelpic6/Hotel6_1.jpg", url: "hoteldetail06.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "โรงแรมคุ้มภูคำ <br>(Khum Phucome Hotel)", province: "Chiangmai", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "5200 บาท", imageFileName: "hotelpic7/Hotel7_1.jpg", url: "hoteldetail07.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "การ์เด้น คลิฟ รีสอร์ท แอนด์ สปา<br>(Garden Cliff Resort & Spa Pattaya)", province: "Pattaya", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "6700 บาท", imageFileName: "hotelpic8/Hotel8_6.jpg", url: "hoteldetail08.html", fontFamily: "kanit-medium, sans-serif" },
    { name: "บัญดารา ภูเก็ต บีช รีสอร์ท<br>(Bandara Phuket Beach Resort)", province: "Pattaya", arrivalDate: "2024-05-16", departureDate: "2024-05-21", price: "5500 บาท", imageFileName: "hotelpic9/Hotel9_2.jpg", url: "hoteldetail09.html", fontFamily: "kanit-medium, sans-serif" }
];

// Function to display items based on selected province, arrival and departure dates
function displayItems() {
    // Clear previous items
    $("#items").empty();

    // Get selected province
    const selectedProvince = $("#province").val();

    // Get selected dates
    const arrivalDate = $("#arrivalDate").val();
    const departureDate = $("#departureDate").val();

    // Filter items based on selected province, arrival and departure dates
    let filteredItems = items;

    if (selectedProvince !== "all") {
        filteredItems = filteredItems.filter(item => item.province === selectedProvince);
    }

    if (arrivalDate) {
        filteredItems = filteredItems.filter(item => item.arrivalDate >= arrivalDate);
    }

    if (departureDate) {
        filteredItems = filteredItems.filter(item => item.departureDate <= departureDate);
    }

    // Display filtered items
    filteredItems.forEach(function (item, index) {
        $("#items").append(
            `<div class="col-12 col-md-4">
                <a href="${item.url}" class="card-link">
                    <div class="article-wrapper">
                        <figure>
                            <img src="img/${item.imageFileName}" alt="${item.name}" />
                        </figure>
                        <div class="article-body">
                            <h2>${item.name}</h2>
                            <p>Price: ${item.price}</p>
                        </div>
                    </div>
                </a>
            </div>`
        );
    });
}

$(document).ready(function () {
    // Initialize datepickers
    $('#arrivalDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });

    $('#departureDate').datepicker({
        format: 'yyyy-mm-dd',
        autoclose: true,
        todayHighlight: true
    });

    // Initial display of items
    displayItems();

    // Handle province dropdown change
    $("#province").change(function () {
        displayItems();
    });

    // Handle datepicker change
    $("#arrivalDate, #departureDate").change(function () {
        displayItems();
    });
});

$(document).ready(function () {
    $("#totalCal").click(function () {
        // Get the value of num and test
        var num = parseInt($("#num").text());
        var test = parseInt($("#test").text());
        // Multiply num by test
        var result = num * test;
        // Display the result
        alert("Result: " + result);
    });
});



