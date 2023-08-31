import { Link as RouterLink, LinkProps } from "react-router-dom";
import { Link as MuiLink, LinkProps as MuiLinkProps } from "@mui/material";

type Props = LinkProps & MuiLinkProps;

function Link(props: Props) {
  return (
    <MuiLink
      component={RouterLink}
      {...props}
      sx={{ textDecoration: "none", color: "black", ...props.sx }}
    ></MuiLink>
  );
}

export default Link;
