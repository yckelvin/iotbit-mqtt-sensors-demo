input.onButtonPressed(Button.A, function () {
    is_touch = pins.digitalReadPin(DigitalPin.P1)
    if (is_touch == 1) {
        OLED.clear()
        OLED.writeStringNewLine("Sensor is touched")
    } else {
        OLED.clear()
        OLED.writeStringNewLine("Sensor is not touched")
    }
})
let is_touch = 0
basic.showNumber(0)
ESP8266_IoT.initWIFI(SerialPin.P8, SerialPin.P12, BaudRate.BaudRate115200)
ESP8266_IoT.connectWifi("ssid", "password")
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
if (ESP8266_IoT.isMqttBrokerConnected()) {
    basic.showIcon(IconNames.Yes)
}
loops.everyInterval(3600000, function () {
	
})
