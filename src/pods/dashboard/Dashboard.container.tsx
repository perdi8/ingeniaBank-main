import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { DashboardContent } from "../../core/routes/DashboardContent.routes";
import { DashboardComponent } from "./Dashboard.component";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  //Contenidos del DashBoard
  content: {
    flexGrow: 1,
    overflow: "auto",
    height: "100vh",
  },
  //Container del Dashboard
  container: {
    paddingBottom: theme.spacing(4),
    paddingTop: theme.spacing(10),
  },
  //Separación entre elementos del AppBar
  appBarSpacer: theme.mixins.toolbar,
}));
export const Dashboard: React.FC = () => {
  let history = useHistory();
  const classes = useStyles();

  //Estado que controle si se muestra el menú o no
  const [open, setOpen] = React.useState(true);

  //Metodo par controlar la Apertura del Drawer
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  //Metodo par controlar el Cierre del Drawer
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Metodo para realizar un Logout y navegar a Login
  const logout = () => {
    history.push("/login");
  };
  return (
    <>
      <DashboardComponent
        handleDrawerOpen={handleDrawerOpen}
        logout={logout}
        handleDrawerClose={handleDrawerClose}
        open={open}
      />
      <main className={classes.content}>
        {/* Se separa el contenido del AppBar para poder verlo */}
        <div className={classes.appBarSpacer}>
          {/* Se crea el Container */}
          <Container className={classes.container} maxWidth="lg">
            {/* Aqui se ponen los componentes o Switch de rutas */}
            <Switch>
              <Route path="/dashboard" component={DashboardContent} />
            </Switch>
          </Container>
        </div>
      </main>
    </>
  );
};
