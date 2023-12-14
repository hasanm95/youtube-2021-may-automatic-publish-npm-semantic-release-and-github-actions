import React, { ComponentProps, useContext } from 'react'
import { createPortal } from 'react-dom'
import qtMerge from 'clsx'
import HandleBar from '../handle-bar'
import { actionSheetRootCVA } from '../action-sheet.classnames'
import { useSwipeBlock } from './hook'
import { ActionSheetContext } from '../root'
import { useSsr } from 'usehooks-ts'

type PortalProps = ComponentProps<'div'>

const Portal = ({ children, ...restProps }: PortalProps) => {
  const { show, handleClose, className, position, type, expandable } =
    useContext(ActionSheetContext)
  const { height, containerRef, bindHandle, isScrolled, isLg } = useSwipeBlock({
    show,
    onClose: handleClose,
  })
  const { isServer } = useSsr()

  if (isServer) return null

  return (
    <>
      {createPortal(
        <>
          <div
            className="pointer-events-none fixed inset-general-none z-10 flex select-none items-end justify-center overflow-x-hidden transition-all duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)] data-[state=close]:invisible"
            role="dialog"
            data-state={show ? 'open' : 'close'}
            {...restProps}
          >
            {type === 'modal' && (
              <div
                data-testid="dt-actionsheet-overlay"
                onClick={handleClose}
                className="pointer-events-auto fixed inset-50 -z-10 bg-opacity-black-500 transition-opacity duration-[160ms] ease-[cubic-bezier(0.72,_0,_0.24,_1)]"
              ></div>
            )}
            <div
              className={qtMerge(
                actionSheetRootCVA({ show, position, className }),
              )}
              ref={containerRef}
              style={{ height }}
              {...(!isScrolled && !isLg && expandable ? bindHandle() : {})}
            >
              {expandable && <HandleBar {...bindHandle()} />}
              {children}
            </div>
          </div>
        </>,
        document.body,
      )}
    </>
  )
}

Portal.displayName = 'Portal'

export default Portal
