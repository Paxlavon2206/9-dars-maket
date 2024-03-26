import React from 'react'

export const useModal = () => {
    const [isOpen, setisOpen] = React.useState(false);
    const open = () => setisOpen(true);
    const close = ()=> setisOpen(false);
    const toggle = ()=> setisOpen(!isOpen)
  return {isOpen, open, close, toggle}
}
