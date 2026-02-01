import React from 'react'

interface SaveButtonProps {
  onSave: () => void
  disabled?: boolean
}

const SaveButton: React.FC<SaveButtonProps> = ({ onSave, disabled = false }) => {
  if (disabled) return null

  return (
    <button onClick={onSave} type="button" className="">
      Uložit formátování
    </button>
  )
}

export default SaveButton
