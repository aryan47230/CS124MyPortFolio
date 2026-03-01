'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import WorkbenchScene from '@/components/WorkbenchScene'
import RoboticsModal from '@/components/modals/RoboticsModal'
import EmbeddedModal from '@/components/modals/EmbeddedModal'
import SoftwareModal from '@/components/modals/SoftwareModal'
import AboutModal from '@/components/modals/AboutModal'
import EducationModal from '@/components/modals/EducationModal'
import AwardsModal from '@/components/modals/AwardsModal'
import CustomCursor from '@/components/CustomCursor'
import TopBar from '@/components/TopBar'

export type ModalType = 'robotics' | 'embedded' | 'software' | 'about' | 'education' | 'awards' | null

export default function Home() {
  const [activeModal, setActiveModal] = useState<ModalType>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (activeModal) {
      document.body.classList.add('modal-open')
    } else {
      document.body.classList.remove('modal-open')
    }
  }, [activeModal])

  const openModal = (type: ModalType) => setActiveModal(type)
  const closeModal = () => setActiveModal(null)

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-bench-bg noise">
      <CustomCursor />

      {/* Boot screen */}
      <AnimatePresence>
        {!isLoaded && (
          <motion.div
            className="fixed inset-0 z-50 bg-bench-bg flex items-center justify-center"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <p className="terminal-text text-xs tracking-widest animate-pulse">
                INITIALIZING WORKBENCH...
              </p>
              <div className="mt-4 w-48 h-px bg-bench-border overflow-hidden">
                <motion.div
                  className="h-full bg-amber-glow"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                  style={{ boxShadow: '0 0 8px rgba(245,158,11,0.8)' }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative w-full min-h-screen"
      >
        <TopBar onNav={openModal} />
        <WorkbenchScene onOpen={openModal} />
      </motion.div>

      {/* Modals */}
      <AnimatePresence>
        {activeModal === 'robotics' && <RoboticsModal onClose={closeModal} />}
        {activeModal === 'embedded' && <EmbeddedModal onClose={closeModal} />}
        {activeModal === 'software' && <SoftwareModal onClose={closeModal} />}
        {activeModal === 'about' && <AboutModal onClose={closeModal} />}
        {activeModal === 'education' && <EducationModal onClose={closeModal} />}
        {activeModal === 'awards' && <AwardsModal onClose={closeModal} />}
      </AnimatePresence>
    </div>
  )
}
