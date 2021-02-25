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
    width: 100,
    height: 100,
  },
}));

export default useStyles;