import { useState } from 'react'
import { Tldraw, createTLStore, defaultShapeUtils } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

export function CollaborativeWhiteboard() {
  const [store] = useState(() => {
    return createTLStore({
      shapeUtils: defaultShapeUtils,
    })
  })

  return (
    <div className="w-full h-full">
      <Tldraw 
        store={store}
        onMount={() => {
          console.log('Tldraw editor mounted')
        }}
      />
    </div>
  )
}