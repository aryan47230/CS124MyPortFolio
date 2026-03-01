'use client'
import ModalBase from './ModalBase'
import { motion } from 'framer-motion'
import { useState } from 'react'

const CODE_SNIPPETS = {
  lora: `// LoRa Transceiver — STM32WLJ55
// CAN bus + telemetry bridge

HAL_StatusTypeDef LoRa_Init(void) {
  SPI_HandleTypeDef hspi1;
  hspi1.Init.BaudRatePrescaler = SPI_BAUDRATEPRESCALER_8;
  
  // Configure LoRa parameters
  LoRa_SetFrequency(915e6);      // 915 MHz ISM
  LoRa_SetSpreadFactor(SF7);     // Spreading factor
  LoRa_SetBandwidth(BW_125kHz);
  
  return HAL_OK;
}

void CAN_TelemetryBridge(void) {
  CAN_RxHeaderTypeDef rxHeader;
  uint8_t rxData[8];
  
  while(HAL_CAN_GetRxFifoFillLevel(&hcan1, 0)) {
    HAL_CAN_GetRxMessage(&hcan1, 0, &rxHeader, rxData);
    LoRa_Transmit(rxData, rxHeader.DLC);  // Bridge to LoRa
  }
}`,
  edge: `// Edge Warehouse Monitor — Arduino
// Load cell + ultrasonic sensor fusion

#include <HX711.h>
#define TRIG_PIN 9
#define ECHO_PIN 10

HX711 scale;
float calibration_factor = -7050.0;

void setup() {
  scale.begin(DOUT, CLK);
  scale.set_scale(calibration_factor);
  scale.tare();
}

void loop() {
  float weight = scale.get_units(10);  // 10-sample avg
  float distance = ultrasonicRead();
  
  // KPI classification
  StockLevel level = classifyStock(weight, distance);
  setLED(level);   // On-device analytics
  
  if (level == STOCKOUT_RISK) {
    triggerReorderAlert(SKU_ID);
  }
}`,
}

export default function EmbeddedModal({ onClose }: { onClose: () => void }) {
  const [activeSnippet, setActiveSnippet] = useState<'lora' | 'edge'>('lora')

  return (
    <ModalBase
      onClose={onClose}
      accentColor="#4ade80"
      accentRgb="74,222,128"
      title="EMBEDDED"
      subtitle="Firmware & Drivers · Terminal"
    >
      <div className="space-y-5">

        {/* Experience cards */}
        {[
          {
            title: 'Embedded Software Engineer',
            org: 'Illini EV Concept',
            period: 'Jan 2026 – Present',
            stack: ['STM32F4', 'STM32WLJ55', 'CAN Bus', 'LoRa', 'TouchGFX', 'C'],
            bullets: [
              'Built LoRa-based radio transceiver using STM32F4 and STM32WLJ55 for low-latency communication',
              'Implemented CAN bus communication between telemetry modules and vehicle dashboard systems',
              'Developed TouchGFX touchscreen HMI with real-time vehicle mapping and multi-display support',
            ],
          },
          {
            title: 'Edge Monitoring System',
            org: 'URSA Research — John Deere Logistics',
            period: 'Aug – Dec 2025',
            stack: ['Arduino', 'Load Cells', 'Ultrasonic', 'Node-RED', 'Python'],
            bullets: [
              'Developed Arduino-based edge monitoring integrating load cells + ultrasonic sensors with signal conditioning',
              'Reduced 10–15% sensor variance via calibration and impedance-matching techniques',
              'Generated 3,084 KPI-based alerts (96.3% coverage) across 3,204 SKUs for real-time stock classification',
            ],
          },
        ].map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 + 0.1 }}
            className="rounded-lg p-5"
            style={{ background: '#0f0f0f', border: '1px solid #1e1e1e' }}
          >
            <div className="flex gap-4">
              <div className="w-0.5 flex-shrink-0 self-stretch rounded-full"
                style={{ background: 'rgba(74,222,128,0.4)' }} />
              <div className="flex-1">
                <h3 className="font-display text-xl tracking-wider text-white">{p.title}</h3>
                <p className="font-mono text-xs mt-0.5 tracking-widest" style={{ color: 'rgba(74,222,128,0.6)' }}>
                  {p.org} · {p.period}
                </p>
                <div className="flex flex-wrap gap-1.5 my-3">
                  {p.stack.map(s => (
                    <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded tracking-widest"
                      style={{ background: 'rgba(74,222,128,0.06)', border: '1px solid rgba(74,222,128,0.12)', color: 'rgba(74,222,128,0.7)' }}>
                      {s}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-sm text-neutral-400 leading-relaxed">
                      <span style={{ color: 'rgba(74,222,128,0.4)' }} className="flex-shrink-0 mt-0.5">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Code terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="rounded-lg overflow-hidden"
          style={{ border: '1px solid rgba(74,222,128,0.15)' }}
        >
          {/* Terminal bar */}
          <div className="flex items-center gap-2 px-4 py-2.5"
            style={{ background: '#080e08', borderBottom: '1px solid rgba(74,222,128,0.1)' }}>
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-900/60" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/60" />
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(74,222,128,0.4)' }} />
            </div>
            <div className="flex gap-1 ml-4">
              {[
                { key: 'lora', label: 'lora_bridge.c' },
                { key: 'edge', label: 'edge_monitor.ino' },
              ].map(tab => (
                <button
                  key={tab.key}
                  data-hoverable
                  onClick={() => setActiveSnippet(tab.key as 'lora' | 'edge')}
                  className="font-mono text-[10px] px-3 py-1 rounded tracking-widest transition-colors"
                  style={{
                    background: activeSnippet === tab.key ? 'rgba(74,222,128,0.1)' : 'transparent',
                    color: activeSnippet === tab.key ? 'rgba(74,222,128,0.9)' : 'rgba(255,255,255,0.3)',
                    border: activeSnippet === tab.key ? '1px solid rgba(74,222,128,0.2)' : '1px solid transparent',
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <span className="ml-auto font-mono text-[9px]" style={{ color: 'rgba(74,222,128,0.3)' }}>C / Arduino</span>
          </div>
          {/* Code */}
          <div className="crt-screen" style={{ background: '#020c02' }}>
            <pre className="p-4 text-xs leading-relaxed overflow-x-auto"
              style={{ fontFamily: 'IBM Plex Mono, monospace', color: 'rgba(74,222,128,0.85)', textShadow: '0 0 6px rgba(74,222,128,0.3)' }}>
              {CODE_SNIPPETS[activeSnippet]}
            </pre>
          </div>
        </motion.div>
      </div>
    </ModalBase>
  )
}
