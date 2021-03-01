import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    [theme.breakpoints.up('xs')]: {
      paddingLeft: theme.spacing(0),
      paddingRight: theme.spacing(0),
    },
    flexGrow: 1,
  },
  container:{
    justifyContent:"center",
  },
  paper: {
    padding: theme.spacing(2),
    margin:theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "50%",
    height: "50%",
  },
  firstPlayerCheckedCell:{
    padding: theme.spacing(2),
    margin:theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "50%",
    height: "50%",
    background:"red"
  },
  secondPlayerCheckedCell:{
    padding: theme.spacing(2),
    margin:theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "50%",
    height: "50%",
    background:"blue"
  }
}));

export default useStyles;
