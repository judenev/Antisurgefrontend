import { Box } from '@mui/system'
import React from 'react'
import AdminHome from '../../pages/AdminHome'
import EmpOngoingJobs from './mainpage/EmpOngoingJobs'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAdminAuth } from '../../redux/features/adminAuthSlice'
import Adminongoingjobs from './mainpage/Adminongoingjobs'

export default function AdminOngoingJobs() {
  console.log("ONGOING JOBS")
const navigate =useNavigate()
const token =useSelector(selectAdminAuth)

  React.useEffect(() => {
   
    if (!token.token){
      navigate('/admin')
       

    }
  }, [token.token,navigate])
  return (
        
    <Box sx={{ display: 'flex'}}>
        <AdminHome/>
        <Box component="main" sx={{ flexGrow: 1, p: 6,pl:0 }}>
      <Adminongoingjobs/>
        </Box>
    </Box>
    


)
    
}

