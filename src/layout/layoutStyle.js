const drawerWidth = 240;

const layoutStyle = theme => ({
   root: {
      display: 'flex',
   },
   toolbar: {
      paddingRight: 24, // keep right padding when drawer closed
   },
   toolbarIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
   },
   appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
   },
   appBarColorPrimary: {
      backgroundColor: "#101B2B!important",
      color: "#ffffff"
   },
   appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   menuButton: {
      marginLeft: 4,
      marginRight: 42,
   },
   menuButtonHidden: {
      display: 'none',
   },
   title: {
      flexGrow: 1,
   },
   drawerPaper: {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   },
   drawerPaperClose: {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing.unit * 7,
      [theme.breakpoints.up('sm')]: {
         width: theme.spacing.unit * 9,
      },
   },
   appBarSpacer: theme.mixins.toolbar,
   content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: '100vh',
      overflow: 'auto',
   },
   chartContainer: {
      marginLeft: -22,
   },
   tableContainer: {
      height: 320,
   },
   h5: {
      marginBottom: theme.spacing.unit * 2,
   },
   logoDiv: {
      display: 'flex',
      width: '15em',
      alignItems: 'center',
   },
   logoDivImg: {
      height: '2.5em',
      width: '2.5em',
   },
   logoTagName: {
      marginLeft: '28px',
   },
   drawerIcon: {
      color: "#ffffff",
   },
   logoContainer: {
      backgroundColor: "#101B2B!important",
      color: "#ffffff"
   },
   u__padLeft20: {
      paddingLeft: "20px !important"
   },
   accessRoleSelect: {
      color: "#fff"
   },
})

export default layoutStyle
