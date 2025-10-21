import { useEffect, useState } from 'react'
import { Tldraw, createTLStore, defaultShapeUtils } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'
import { YKeyValue } from 'y-utility/y-keyvalue'
import { WebsocketProvider } from 'y-websocket'
import * as Y from 'yjs'

// 创建 Y.js 文档和提供者
const doc = new Y.Doc()
const provider = new WebsocketProvider('ws://localhost:1234', 'tldraw-room', doc)

export function CollaborativeWhiteboard() {
  const [store] = useState(() => {
    const store = createTLStore({
      shapeUtils: defaultShapeUtils,
    })
    
    // 设置 Y.js 协同
    const yStore = new YKeyValue(doc.getMap('tldraw'))
    
    // 监听本地变化并同步到 Y.js
    store.listen(
      (entry) => {
        if (entry.source !== 'remote') {
          Object.entries(entry.changes.added).forEach(([id, record]) => {
            yStore.set(id, record)
          })
          Object.entries(entry.changes.updated).forEach(([id, [_prev, record]]) => {
            yStore.set(id, record)
          })
          Object.entries(entry.changes.removed).forEach(([id]) => {
            yStore.delete(id)
          })
        }
      },
      { source: 'user', scope: 'document' }
    )
    
    // 监听远程变化并同步到本地
    yStore.on('change', (changes) => {
      const toAdd: Record<string, any> = {}
      const toUpdate: Record<string, any> = {}
      const toRemove: Record<string, any> = {}
      
      changes.forEach((change, key) => {
        if (change.action === 'add' || change.action === 'update') {
          const record = yStore.get(key)
          if (record) {
            if (store.has(record.id)) {
              toUpdate[record.id] = record
            } else {
              toAdd[record.id] = record
            }
          }
        } else if (change.action === 'delete') {
          toRemove[key] = store.get(key)
        }
      })
      
      store.mergeRemoteChanges(() => {
        if (Object.keys(toAdd).length > 0) {
          store.put(Object.values(toAdd))
        }
        if (Object.keys(toUpdate).length > 0) {
          store.put(Object.values(toUpdate))
        }
        if (Object.keys(toRemove).length > 0) {
          store.remove(Object.keys(toRemove))
        }
      })
    })
    
    return store
  })

  useEffect(() => {
    return () => {
      provider.destroy()
    }
  }, [])

  return (
    <div className="w-full h-full">
      <Tldraw 
        store={store}
        onMount={(editor) => {
          // 编辑器挂载后的初始化逻辑
          console.log('Tldraw editor mounted')
        }}
      />
    </div>
  )
}