import stylesConfig from "../../theme/stylesConfig";

const styles = {
  background: {
    height: "100%",
    minHeight: "100vh",
    width: "100vw",
    background: stylesConfig.colors.standardGrey,
  },
  card: {
    maxWidth: "1002px",
    margin: "0 auto",
    display: "flex",
  },
  content: {
    paddingLeft: {
      xs: "16px",
      sm: stylesConfig.spacing.veryVeryLarge,
      md: "20px",
      lg: stylesConfig.spacing.veryVeryLarge,
    },
    paddingRight: {
      xs: "16px",
      sm: stylesConfig.spacing.veryVeryLarge,
      md: "20px",
      lg: stylesConfig.spacing.veryVeryLarge,
    },
  },
  footer: {
    textAlign: "center",
    marginTop: "auto",
    paddingTop: stylesConfig.spacing.large,
    marginBottom: stylesConfig.spacing.standard,
    color: stylesConfig.colors.darkGrey,
    font: "normal normal normal 12px/45px Poppins",
  },
};

export default styles;
