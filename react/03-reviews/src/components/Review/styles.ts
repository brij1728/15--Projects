import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: any) => ({
  card: {
    border: "1px solid grey",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  actions: {
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    color: "black",
    "&:hover": {
      color: "red",
    },
  },
}));
