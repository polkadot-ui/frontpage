import { Demo } from "../../lib/Demo";
import { SimpleEditor } from "../../lib/SimpleEditor";
import { Grid } from "@polkadot-ui/react";

export const GridAlignTop = () => {
  const code = `<Grid row justify="center">
  <Grid column sm={12} md={6}>1/2 and centered</Grid>
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
          alignItems="flex-start"
        >
          <Grid
            style={Object.assign({}, separatorStyle, {
              height: "4rem",
              flex: 1,
            })}
            column
            sm={12}
            md={2}
          >
            <h5>1/6 and top</h5>
          </Grid>
        </Grid>
      </Demo>
      <SimpleEditor code={code} />
    </>
  );
};
