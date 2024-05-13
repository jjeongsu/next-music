'use client'
import { useTheme } from 'next-themes'
const ToggleButton = () => {
  const { systemTheme, theme, setTheme } = useTheme()
  const currentTheme = theme == 'system' ? systemTheme : theme
  //현재 상태
  const handleToggle = () => {
    //토글버튼 상태 변경
    console.log('currentTheme', currentTheme)
    setTheme(currentTheme === 'dark' ? 'light' : 'dark')
  }
  return (
    <button onClick={handleToggle} className="text-primary">
      클릭하세요
    </button>
  )
}
export default ToggleButton
