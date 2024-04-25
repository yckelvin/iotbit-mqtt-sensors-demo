input.onButtonPressed(Button.A, function () {
    temp = dht11_dht22.readData(dataType.temperature)
    ESP8266_IoT.publishMqttMessage(convertToText(temp), "myhome/null/temperature", ESP8266_IoT.QosList.Qos2)
    OLED.writeString("Temp: ")
    OLED.writeNum(temp)
})
let temp = 0
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
OLED.init(128, 64)
basic.showNumber(3)
dht11_dht22.queryData(
DHTtype.DHT11,
DigitalPin.P2,
true,
false,
true
)
dht11_dht22.selectTempType(tempType.celsius)
basic.showNumber(4)
basic.pause(2000)
if (ESP8266_IoT.isMqttBrokerConnected()) {
    basic.showIcon(IconNames.Yes)
}
loops.everyInterval(3600000, function () {
	
})
