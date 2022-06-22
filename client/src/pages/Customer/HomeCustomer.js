import React from 'react'
import Navbar from '../../components/Navbar'
import Button from '@material-ui/core/Button'
import { useStyles } from '../../components/Styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'

export default function HomeCustomer() {
  const classes = useStyles()
  const [loading, setLoading] = React.useState(false)
  const navItem = [
    ['Purchase Product', '/Customer/buy'],
    ['Receive Product', '/Customer/receive'],
    ['Your Products', '/Customer/allReceived'],
  ]
  return (
    <>
      <Navbar pageTitle={'Delivery Hub'} navItems={navItem}>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Grid
              container
              spacing={3}
              style={{ height: '100%', minHeight: '90vh', width: '100%' }}
            >
              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  minHeight: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                <img
                  alt="."
                  src="/delivery.png"
                  style={{ width: '90%', height: 'auto' }}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                style={{
                  minHeight: '100%',
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  flexDirection: 'row',
                }}
              >
                <div className={classes.HomeCardWrap}>
                  <h1 className={classes.pageHeading}>Operations</h1>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link
                      to="/Customer/buy"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Purchase Products
                      </Button>
                    </Link>
                    <Link
                      to="/Customer/receive"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Receive Products
                      </Button>
                    </Link>
                    <Link
                      to="/Customer/allReceived"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Your Products
                      </Button>
                    </Link>
                    <br />
                  </div>
                </div>
              </Grid>
            </Grid>
          </>
        )}
      </Navbar>
    </>
  )
}
