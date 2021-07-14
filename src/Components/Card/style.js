import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    image: {
      objectFit: "cover",
      width: "400px",
      height: "400px",
      ...theme.typography,
    },
  })
);

export default useStyles;
