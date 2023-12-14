import React, { ReactNode } from 'react'
import ActionSheetHeader from './header'

export type ActionSheetType = React.FC<{ children: ReactNode }> & {
  Header: typeof ActionSheetHeader
}

export const ActionSheet: ActionSheetType = ({ children }: {
  children: ReactNode
}) => <>{children}</>;

ActionSheet.Header = ActionSheetHeader

export default ActionSheet