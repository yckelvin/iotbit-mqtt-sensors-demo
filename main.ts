input.onButtonPressed(Button.A, function () {
    distance = sonar.ping(
    DigitalPin.P13,
    DigitalPin.P14,
    PingUnit.Centimeters
    )
    ESP8266_IoT.publishMqttMessage(convertToText(distance), "myhome/null/distance", ESP8266_IoT.QosList.Qos2)
    OLED.writeString("Distance: ")
    OLED.writeNumNewLine(distance)
})
let distance = 0
basic.showNumber(0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("", "")
basic.showNumber(1)
let client_id = randint(0, 99999999)
ESP8266_IoT.setMQTT(
ESP8266_IoT.SchemeList.TCP,
convertToText(client_id),
"test",
"test",
""
)
ESP8266_IoT.connectMQTT("192.168.0.240", 1884, false)
basic.showNumber(2)
OLED.init(128, 64)
basic.showIcon(IconNames.Yes)
loops.everyInterval(3600000, function () {
	
})
