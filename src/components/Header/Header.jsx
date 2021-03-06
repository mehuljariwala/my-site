import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import Logo from "../../assets/img/logo250.png";
import { Link } from "react-router-dom";
import PdfFile from "../../assets/resume.pdf";
import { useStyles, headerLinkStyles } from "./HeaderStyles.jsx";
import { Box } from "@material-ui/core";

function Header() {
  const classes = useStyles();

  return (
    <Box className={classes.grow}>
      <AppBar position="static" elevation={1} className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Box className={classes.grow}>
              <Link to="/">
                <img height="80px" src={Logo} alt="logo" />
              </Link>
            </Box>
            <Box className={classes.sectionDesktop}>
              <HeaderLink />
              <IconButton aria-label="delete">
                <Link
                  to={{
                    pathname:
                      "https://www.linkedin.com/in/mehul-jariwala-352a01132/",
                  }}
                  target="_blank"
                >
                  <LinkedInIcon className={classes.linkedInIcon} />
                </Link>
              </IconButton>
              <IconButton aria-label="delete">
                <Link
                  target="_blank"
                  to={{ pathname: "https://github.com/mehuljariwala" }}
                >
                  <GitHubIcon className={classes.gitHubIcon} />
                </Link>
              </IconButton>
            </Box>
            <Box className={classes.sectionMobile}>
              <HeaderLink />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}

const HeaderLink = () => {
  const classes = headerLinkStyles();
  return (
    <>
      <Link to="/projects" className={classes.link}>
        Projects
      </Link>
      <Link
        to={PdfFile}
        target="_blank"
        rel="noopener noreferrer"
        className={classes.link}
      >
        Resume
      </Link>
    </>
  );
};

export default Header;
