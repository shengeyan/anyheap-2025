import { Button } from './ui/button'
import { Upload, Users, Settings } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b bg-white px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">协同编辑白板</h1>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
            上传文件
          </Button>
          <Button variant="outline" size="sm">
            <Upload className="w-4 h-4 mr-2" />
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
    </header>
  )
}