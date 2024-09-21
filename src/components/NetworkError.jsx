import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

import { useNavigate } from 'react-router-dom'
import BlankLayout from './shareComponent/BlankLayout'

// ** Styled Components
const BoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    width: '90vw'
  }
}))

const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    height: 450,
    marginTop: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    height: 400
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: theme.spacing(20)
  }
}))

const NetworkError = () => {
  const router = useNavigate()

  return (
    <Box className='content-center'
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ p: 5, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <BoxWrapper>
          <Typography variant='h2' sx={{ mb: 1.5 }}>
            Network Error
          </Typography>
          <Typography sx={{ mb: 6, color: 'text.secondary' }}>There was an error with the internal server.</Typography>
          <Button onClick={() => router("/members")} variant='contained'>
            Retry
          </Button>
        </BoxWrapper>
      </Box>
    </Box>
  )
}

NetworkError.getLayout = (page) => <BlankLayout >{page}</BlankLayout>

export default NetworkError
