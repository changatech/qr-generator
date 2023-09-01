// Attach the generateQRCode function to the button click event
$(document).ready(function () {
    var qrcode = null; 

    $("#generate-qr").click(function() {
        // Clear any existing QR code
        // $("#qrCode").empty();
        // qrcode = null;
        var text = $("#qr-text").val();

        if (text !== "") {
            qrcode = null;
            $('#qrCodeModal').on('show.bs.modal', function () {
                // Create a new QRCode instance
                qrcode = new QRCode(document.getElementById("qrCode"), {
                    text: text,
                    width: 128,
                    height: 128
                });
            });
            
        } else {
            $('#qrCodeModal').hide();
            alert("Please enter text or URL to generate a QR code.");
        }
 
    });
    // $('#qrCodeModal').on('show.bs.modal', function () {
    //     // generateQRCode();
    //     const qrCodeText = $('#qr-text').val();
    // });

    $("#download-link").click(function() {
        // Get the image source from the div
        var imageUrl = $("#qrCode img").attr("src");

        // Create a temporary anchor element
        var downloadLink = document.createElement("a");
        downloadLink.href = imageUrl;

        // Specify the filename for the downloaded image
        downloadLink.download = "qrcode.jpg";

        // Trigger a click event to start the download
        downloadLink.click();
    });

    $("#close, .close").click(function() {
        // Clear the text in the input field
        $("#qr-text").val('');

        // Clear any existing QR code
        $("#qrCode").empty();

        // Reset the QR code instance
        qrcode = null;
        
        // setTimeout(function() {
            location.reload();
        // }, 1000);
    });
});
