import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(40),
    paddingRight: theme.spacing(40),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 50,
    height: 50,
  },
  firstPlayerCheckedCell:{
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 50,
    height: 50,
    background:"red"
  },
  secondPlayerCheckedCell:{
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: 50,
    height: 50,
    background:"blue"
  }
}));

export default useStyles;
