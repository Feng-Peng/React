import { useEffect } from 'react'
import reset from './resetScroll'

// 使用自定义Hook：useEffect，当pathname不变（组件不切换）时，就不会执行reset函数
export default function useScroll(pathname) {
    useEffect(reset, [pathname])
}
