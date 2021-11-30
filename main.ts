radio.onReceivedString(function (receivedString) {
    basic.setLedColor(0x00ff00)
    basic.showString(receivedString)
    serial.writeLine(receivedString)
    basic.turnRgbLedOff()
})
basic.setLedColor(0xff0000)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirectToUSB()
basic.pause(5000)
radio.setGroup(82)
radio.setTransmitPower(7)
radio.setFrequencyBand(82)
basic.turnRgbLedOff()
basic.forever(function () {
	
})
