import { Demo } from "../../lib/Demo";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Grid } from "@polkadot-ui/react";

export const GridAlignBottomEnd = () => {
  const code = `<Grid row alignItems="flex-end">
  <Grid style={{ height: "fit-content" }} column sm={12} md={2}>1/6 and bottom</Grid>
</Grid>`;

  const separatorStyle = {
    border: "0.1rem dashed var(--border-secondary-color)",
    padding: "0.5rem",
    TextAlign: "center",
  };

  return (
    <>
      <Demo showThemes={false}>
        <Grid
          row
          style={Object.assign({}, separatorStyle, { height: "10rem" })}
          alignItems="flex-end"
          justify="flex-end"
        >
          <Grid
            style={Object.assign({}, separatorStyle, {
              height: "4rem",
            })}
            column
            sm={12}
            md={2}
          >
            <h5>1/6 and bottom</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
