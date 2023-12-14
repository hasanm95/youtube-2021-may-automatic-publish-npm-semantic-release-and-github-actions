/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentProps, useState } from 'react'
import { StandaloneXmarkRegularIcon } from '@deriv/quill-icons/Standalone'
import { ActionSheetType } from '..'
import React from 'react'

// const MyComponent = React.lazy(() => import('.').then(mod => mod.)) as unknown as ActionSheetType

const ActionSheet = React.lazy(() =>
  import('..').then((module) => ({ default: module.default })),
) as unknown as ActionSheetType

const ActionSheetExample = ({
  primaryAction,
  secondaryAction,
  alignment,
  ...props
}: ComponentProps<typeof ActionSheet.Root> &
  ComponentProps<typeof ActionSheet.Footer>) => {
  return (
    <ActionSheet.Root>dasdf</ActionSheet.Root>
    // <>
    //   <ActionSheet.Root {...props}>
    //     <ActionSheet.Trigger>Click Here</ActionSheet.Trigger>
    //     <ActionSheet.Portal>
    //       <ActionSheet.Close aria-label="close">
    //         <StandaloneXmarkRegularIcon />
    //       </ActionSheet.Close>
    //       <ActionSheet.Header className="py-400 text-center">
    //         <div className="relative py-1100">
    //           <h3 className="ml-auto">Title</h3>
    //         </div>
    //         <p>Description</p>
    //       </ActionSheet.Header>
    //       <ActionSheet.Content className="flex flex-col gap-500 py-800">
    //         <p>
    //           Bottom sheet is a surface fixed at the bottom of the screen which
    //           includes content related to the previous screen.
    //         </p>
    //         <p>
    //           Bottom sheet is a surface fixed at the bottom of the screen which
    //           includes content related to the previous screen.
    //         </p>
    //         <p>
    //           Bottom sheet is a surface fixed at the bottom of the screen which
    //           includes content related to the previous screen.
    //         </p>
    //         <p>
    //           Bottom sheet is a surface fixed at the bottom of the screen which
    //           includes content related to the previous screen.
    //         </p>
    //       </ActionSheet.Content>
    //       <ActionSheet.Footer
    //         primaryAction={primaryAction}
    //         secondaryAction={secondaryAction}
    //         alignment={alignment}
    //       />
    //     </ActionSheet.Portal>
    //   </ActionSheet.Root>
    // </>
  )
}

export default ActionSheetExample
