import React from 'react'
import ActionSheetHeader from './header'

export type ActionSheetType = React.FC & {
  Header: typeof ActionSheetHeader
}

export const ActionSheet: ActionSheetType = ({ children }): JSX.Element => <>{children}</>;

ActionSheet.Header = ActionSheetHeader

export default ActionSheet