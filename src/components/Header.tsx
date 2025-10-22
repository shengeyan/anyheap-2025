import { useRef } from 'react'
import { Button } from './ui/button'
import { Upload, Users, Settings, Image } from 'lucide-react'

export function Header() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const imageInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = () => {
    fileInputRef.current?.click()
  }

  const handleImageUpload = () => {
    imageInputRef.current?.click()
  }

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      console.log('上传文件:', file.name)
      // 这里可以添加实际的文件上传逻辑
    }
  }

  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const file = files[0]
      console.log('上传图片:', file.name)
      // 这里可以添加实际的图片上传逻辑
    }
  }

  return (
    <header className="border-b bg-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">协同编辑白板</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={handleFileUpload}>
            <Upload className="w-4 h-4 mr-2" />
            上传文件
          </Button>
          <Button variant="outline" size="sm" onClick={handleImageUpload}>
            <Image className="w-4 h-4 mr-2" />
            上传图片
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1">
          <Users className="w-4 h-4" />
          <span className="text-sm text-muted-foreground">在线用户: 1</span>
        </div>
        <Button variant="ghost" size="sm">
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* 隐藏的文件输入 */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        onChange={onFileChange}
        accept=".pdf,.doc,.docx,.txt,.md"
      />
      <input
        ref={imageInputRef}
        type="file"
        className="hidden"
        onChange={onImageChange}
        accept="image/*"
      />
    </header>
  )
}