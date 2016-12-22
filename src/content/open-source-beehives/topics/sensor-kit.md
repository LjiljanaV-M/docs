---
title: Sensor Kit
template: bee-doc.hbs
columns: two
order: 3
---

## Introduction

![Sensor Kit](![Sensor Kit Schematics](https://github.com/AKERKits/docs/blob/master/src/assets/images/Schematic%20-%2001.png?raw=true))

The Open Source Beehives sensor kit is a custom board for remote hive monitoring. Based on the Particle Photon, it can wirelessly transmit sensor data to our open database and your smart phone application.

 * Audio
 * Internal Temperature & Humidity
 * External Temperature & Humidity
 * Altitude
 * Barometric Pressure
 * Accelerometer
 * Batter Charge Level

## Schematics

![Sensor Kit Schematics](https://github.com/AKERKits/docs/blob/master/src/assets/images/Schematic%20-%2001.png?raw=true)

See the [GitHub](https://github.com/opensourcebeehives/BuzzBox)
for source files

Here are the schematics.

## Sensor Case

See the [GitHub](https://github.com/opensourcebeehives/OSBHLogger)
for source files

Here is the sensor case & source files

## Bill of Materials

See the [Spreadsheet](https://github.com/opensourcebeehives/OSBHLogger)

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;}
.tg .tg-yw4l{vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-yw4l">Ref</th>
    <th class="tg-yw4l">Quantity</th>
    <th class="tg-yw4l">Description</th>
    <th class="tg-yw4l">Package</th>
    <th class="tg-yw4l">Part#</th>
    <th class="tg-yw4l">Manufacturer</th>
    <th class="tg-yw4l">Unit Cost</th>
    <th class="tg-yw4l">Total Cost</th>
  </tr>
  <tr>
    <td class="tg-yw4l">J1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">6 Pin PCB mount connector</td>
    <td class="tg-yw4l">PCB mount</td>
    <td class="tg-yw4l">MD-60SM</td>
    <td class="tg-yw4l">CUI</td>
    <td class="tg-yw4l">$1.26</td>
    <td class="tg-yw4l">$1.26</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U3,U8</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">Board Mount Humidity Sensors</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">BME280</td>
    <td class="tg-yw4l">Bosch Sensortec</td>
    <td class="tg-yw4l">$6.49</td>
    <td class="tg-yw4l">$12.98</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R5,R6,R7,R8,R28</td>
    <td class="tg-yw4l">5</td>
    <td class="tg-yw4l">Thick Film Resistors - SMD 0603 5% 4700ohm 100 PPM -55C to 155C</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">AF0603JR-074K7L</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.03</td>
    <td class="tg-yw4l">$0.14</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C5,C6,C13,C14</td>
    <td class="tg-yw4l">4</td>
    <td class="tg-yw4l">Multilayer Ceramic Capacitors MLCC - SMD/SMT 0.1uF 6.3Volts X7R 10%</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">GRM188R70J104KA01D</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.03</td>
    <td class="tg-yw4l">$0.13</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U5</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">60Hz ~ 15kHz Analog Microphone MEMS (Silicon) Omnidirectional (-42dB ±3dB @ 94dB SPL)</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">INMP401ACEZ-R7</td>
    <td class="tg-yw4l">InvenSense</td>
    <td class="tg-yw4l">$3.04</td>
    <td class="tg-yw4l">$3.04</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C8,C18</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">Multilayer Ceramic Capacitors MLCC - SMD/SMT 0402 0.1uF 10volts X5R 10%</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">GRM155R61A104KA01D</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C9</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Multilayer Ceramic Capacitors MLCC - SMD/SMT 0402 4.7uF 6.3volts X5R 10%</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">C1005X5R0J475K050BC</td>
    <td class="tg-yw4l">TDK</td>
    <td class="tg-yw4l">$0.35</td>
    <td class="tg-yw4l">$0.35</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R11</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Thin Film Resistors - SMD 1/16W 1.5K Ohms 0.5% 0402 25ppm</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">RG1005P-152-D-T10</td>
    <td class="tg-yw4l">Susumu</td>
    <td class="tg-yw4l">$0.07</td>
    <td class="tg-yw4l">$0.07</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R9,R10</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">Thin Film Resistors - SMD 1/16W 10K Ohms 0.5% 0402 25ppm</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">RG1005P-103-D-T10</td>
    <td class="tg-yw4l">Susumu</td>
    <td class="tg-yw4l">$0.07</td>
    <td class="tg-yw4l">$0.13</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C10</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Multilayer Ceramic Capacitors MLCC - SMD/SMT 0402 1uF 10volts X5R 10%</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">GRM155R61A105KE15D</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U4</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Operational Amplifiers - Op Amps Lo Pwr Single-Sply Rail-to-Rail</td>
    <td class="tg-yw4l">SOT-23-5</td>
    <td class="tg-yw4l">OPA344NA/3K</td>
    <td class="tg-yw4l">Texas Instruments</td>
    <td class="tg-yw4l">$1.19</td>
    <td class="tg-yw4l">$1.19</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R12</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Thin Film Resistors - SMD 1/16W 100K Ohms 0.5% 0402 25ppm</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">RG1005P-104-D-T10</td>
    <td class="tg-yw4l">Susumu</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C7</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Multilayer Ceramic Capacitors MLCC - SMD/SMT WCAP-CSGP 100pF 0402 5% 10V MLCC</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">885012005013</td>
    <td class="tg-yw4l">Wurth Electronics</td>
    <td class="tg-yw4l">$0.06</td>
    <td class="tg-yw4l">$0.06</td>
  </tr>
  <tr>
    <td class="tg-yw4l">MICRO_SD</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">microSD Socket for Transflash</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">PRT-00127</td>
    <td class="tg-yw4l">Sparkfun</td>
    <td class="tg-yw4l">$3.95</td>
    <td class="tg-yw4l">$3.95</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C15</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Tantalum Capacitors - Solid SMD 10volts 10uF 10% 1206 SMD</td>
    <td class="tg-yw4l">1206</td>
    <td class="tg-yw4l">T491A106K010AT</td>
    <td class="tg-yw4l">Kemet</td>
    <td class="tg-yw4l">$0.22</td>
    <td class="tg-yw4l">$0.22</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C12,C16</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">MLCC 0.1uF 6.3Volts X7R 10%</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">GRM188R70J104KA01D</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.03</td>
    <td class="tg-yw4l">$0.07</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U6</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Accelerometers 3-Axis Low g Digital-Output</td>
    <td class="tg-yw4l">LGA-14</td>
    <td class="tg-yw4l">ADXL345BCCZ-RL</td>
    <td class="tg-yw4l">Analog Devices</td>
    <td class="tg-yw4l">$6.23</td>
    <td class="tg-yw4l">$6.23</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C17</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">MLCC - SMD/SMT 10V 10uF X5R 0402 20% Tol</td>
    <td class="tg-yw4l">402</td>
    <td class="tg-yw4l">0402ZD106MAT2A</td>
    <td class="tg-yw4l">AVX</td>
    <td class="tg-yw4l">$0.37</td>
    <td class="tg-yw4l">$0.37</td>
  </tr>
  <tr>
    <td class="tg-yw4l">JP6</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">JST Right Angle Connector - White</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">PRT-08612</td>
    <td class="tg-yw4l">Sparkfun</td>
    <td class="tg-yw4l">$0.95</td>
    <td class="tg-yw4l">$0.95</td>
  </tr>
  <tr>
    <td class="tg-yw4l">S1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Surface Mount Right Angle Switch</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">COM-10860</td>
    <td class="tg-yw4l">Sparkfun</td>
    <td class="tg-yw4l">$0.95</td>
    <td class="tg-yw4l">$0.95</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R23</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Thin Film Resistors - SMD CPF 0603 100K 1% 50PPM 1K RL</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">CPF0603F100KC1</td>
    <td class="tg-yw4l">TE Connectivity</td>
    <td class="tg-yw4l">$0.10</td>
    <td class="tg-yw4l">$0.10</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C2</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">MLCC 1206 1uF 10volts X7R 10%</td>
    <td class="tg-yw4l">1206</td>
    <td class="tg-yw4l">VJ1206Y105KXQTW1BC</td>
    <td class="tg-yw4l">Vishay</td>
    <td class="tg-yw4l">$0.10</td>
    <td class="tg-yw4l">$0.10</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C3,C11</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">MLCC 0805 10uF 10volts X5R 10%</td>
    <td class="tg-yw4l">805</td>
    <td class="tg-yw4l">GRM21BR61A106KE19L</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.04</td>
    <td class="tg-yw4l">$0.09</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R21</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Thick Film Resistors - SMD 10K ohms 1% 0603</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">WR06X1002FTL</td>
    <td class="tg-yw4l">Walsin</td>
    <td class="tg-yw4l">$0.10</td>
    <td class="tg-yw4l">$0.10</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R2</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">RES SMD 590 OHM 1% 1/10W 0603</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">RC0603FR-07590RL</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R3,R4,R15</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">RES SMD 1.1K OHM 5% 1/10W 0603</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">RC0603JR-071K1L</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.02</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R16</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">RES SMD 100K OHM 5% 1/10W 0603</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">RC0603JR-07100KL</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R17</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">RES SMD 10K OHM 5% 1/10W 0603</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">RC0603JR-0710KL</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.01</td>
    <td class="tg-yw4l">$0.01</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">MLCC 25V 1uF X7R 0603 10% Tol</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">06033C105KAT2A</td>
    <td class="tg-yw4l">AVX</td>
    <td class="tg-yw4l">$0.11</td>
    <td class="tg-yw4l">$0.11</td>
  </tr>
  <tr>
    <td class="tg-yw4l">C4</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">MLCC 0603 0.47uF 16volts X7R 10%</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">GCM188R71C474KA55D</td>
    <td class="tg-yw4l">Murata</td>
    <td class="tg-yw4l">$0.12</td>
    <td class="tg-yw4l">$0.12</td>
  </tr>
  <tr>
    <td class="tg-yw4l">R1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">RES SMD 0.01 OHM 1% 1/4W 1206</td>
    <td class="tg-yw4l">1206</td>
    <td class="tg-yw4l">PF1206FRF070R01L</td>
    <td class="tg-yw4l">Yageo</td>
    <td class="tg-yw4l">$0.40</td>
    <td class="tg-yw4l">$0.40</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Battery Management Li-Ion Batt Chrgr &amp; Pwr-Path Mgmt IC</td>
    <td class="tg-yw4l">VQFN-16</td>
    <td class="tg-yw4l">BQ24075RGTR</td>
    <td class="tg-yw4l">Texas Instruments</td>
    <td class="tg-yw4l">$2.02</td>
    <td class="tg-yw4l">$2.02</td>
  </tr>
  <tr>
    <td class="tg-yw4l">U2</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Battery Management System-Side Impdance Trck Bttry Fuel Gge</td>
    <td class="tg-yw4l">VSON-12</td>
    <td class="tg-yw4l">BQ27441DRZR-G1A</td>
    <td class="tg-yw4l">Texas Instruments</td>
    <td class="tg-yw4l">$2.46</td>
    <td class="tg-yw4l">$2.46</td>
  </tr>
  <tr>
    <td class="tg-yw4l">D2</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Standard LEDs - SMD Green 575 nm Water Clear</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">SM0603GCL</td>
    <td class="tg-yw4l">Bivar</td>
    <td class="tg-yw4l">$0.29</td>
    <td class="tg-yw4l">$0.29</td>
  </tr>
  <tr>
    <td class="tg-yw4l">D1</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">Standard LEDs - SMD RED</td>
    <td class="tg-yw4l">603</td>
    <td class="tg-yw4l">TLMS1000-GS08</td>
    <td class="tg-yw4l">Vishay</td>
    <td class="tg-yw4l">$0.28</td>
    <td class="tg-yw4l">$0.28</td>
  </tr>
  <tr>
    <td class="tg-yw4l">PHOTON</td>
    <td class="tg-yw4l">2</td>
    <td class="tg-yw4l">12 PIN SIL VERTICAL SOCKET TIN</td>
    <td class="tg-yw4l">TH</td>
    <td class="tg-yw4l">M20-7821246</td>
    <td class="tg-yw4l">Harwin</td>
    <td class="tg-yw4l">$1.42</td>
    <td class="tg-yw4l">$2.84</td>
  </tr>
  <tr>
    <td class="tg-yw4l">J2</td>
    <td class="tg-yw4l">1</td>
    <td class="tg-yw4l">DC Power Barrell Jack (5.5x2.1mm)</td>
    <td class="tg-yw4l">SMD</td>
    <td class="tg-yw4l">PRT-12748</td>
    <td class="tg-yw4l">Sparkfun</td>
    <td class="tg-yw4l">$1.50</td>
    <td class="tg-yw4l">$1.50</td>
  </tr>
  <tr>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l"></td>
    <td class="tg-yw4l">$42.57</td>
  </tr>
</table>
