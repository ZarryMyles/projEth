import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
  pageWrap: {
    textAlign: 'center',
    color: '#24211e',
  },
  pageHeading: {
    textAlign: 'center',
    margin: '10px auto',
    padding: 0,
    color: '#24211e',
  },

  TableRoot: {
    width: '100%',
    maxWidth: 1200,
    margin: '5px auto',
    border: '1px solid red',
    borderRadius: 10,
    fontFamily: 'lato !important',
  },
  TableContainer: {
    maxHeight: 600,
    borderRadius: 7,
    fontFamily: 'lato !important',
  },
  AddressCell: {
    maxWidth: 150,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  tableCount: {
    textAlign: 'center',
    margin: '10px auto',
    padding: 0,
    color: '#24211e',
  },
  TableHead: {
    backgroundColor: '#24211e',
    color: '#fff',
  },
  TableCell: {
    color: '#24211e !important',
  },

  FormWrap: {
    maxWidth: 900,
    margin: '30px auto',
    padding: 20,
    borderRadius: 10,
    boxShadow: '2px 2px 10px #9fa8da',
  },

  RoleForm: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px auto',
  },

  //Explorer
  Explorerroot: {
    padding: '2px 4px',
    margin: '10px',
    width: '100%',
  },
  ProductPaper: {
    padding: 10,
    borderRadius: 10,
    boxShadow: '2px 2px 10px #9fa8da',
    border: '2px solid #24211e',
  },
  ExplorerdRow: {
    width: '100%',
    borderBottom: `0px solid #222`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: '0 auto',
    fontWeight: 600,
    color: '#24211e',
  },
  TableRoot2: {
    width: '100%',
    maxWidth: 1300,
    margin: '5px auto',
    border: '2px solid #24211e',
    borderRadius: 10,
    boxShadow: '2px 2px 10px #9fa8da',
  },

  //Modal
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    padding: 15,
    outline: 'none',
    width: 'min(90%, 650px)',
    height: '80%',
    border: '2px solid #24211e',
    borderRadius: 10,
    boxShadow: '2px 2px 10px #9fa8da',
    overflow: 'scroll',
  },
  Reciptpaper: {
    backgroundColor: '#fff',
    border: '0px solid #000',
    padding: 15,
    outline: 'none',
    width: 'min(95%, 950px)',
    height: '500px',
    border: '2px solid #24211e',
    borderRadius: 10,
    boxShadow: '2px 2px 10px #9fa8da',
    overflow: 'scroll',
  },
  dRow: {
    width: '100%',
    borderBottom: `1px solid #222`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: '0 auto',
  },

  dCol1: {
    width: '30%',
    textAlign: 'left',
    fontWeight: 600,
    color: '#24211e',
  },
  dCol2: {
    width: '70%',
    textAlign: 'left',
    fontWeight: 600,
    color: '#24211e',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  //Home
  HomeBtn: {
    margin: 10,
    border: '2px solid #24211e',
    color: '#24211e',
  },
  HomeCardWrap: {
    background: '#fad2cc',
    text: 'white',
    maxWidth: 500,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    margin: '10px auto',
  },

  OtherCardWrap: {
    background: '#fad2cc',
    display: 'flex !important',
    text: 'white',
    maxWidth: 500,
    width: '90%',
    padding: 20,
    borderRadius: 20,
    margin: '10px auto',
  },
})
