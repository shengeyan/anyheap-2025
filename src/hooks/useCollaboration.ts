import { useState, useEffect } from 'react'
import type { User, CollaborationState } from '@/types'

export function useCollaboration(roomId: string) {
  const [state, setState] = useState<CollaborationState>({
    users: [],
    isConnected: false,
    roomId,
  })

  useEffect(() => {
    // 这里将来可以集成实际的协同服务
    // 目前只是模拟状态
    setState(prev => ({
      ...prev,
      isConnected: true,
      users: [
        {
          id: 'current-user',
          name: '当前用户',
          color: '#3b82f6',
        },
      ],
    }))
  }, [roomId])

  const addUser = (user: User) => {
    setState(prev => ({
      ...prev,
      users: [...prev.users.filter(u => u.id !== user.id), user],
    }))
  }

  const removeUser = (userId: string) => {
    setState(prev => ({
      ...prev,
      users: prev.users.filter(u => u.id !== userId),
    }))
  }

  const updateUserCursor = (userId: string, cursor: { x: number; y: number }) => {
    setState(prev => ({
      ...prev,
      users: prev.users.map(u =>
        u.id === userId ? { ...u, cursor } : u
      ),
    }))
  }

  return {
    ...state,
    addUser,
    removeUser,
    updateUserCursor,
  }
}