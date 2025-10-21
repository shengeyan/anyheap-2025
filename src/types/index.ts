// 用户类型定义
export interface User {
  id: string
  name: string
  avatar?: string
  color: string
  cursor?: {
    x: number
    y: number
  }
}

// 文件上传类型
export interface UploadedFile {
  id: string
  name: string
  type: string
  size: number
  url: string
  uploadedAt: Date
  uploadedBy: string
}

// 协同编辑状态
export interface CollaborationState {
  users: User[]
  isConnected: boolean
  roomId: string
}

// 白板配置
export interface WhiteboardConfig {
  enableGrid: boolean
  snapToGrid: boolean
  darkMode: boolean
  showUI: boolean
}