import React, { ReactNode } from 'react'
import ActionSheetHeader from './header'

export interface ActionSheetType {
  Header: React.FC<typeof ActionSheetHeader>
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