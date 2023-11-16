import React, { useContext } from "react";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Badge,
  Button,
  MenuItem,
  MenuList,
  Paper,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Link } from "react-router-dom";
import { Context } from "../../Context";

function Navbar() {
  const { emptySearch } = useContext(Context);

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#032541" }}>
      <Toolbar>
        <Link to={"/"} className="pl-5" onClick={emptySearch}>
          <img
            style={{ cursor: "pointer" }}
            src="/assets/images/tmdb1.png"
            alt=""
            height={50}
          />
        </Link>

        <Stack direction="row" flexGrow={1} ml={2} spacing={4}>
          <Tooltip
            sx={{ cursor: "pointer" }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/movie/popular">
                    Popular
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/now-playing">
                    Now Playing
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/upcoming">
                    Upcoming
                  </MenuItem>
                  <MenuItem component={Link} to="/movie/top-rated">
                    Top Rated
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={15} fontWeight={"bold"}>
              Movies
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/tv/popular">
                    Popular
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/airing-today">
                    Airing Today
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/upcoming">
                    On TV
                  </MenuItem>
                  <MenuItem component={Link} to="/tv/top-rated">
                    Top Rated
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={15} fontWeight={"bold"}>
              {" "}
              TV Shows
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/people">
                    People
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={15} fontWeight={"bold"}>
              People
            </Typography>
          </Tooltip>
          <Tooltip
            sx={{ cursor: "pointer" }}
            title={
              <Paper>
                <MenuList>
                  <MenuItem component={Link} to="/discussions">
                    Discussions
                  </MenuItem>
                  <MenuItem component={Link} to="/leaderboard">
                    Leaderboard
                  </MenuItem>
                  <MenuItem component={Link} to="/support">
                    Support
                  </MenuItem>
                  <MenuItem component={Link} to="/api">
                    API
                  </MenuItem>
                </MenuList>
              </Paper>
            }
          >
            <Typography fontSize={15} fontWeight={"bold"}>
              More
            </Typography>
          </Tooltip>
        </Stack>

        <Stack direction="row" spacing={3} alignItems={`center`}>
          <AddIcon sx={{ cursor: "pointer" }} />
          <Button variant="outlined" size="small" sx={{ color: "white" }}>
            EN
          </Button>
          <Badge badgeContent={4} color="danger">
            <NotificationsIcon sx={{ cursor: "pointer" }} />
          </Badge>

          <Tooltip
            sx={{ cursor: "pointer" }}
            arrow
            title={<Typography>Profile and Settings</Typography>}
          >
            <Typography
              className="bg-blue-600"
              sx={{
                cursor: "pointer",
                borderRadius: "50%",
                fontSize: "12px",
                width: "28px",
                height: "28px",
                justifyContent: "center",
                display: "flex",
                alignItems: "center",
              }}
            >
              M
            </Typography>
          </Tooltip>

          <SearchIcon fontSize="medium" />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
