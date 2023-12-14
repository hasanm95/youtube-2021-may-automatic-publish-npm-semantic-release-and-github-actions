import React, { ComponentProps, useContext } from 'react'
import { ActionSheetContext } from '../root'

type TriggerProps = ComponentProps<"button">

const Trigger = (props: TriggerProps) => {
  const { handleOpen } = useContext(ActionSheetContext)
  return <button onClick={handleOpen} {...props} />
}

Trigger.displayName = 'Trigger'

export default Trigger
