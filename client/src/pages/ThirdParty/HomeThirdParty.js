import React from 'react'
import Navbar from '../../components/Navbar'
import Button from '@material-ui/core/Button'
import { useStyles } from '../../components/Styles'
import Grid from '@material-ui/core/Grid'
import { Link } from 'react-router-dom'
import Loader from '../../components/Loader'

export default function HomeThirdParty() {
  const classes = useStyles()
  const [loading, setLoading] = React.useState(false)
  const navItem = [
    ['Buy Product', '/ThirdParty/allProducts'],
    ['Receive Product', '/ThirdParty/receive'],
    ['Ship Products', '/ThirdParty/ship'],
  ]
  return (
    <>
      <Navbar pageTitle={'Third Party'} navItems={navItem}>
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
                  src="/warehouse.png"
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
                      to="/ThirdParty/allProducts"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Buy Products
                      </Button>
                    </Link>
                    <Link
                      to="/ThirdParty/receive"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Recieve Products
                      </Button>
                    </Link>
                    <Link
                      to="/ThirdParty/ship"
                      style={{ textDecoration: 'none', color: '#fff' }}
                    >
                      <Button
                        className={classes.HomeBtn}
                        size="large"
                        variant="outlined"
                        color="primary"
                      >
                        Ship Products
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
