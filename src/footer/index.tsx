
import qtMerge from 'clsx'
import { actionSheetFooterCVA } from '../action-sheet.classnames'
import { FooterProps } from '../types'
import React, { useContext } from 'react'
import { ActionSheetContext } from '../root'

const Footer = ({
  primaryAction,
  secondaryAction,
  alignment,
  className,
  ...restProps
}: FooterProps) => {
  const { handleClose } = useContext(ActionSheetContext)
  if (!primaryAction && !secondaryAction) return null

  const primaryActionHandler = () => {
    primaryAction?.onAction()
    handleClose?.()
  }

  const secondaryActionHandler = () => {
    secondaryAction?.onAction()
    handleClose?.()
  }

  return (
    <div
      className={qtMerge(actionSheetFooterCVA({ alignment, className }))}
      {...restProps}
    >
      {primaryAction && (
        <button
          onClick={primaryActionHandler}
        >
          {primaryAction.content}
        </button>
      )}
      {secondaryAction && (
        <button
          onClick={secondaryActionHandler}
        >
          {secondaryAction.content}
        </button>
      )}
    </div>
  )
}

export default Footer
