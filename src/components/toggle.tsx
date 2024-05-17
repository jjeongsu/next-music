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
    <button onClick={handleToggle} className="text-primary relative  ml-4 mr-2">
      <div className="e w-[26px] h-[45px] rounded-full border-solid border-2 order-primary"></div>
      <div
        className={`absolute w-[14px] h-[14px]  ${
          theme === 'dark' ? 'bottom-[5px]' : 'top-[5px]'
        }
        transition-position left-[6px] rounded-full bg-primary `}
      ></div>
    </button>
  )
}
export default ToggleButton
