import { Props } from "./types";

export const UtilsComponent = ({
  title,
  description,
  params,
  component,
}: Props) => {
  return (
    <>
      <h3 id="title">{title}</h3>
      <p>{description}</p>
      <div className="params">
        {params.map((prm) => {
          const param = prm.split(":");
          return (
            <p key={param[0]}>
              <span>{param[0]}</span>
              {param[1]}
            </p>
          );
        })}
      </div>
      {component}
    </>
  );
};
