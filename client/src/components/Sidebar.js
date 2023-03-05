import React from 'react'
import DesktopSidebar from './DesktopSidebar'

import { useDispatch } from 'react-redux'
import { changeBarType } from '../redux/sidebar/slice'
import MobileSidebar from './MobileSidebar'

const Sidebar = ({setShowSidebar}) => {
  
  const dispatch = useDispatch()
  const [sidebarView, setSidebarView] = React.useState()

  React.useEffect(()=>{

    if(window.innerWidth > 750){
      dispatch(changeBarType("desktop"))
      setSidebarView("desktop")
    }
    else{
      dispatch(changeBarType("mobile"))
      setSidebarView("mobile")
    }
  },[])

  if(sidebarView === "desktop") return (
    <DesktopSidebar setShowSidebar={setShowSidebar} />
  )
  else{
    return(
      <MobileSidebar setShowSidebar={setShowSidebar} />
    )
  }
}

export default Sidebar