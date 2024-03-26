import React from 'react'
import { Dialog } from '@headlessui/react'
import { useLocation } from 'react-router-dom'


export const Modal = ({isOpen, close, children }) => {
    const location =  useLocation();
    React.useEffect(() => {
        close()
    },[location.pathname])
  return (
         <Dialog
      open={isOpen}
      onClose={close}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-modal flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-[200px] text-[8px] sm:w-[300px] sm:text-[10px] md:w-[400px] md:text-[13px] lg:w-[600px] lg:text-[15px]  rounded bg-white p-5 text-center items-center">        
          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}
