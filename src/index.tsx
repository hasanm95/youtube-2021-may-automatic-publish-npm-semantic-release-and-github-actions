import React, { ReactNode } from 'react'
import ActionSheetHeader from './header'

export type ActionSheetType = {
  Header: typeof ActionSheetHeader
}

export const ActionSheet: ActionSheetType = ({
  children,
}: {
  children: ReactNode
}) => {
  return <>{children}</>
}

ActionSheet.Header = ActionSheetHeader

export default ActionSheet