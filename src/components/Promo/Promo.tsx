import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Bar from "../barBlock/Bar/Bar";
import TableBlock from "../table/TableBlock/TableBlock";

const Promo = () => {
  return (
    <Container
      maxWidth={false}
      sx={{ width: "76%", pt: "6.375rem", pb: "6.375rem" }}
    >
      <Grid container sx={{ ml: 0, mr: 0, columnGap: "1rem" }} wrap="nowrap">
        <Grid sx={{ width: "18.6%", p: 0 }}>
          <Bar />
        </Grid>
        <Grid sx={{ flexGrow: 1, p: 0 }}>
          <TableBlock />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Promo;
