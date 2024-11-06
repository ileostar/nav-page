import { defineStore } from 'pinia'

export const useBackupStore = defineStore('backup', {
  state: () => ({
    lastBackupDate: null as Date | null,
    autoBackup: false,
    backupInterval: 7, // 默认7天
  }),

  actions: {
    async createBackup() {
      // 获取所有需要备份的数据
      const settings = localStorage.getItem('settings')
      const userData = localStorage.getItem('userData')
      const timerData = localStorage.getItem('timerData')

      const backupData = {
        settings,
        userData,
        timerData,
        timestamp: new Date().toISOString()
      }

      // 创建并下载备份文件
      const blob = new Blob([JSON.stringify(backupData)], { type: 'application/json' })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `backup-${new Date().toISOString()}.json`
      a.click()
      
      this.lastBackupDate = new Date()
    },

    async restoreBackup(file: File) {
      try {
        const text = await file.text()
        const data = JSON.parse(text)
        
        // 恢复数据
        if (data.settings) localStorage.setItem('settings', data.settings)
        if (data.userData) localStorage.setItem('userData', data.userData)
        if (data.timerData) localStorage.setItem('timerData', data.timerData)
        
        return true
      } catch (error) {
        console.error('恢复备份失败:', error)
        return false
      }
    }
  }
})
