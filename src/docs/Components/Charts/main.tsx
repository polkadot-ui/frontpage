import { Edit } from "../../lib/Edit";
import { Header } from "../../lib/Header";
import { PieSimple } from "./PieSimple";
import { DonutStyles } from "./DonutStyles";
import { ChartSpeed } from "./ChartSpeed";

import { DocProps } from "../../lib/types";
import { PieDead } from "./PieDead";

export const Doc = ({ folder, npm }: DocProps) => {
  return (
    <>
      <Edit folder={folder} />
      <Header
        title="Charts"
        subtitle="Light-weight charts for displaying simple statistics."
        npm={npm}
        status="stable"
      />
      <h3 id="pie-chart">Pie Chart</h3>
      <p>
        The <code>Chart</code> component is a light-weight, CSS-rendered pie and
        donut chart designed to display simple statistics. Charts can support
        multiple segments and adjust their size via the <code>diameter</code>{" "}
        prop.
      </p>

      <p>
        Pass <code>items</code> into <code>Chart</code> consisting of{" "}
        <code>value</code> and <code>color</code> properties:
      </p>

      <PieSimple />

      <h3 id="empty-chart">Empty Chart</h3>

      <p>
        If the sum of all chart values equate to zero, the chart will display no
        segments and simply render a circle with a background color of{" "}
        <code>&#8209;&#8209;background&#8209;default</code>:
      </p>

      <PieDead />

      <h3 id="donut-chart">Donut Chart</h3>

      <p>
        Donut charts can also be configured using the <code>innerRadius</code>{" "}
        prop:
      </p>

      <DonutStyles />

      <h3 id="transition-speed">Transition Speed</h3>

      <p>
        To control transition speed, the <code>speed</code> prop can be passed
        into charts. The default speed is <code>1</code> second:
      </p>

      <ChartSpeed />

      <hr className="md" />

      <h2 id="css-variables-used">CSS Variables Used</h2>

      <ul>
        <li>
          <code>--background-default</code>: Default background for empty
          charts.
        </li>
      </ul>
    </>
  );
};
