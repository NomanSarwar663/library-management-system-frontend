import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { SnackbarProvider } from "notistack";
import infoFill from "@iconify/icons-eva/info-fill";
import alertCircleFill from "@iconify/icons-eva/alert-circle-fill";
import checkmarkCircle2Fill from "@iconify/icons-eva/checkmark-circle-2-fill";
// mui
import { Box, GlobalStyles } from "@mui/material";
// ----------------------------------------------------------------------

function SnackbarStyles() {
  return (
    <GlobalStyles
      styles={{
        "#root": {
          "& .SnackbarContent-root": {
            width: "100%",
            borderRadius: "5px",
            backgroundColor: "white",
            "&.SnackbarItem-variantSuccess, &.SnackbarItem-variantError, &.SnackbarItem-variantInfo":
              {
                color: "black",
                backgroundColor: "white",
              },
          },
          "& .SnackbarItem-message": {
            padding: "0 !important",
            fontWeight: "bold",
          },
          "& .SnackbarItem-action": {
            marginRight: 0,
            color: "white",
            "& svg": { width: 20, height: 20 },
          },
        },
      }}
    />
  );
}

SnackbarIcon.propTypes = {
  icon: PropTypes.object,
  color: PropTypes.string,
};

function SnackbarIcon({ icon, color }) {
  return (
    <Box
      component="span"
      sx={{
        mr: 1.5,
        width: 40,
        height: 40,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon icon={icon} width={24} height={24} color={color} />
    </Box>
  );
}

NotistackProvider.propTypes = {
  children: PropTypes.node,
};

export default function NotistackProvider({ children }) {
  return (
    <>
      <SnackbarStyles />

      <SnackbarProvider
        dense
        maxSnack={5}
        autoHideDuration={2500}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        iconVariant={{
          success: <SnackbarIcon icon={checkmarkCircle2Fill} color="green" />,
          error: <SnackbarIcon icon={infoFill} color="red" />,
          info: <SnackbarIcon icon={alertCircleFill} color="DarkOrange" />,
        }}
      >
        {children}
      </SnackbarProvider>
    </>
  );
}
